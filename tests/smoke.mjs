import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readProjectFile = (relativePath) =>
  readFileSync(path.join(root, relativePath), "utf8");

const appSource = readProjectFile("app.js");
const htmlSource = readProjectFile("index.html");
const cssSource = readProjectFile("style.css");
const manifestSource = readProjectFile("site.webmanifest");
const serviceWorkerSource = readProjectFile("service-worker.js");

function stripQueryAndHash(reference) {
  return reference.split(/[?#]/, 1)[0];
}

function isLocalReference(reference) {
  return (
    reference &&
    !reference.startsWith("#") &&
    !reference.startsWith("//") &&
    !/^[a-z][a-z\d+.-]*:/i.test(reference)
  );
}

function collectLocalReferences() {
  const references = new Set();
  const add = (reference) => {
    if (isLocalReference(reference)) {
      references.add(stripQueryAndHash(reference));
    }
  };

  for (const match of htmlSource.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    add(match[1]);
  }

  for (const match of cssSource.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    add(match[1]);
  }

  for (const match of appSource.matchAll(
    /["'`]((?:assets|icons|images)\/[^"'`?#]+\.(?:ico|png|svg|webm|webp))(?:[?#][^"'`]*)?["'`]/gi
  )) {
    add(match[1]);
  }

  const manifest = JSON.parse(manifestSource);
  for (const icon of manifest.icons ?? []) {
    add(icon.src);
  }

  return [...references].sort();
}

function assertFileExistsWithExactCase(relativeReference) {
  const normalized = path.normalize(decodeURIComponent(relativeReference));
  const absolute = path.resolve(root, normalized);
  const relative = path.relative(root, absolute);

  assert.ok(
    relative && !relative.startsWith("..") && !path.isAbsolute(relative),
    `Local reference must stay inside the project: ${relativeReference}`
  );

  let current = root;
  for (const segment of relative.split(path.sep)) {
    const entries = readdirSync(current);
    assert.ok(
      entries.includes(segment),
      `Missing file or path-case mismatch: ${relativeReference}`
    );
    current = path.join(current, segment);
  }

  assert.ok(statSync(current).isFile(), `Referenced path is not a file: ${relativeReference}`);
}

function loadTreasureConfiguration() {
  const boundary = appSource.indexOf("function deepClone");
  assert.notEqual(boundary, -1, "Could not isolate the treasure configuration");

  const context = {};
  const configurationSource = `${appSource.slice(0, boundary)}\n` +
    "globalThis.__config = { treasureRegistry, pieceIdMap, PROGRESS_PAYLOAD_VERSION };";
  vm.runInNewContext(configurationSource, context, {
    filename: "app.js#treasure-configuration"
  });

  return context.__config;
}

function loadIntegerHelpers() {
  const start = appSource.indexOf("function deepClone");
  const boundary = appSource.indexOf("function hasOwn", start);
  assert.notEqual(start, -1, "Could not find the numeric helper section");
  assert.notEqual(boundary, -1, "Could not isolate the numeric helper section");

  const context = {};
  const helperSource = `${appSource.slice(start, boundary)}\n` +
    "globalThis.__integerHelpers = { normalizeCount, bindIntegerCountInput };";
  vm.runInNewContext(helperSource, context, {
    filename: "app.js#integer-helpers"
  });

  return context.__integerHelpers;
}

function countFunctionReferences(name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return [...appSource.matchAll(new RegExp(`\\b${escapedName}\\s*\\(`, "g"))].length;
}

function loadAppShell() {
  const boundary = serviceWorkerSource.indexOf("self.addEventListener");
  assert.notEqual(boundary, -1, "Could not isolate the service worker app shell");

  const context = {};
  const appShellSource = `${serviceWorkerSource.slice(0, boundary)}\n` +
    "globalThis.__appShell = APP_SHELL;";
  vm.runInNewContext(appShellSource, context, {
    filename: "service-worker.js#app-shell"
  });

  return context.__appShell;
}

test("app.js parses as JavaScript", () => {
  assert.doesNotThrow(() => new vm.Script(appSource, { filename: "app.js" }));
});

test("site.webmanifest parses and has usable icon metadata", () => {
  const manifest = JSON.parse(manifestSource);

  assert.equal(typeof manifest.name, "string");
  assert.ok(manifest.name.trim());
  assert.ok(Array.isArray(manifest.icons) && manifest.icons.length > 0);

  for (const icon of manifest.icons) {
    assert.match(icon.src, /\.(?:png|svg|webp)$/i);
    assert.match(icon.sizes, /^(?:any|\d+x\d+)$/);
    assert.match(icon.type, /^image\//);
  }
});

test("service worker parses and its local app shell exists with exact case", () => {
  assert.doesNotThrow(
    () => new vm.Script(serviceWorkerSource, { filename: "service-worker.js" })
  );

  const appShell = loadAppShell();
  assert.ok(Array.isArray(appShell) && appShell.length > 0);

  for (const entry of appShell) {
    assert.equal(typeof entry, "string");
    assert.ok(isLocalReference(entry), `App-shell entry must be local: ${entry}`);

    const relativeEntry = stripQueryAndHash(entry).replace(/^\.\//, "");
    if (!relativeEntry) {
      assert.ok(statSync(root).isDirectory());
    } else {
      assertFileExistsWithExactCase(relativeEntry);
    }
  }
});

test("service-worker cleanup is scoped and runtime cache writes stay alive", () => {
  assert.match(
    serviceWorkerSource,
    /key\.startsWith\(CACHE_PREFIX\)\s*&&\s*key\s*!==\s*CACHE_NAME/,
    "Activation must only remove older caches owned by this app"
  );
  assert.match(
    serviceWorkerSource,
    /event\.waitUntil\(refreshed/,
    "Stale-while-revalidate writes must remain attached to the fetch event"
  );
  assert.ok(
    (serviceWorkerSource.match(/await\s+cache\.put\s*\(/g) ?? []).length >= 2,
    "Navigation and asset cache writes must be awaited"
  );
});

test("index registers the same-directory service worker after feature detection", () => {
  assert.match(htmlSource, /["']serviceWorker["']\s+in\s+navigator/);
  assert.match(
    htmlSource,
    /navigator\s*\.\s*serviceWorker\s*\.\s*register\s*\(\s*["']\.\/service-worker\.js["']/
  );
});

test("all local HTML, CSS, manifest, and app asset references exist with exact case", () => {
  const references = collectLocalReferences();
  assert.ok(references.length >= 100, "Unexpectedly few local resources were discovered");

  for (const reference of references) {
    assertFileExistsWithExactCase(reference);
  }
});

test("treasure registry and stable piece IDs satisfy their data contracts", () => {
  const { treasureRegistry, pieceIdMap, PROGRESS_PAYLOAD_VERSION } =
    loadTreasureConfiguration();
  const expectedPieceCounts = {
    ornette: 5,
    odore: 5,
    map: 8,
    compass: 6,
    telescope: 5,
    ring: 14,
    krogdalo: 3,
    nostos: 6
  };
  const supportedTypes = new Set(["simple", "grind", "crafted", "lifeskillCraft"]);
  const seenPieceIds = new Set();

  assert.ok(Number.isInteger(PROGRESS_PAYLOAD_VERSION) && PROGRESS_PAYLOAD_VERSION > 0);
  assert.deepEqual(Object.keys(treasureRegistry), Object.keys(expectedPieceCounts));
  assert.deepEqual(Object.keys(pieceIdMap), Object.keys(expectedPieceCounts));

  for (const [treasureId, expectedCount] of Object.entries(expectedPieceCounts)) {
    const treasure = treasureRegistry[treasureId];
    const mappedIds = pieceIdMap[treasureId];

    assert.equal(treasure.id, treasureId);
    assert.ok(treasure.name.trim());
    assert.equal(treasure.pieces.length, expectedCount);
    assert.equal(mappedIds.length, expectedCount);

    for (const [index, piece] of treasure.pieces.entries()) {
      assert.equal(piece.id, mappedIds[index]);
      assert.match(piece.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      assert.equal(seenPieceIds.has(piece.id), false, `Duplicate piece ID: ${piece.id}`);
      seenPieceIds.add(piece.id);

      assert.ok(piece.name.trim());
      assert.ok(supportedTypes.has(piece.type), `Unsupported type for ${piece.id}`);

      if (piece.type === "simple") {
        assert.equal(typeof piece.obtained, "boolean");
      } else if (piece.type === "grind") {
        assert.equal(typeof piece.fullDrop?.obtained, "boolean");
        assert.ok(Number.isInteger(piece.pity?.current) && piece.pity.current >= 0);
        assert.ok(Number.isInteger(piece.pity?.max) && piece.pity.max > 0);
        assert.ok(piece.pity.current <= piece.pity.max);
      } else if (piece.type === "crafted") {
        assert.ok(Number.isInteger(piece.material?.current) && piece.material.current >= 0);
        assert.ok(Number.isInteger(piece.material?.required) && piece.material.required > 0);
        assert.ok(piece.material.current <= piece.material.required);
      } else if (piece.type === "lifeskillCraft") {
        for (const material of [piece.lowerMaterial, piece.essence]) {
          assert.ok(Number.isInteger(material?.current) && material.current >= 0);
          assert.ok(Number.isInteger(material?.required) && material.required > 0);
          assert.ok(material.current <= material.required);
        }
      }
    }
  }

  assert.equal(seenPieceIds.size, 52);
});

test("count inputs normalize fractions, bounds, and blank commits to integers", () => {
  const { normalizeCount, bindIntegerCountInput } = loadIntegerHelpers();

  assert.equal(normalizeCount("12.9"), 12);
  assert.equal(normalizeCount(-4.2), 0);
  assert.equal(normalizeCount(140, 0, 100), 100);
  assert.equal(normalizeCount("not-a-number", 0, 100, 7), 7);

  const listeners = new Map();
  const committed = [];
  let currentValue = 2;
  const input = {
    value: "2",
    addEventListener(type, listener) {
      listeners.set(type, listener);
    }
  };

  bindIntegerCountInput(input, {
    getValue: () => currentValue,
    setValue: (value) => {
      currentValue = value;
    },
    min: 0,
    max: 100,
    onCommit: (value) => committed.push(value)
  });

  assert.equal(input.step, "1");
  assert.equal(input.inputMode, "numeric");

  input.value = "17.8";
  listeners.get("input")();
  assert.equal(currentValue, 17);
  assert.equal(input.value, "17");

  input.value = "999";
  listeners.get("change")();
  assert.equal(currentValue, 100);
  assert.equal(input.value, "100");

  input.value = "";
  listeners.get("blur")();
  assert.equal(currentValue, 0);
  assert.equal(input.value, "0");
  assert.deepEqual(committed, [17, 100, 0]);
});

test("both dialogs use shared focus trapping, background isolation, and focus return", () => {
  const dialogRoleCount = [
    ...appSource.matchAll(
      /setAttribute\(\s*["']role["']\s*,\s*["']dialog["']\s*\)/g
    )
  ].length;
  const modalAttributeCount = [
    ...appSource.matchAll(
      /setAttribute\(\s*["']aria-modal["']\s*,\s*["']true["']\s*\)/g
    )
  ].length;

  assert.ok(dialogRoleCount >= 2, "Both modal surfaces must expose dialog semantics");
  assert.ok(modalAttributeCount >= 2, "Both modal surfaces must be marked modal");
  assert.ok(countFunctionReferences("activateModalAccessibility") >= 3);
  assert.ok(countFunctionReferences("deactivateModalAccessibility") >= 3);
  assert.match(appSource, /event\.key\s*!==\s*["']Tab["']/);
  assert.match(appSource, /element\.inert\s*=\s*true/);
  assert.match(appSource, /returnTarget\.focus\s*\(\s*\)/);
  assert.match(cssSource, /body\.modal-open\b/);
});

test("visible progress bars expose and update semantic progress values", () => {
  assert.ok(
    countFunctionReferences("configureProgressBar") >= 4,
    "Progress semantics helper must be applied to each interactive progress type"
  );
  assert.ok(
    countFunctionReferences("updateProgressBar") >= 4,
    "Progress value helper must be called whenever interactive progress changes"
  );

  for (const attribute of [
    "role",
    "aria-label",
    "aria-valuemin",
    "aria-valuemax",
    "aria-valuenow",
    "aria-valuetext"
  ]) {
    assert.match(
      appSource,
      new RegExp(`(?:set|remove)Attribute\\(\\s*["']${attribute}["']`),
      `Missing semantic progress marker: ${attribute}`
    );
  }

  assert.match(appSource, /setAttribute\(\s*["']role["']\s*,\s*["']progressbar["']/);
});

test("html2canvas is available without a parser-blocking third-party script", () => {
  const html2CanvasScriptTags = [
    ...htmlSource.matchAll(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*html2canvas[^"']*["'][^>]*>/gi)
  ].map((match) => match[0]);

  for (const scriptTag of html2CanvasScriptTags) {
    assert.match(
      scriptTag,
      /(?:\basync\b|\bdefer\b|\btype\s*=\s*["']module["'])/i,
      "An HTML html2canvas script must not block document parsing"
    );
  }

  const loaderConstantReferences = [
    ...appSource.matchAll(/\bHTML2CANVAS_SCRIPT_URL\b/g)
  ].length;
  const hasOnDemandLoader =
    loaderConstantReferences >= 2 &&
    /createElement\(\s*["']script["']\s*\)/.test(appSource) &&
    /\.src\s*=\s*HTML2CANVAS_SCRIPT_URL\b/.test(appSource);

  assert.ok(
    html2CanvasScriptTags.length > 0 || hasOnDemandLoader,
    "html2canvas must be loaded non-blockingly in HTML or on demand before sharing"
  );
});
