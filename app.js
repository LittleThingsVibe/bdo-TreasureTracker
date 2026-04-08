const STORAGE_PREFIX = "bdoTreasureTracker_";
const PANEL_STATE_KEY = "bdoTreasureTracker_panelState_v6";
const ATANIS_STATE_KEY = "bdoTreasureTracker_atanis_v2";

const treasureRegistry = {
  ornette: {
    id: "ornette",
    name: "Ornette’s Spirit Essence",
    subtitle: "Infinite HP Potion",
    icon: "icons/ornettes-spirit-essence.webp",
    combine: {
      image: "assets/combi-hp.png",
      text: "Arrange the required pieces in your inventory."
    },
    pieces: [
      {
        name: "Sherekhan’s Panacea",
        icon: "icons/sherekhans-panacea.webp",
        type: "grind",
        fullDrop: {
          item: "Sherekhan’s Panacea",
          icon: "icons/sherekhans-panacea.webp",
          obtained: false
        },
        pity: {
          item: "Dragon’s Fang",
          icon: "icons/dragons-fang.webp",
          current: 0,
          max: 100
        },
        exchange: {
          item: "Dragon’s Roar",
          icon: "icons/dragons-roar.webp"
        },
        location: "Sherekhan Necropolis",
        mobs: "Garud, Belcadas, Nybrica, Federik, Afuaru",
        tip: "Night rotation is stronger. Afuaru can give a high-value pity drop.",
        atanisNote: "Atanis’ Element can also be exchanged for this pity item from supported grind zones. Use the shared helper to plan where it helps most."
      },
      {
        name: "Ron’s Tintinnabulum",
        icon: "icons/rons-tintinnabulum.webp",
        type: "grind",
        fullDrop: {
          item: "Ron’s Tintinnabulum",
          icon: "icons/rons-tintinnabulum.webp",
          obtained: false
        },
        pity: {
          item: "Tranquil Tinniolium",
          icon: "icons/tranquil-tinniolium.webp",
          current: 0,
          max: 100
        },
        exchange: {
          item: "Forest’s Whisper",
          icon: "icons/forests-whisper.webp"
        },
        location: "Forest Ronaros / Tooth Fairy Forest",
        mobs: "Ronaros Guardian, Ronaros Catcher, Ronaros Marksman, Ronaros Scout, Afuaru",
        tip: "Afuaru matters here too. Keep this section updated after each grind.",
        atanisNote: "Atanis’ Element can also be exchanged for this pity item from supported grind zones. Use the shared helper to plan where it helps most."
      },
      {
        name: "Ash Halfmoon Kagtunak",
        icon: "icons/ash-halfmoon-kagtunak.webp",
        type: "grind",
        fullDrop: {
          item: "Ash Halfmoon Kagtunak",
          icon: "icons/ash-halfmoon-kagtunak.webp",
          obtained: false
        },
        pity: {
          item: "Blood Wolf’s Oath",
          icon: "icons/blood-wolfs-oath.webp",
          current: 0,
          max: 100
        },
        exchange: {
          item: "Crimson Breath of Resentment",
          icon: "icons/crimson-breath-of-resentment.webp"
        },
        location: "Blood Wolf Settlement",
        mobs: "Kagtum Executioner, Kagtum Guard, Kagtum Chaser, Kagtum Raider, Blood Wolf, Afuaru",
        tip: "This one feels best when you track pity often instead of guessing later.",
        atanisNote: "Atanis’ Element can also be exchanged for this pity item from supported grind zones. Use the shared helper to plan where it helps most."
      },
      {
        name: "Gayak’s Courage Stone",
        icon: "icons/gayaks-courage-stone.webp",
        type: "crafted",
        obtained: false,
        material: {
          item: "Garmoth’s Scale",
          icon: "icons/garmoths-scale.webp",
          current: 0,
          required: 30
        },
        location: "Garmoth’s Nest / Garmoth-related content",
        mobs: "World Boss Garmoth and related sources",
        tip: "Track scales here. This crafted piece auto-completes when the required material amount is reached."
      },
      {
        name: "Musical Spirit’s Sound Stone",
        icon: "icons/musical-spirits-sound-stone.webp",
        type: "crafted",
        obtained: false,
        material: {
          item: "Peridot Leaf",
          icon: "icons/peridot-leaf.webp",
          current: 0,
          required: 300
        },
        location: "Peridot Leaf exchange / related content",
        mobs: "Exchange-based material",
        tip: "Use this to track your leaf count instead of guessing. It auto-completes at the required amount."
      }
    ]
  },

  odore: {
    id: "odore",
    name: "Odore’s Spirit Essence",
    subtitle: "Infinite MP Potion",
    icon: "icons/odores-spirit-essence.webp",
    combine: {
      image: "assets/combi-mp.png",
      text: "Arrange the required pieces in your inventory."
    },
    pieces: [
      {
        name: "Narc’s Crimson Tear",
        icon: "icons/narcs-tear.webp",
        type: "grind",
        fullDrop: {
          item: "Narc’s Crimson Tear",
          icon: "icons/narcs-tear.webp",
          obtained: false
        },
        pity: {
          item: "Narc’s Solace",
          icon: "icons/narcs-solace.webp",
          current: 0,
          max: 100
        },
        exchange: {
          item: "Narc’s Tear",
          icon: "icons/narcs-tear.webp"
        },
        location: "Manshaum Forest",
        mobs: "Manshaum Shaman, Manshaum Warrior, Manshaum Great Warrior, Manshaum Hunter, Manshaum Fighter, Afuaru",
        tip: "Main drop or pity route. Afuaru can also matter here.",
        atanisNote: "Atanis’ Element can also be exchanged for this pity item from supported grind zones. Use the shared helper to plan where it helps most."
      },
      {
        name: "Markthanan’s Gland",
        icon: "icons/markthanans-gland.webp",
        type: "grind",
        fullDrop: {
          item: "Markthanan’s Gland",
          icon: "icons/markthanans-gland.webp",
          obtained: false
        },
        pity: {
          item: "Katzvariak’s Venom",
          icon: "icons/katzvariaks-venom.webp",
          current: 0,
          max: 100
        },
        exchange: {
          item: "Markthanan’s Greed",
          icon: "icons/markthanans-greed.webp"
        },
        location: "Tshira Ruins",
        mobs: "Leaf Keeper, Grove Keeper, Vine Keeper, Leaf Spider, Murky Swamp Caller, Swamp Imp Bronk, Tree Ghost Spider, Tree Hermit, Kvariak, Afuaru",
        tip: "Track venom carefully. This one is easier when updated often.",
        atanisNote: "Atanis’ Element can also be exchanged for this pity item from supported grind zones. Use the shared helper to plan where it helps most."
      },
      {
        name: "Valtarra’s Clairvoyance",
        icon: "icons/valtarras-clairvoyance.webp",
        type: "grind",
        fullDrop: {
          item: "Valtarra’s Clairvoyance",
          icon: "icons/valtarras-clairvoyance.webp",
          obtained: false
        },
        pity: {
          item: "Valtarra’s Memory",
          icon: "icons/valtarras-memory.webp",
          current: 0,
          max: 100
        },
        exchange: {
          item: "Valtarra’s Nail",
          icon: "icons/valtarras-nail.webp"
        },
        location: "Navarn Steppe",
        mobs: "Ferrica, Ferrina, Belladonna Elephant, Belladonna Elephant Baby, Afuaru",
        tip: "Tanning piece. Keep pity updated cleanly instead of backfilling later.",
        atanisNote: "Atanis’ Element can also be exchanged for this pity item from supported grind zones. Use the shared helper to plan where it helps most."
      },
      {
        name: "Krogdalo’s Protection Stone",
        icon: "icons/krogdalos-protection-stone.webp",
        type: "crafted",
        obtained: false,
        material: {
          item: "Rumbling Earth Shard",
          icon: "icons/rumbling-earth-shard.webp",
          current: 0,
          required: 100
        },
        location: "Krogdalo’s Trace, Kamasylvia",
        mobs: "Exchange-based material",
        tip: "Bring 100 Rumbling Earth Shards to Krogdalo’s Trace."
      },
      {
        name: "Night Crow’s Dawn Stone",
        icon: "icons/night-crows-dawn-stone.webp",
        type: "crafted",
        obtained: false,
        material: {
          item: "Dragon Scale Fossil",
          icon: "icons/dragon-scale-fossil.webp",
          current: 0,
          required: 100
        },
        location: "Ominous Altar, Garmoth’s Nest",
        mobs: "Exchange-based material",
        tip: "Bring 100 Dragon Scale Fossils to the Ominous Altar."
      }
    ]
  },

  map: {
    id: "map",
    name: "Archaeologist’s Map",
    subtitle: "Treasure Map",
    icon: "icons/archaeologists-map.webp",
    combine: {
      image: "assets/combi-map.png",
      text: "Arrange the required pieces in your inventory."
    },
    pieces: [
      {
        name: "Map Piece (Sulfur #1)",
        icon: "icons/map-piece-1.webp",
        type: "simple",
        obtained: false,
        location: "Roud Sulfur Mine<br>Dekhia Roud Sulfur Mine <span class='tip-accent'>(high GS alternative)</span>",
        mobs: "Lava Tukar, Afuaru",
        tip: "Very low drop rate. Afuaru can also drop it. Dekhia is the better high-GS option."
      },
      {
        name: "Map Piece (Pila Ku #2)",
        icon: "icons/map-piece-2.webp",
        type: "simple",
        obtained: false,
        location: "Pila Ku Jail<br>Dekhia Pila Ku Jail <span class='tip-accent'>(high GS alternative)</span>",
        mobs: "Iron Fist Warder, Afuaru",
        tip: "Pila Ku piece. Keep it tracked separately. Dekhia is better for stronger players."
      },
      {
        name: "Map Piece (Sulfur #3)",
        icon: "icons/map-piece-3.webp",
        type: "simple",
        obtained: false,
        location: "Roud Sulfur Mine<br>Dekhia Roud Sulfur Mine <span class='tip-accent'>(high GS alternative)</span>",
        mobs: "Lava Devourer, Afuaru",
        tip: "Second Sulfur-side piece with a different source mob. Dekhia is the better high-GS route."
      },
      {
        name: "Map Piece (Pila Ku #4)",
        icon: "icons/map-piece-4.webp",
        type: "simple",
        obtained: false,
        location: "Pila Ku Jail<br>Dekhia Pila Ku Jail <span class='tip-accent'>(high GS alternative)</span>",
        mobs: "Sordid Deportee, Gabel, Afuaru",
        tip: "Final Pila Ku piece. Dekhia is a stronger alternative for higher GS players."
      },
      {
        name: "Blood Ruby",
        icon: "icons/blood-ruby.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      },
      {
        name: "Ocean Sapphire",
        icon: "icons/ocean-sapphire.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      },
      {
        name: "Gold Topaz",
        icon: "icons/gold-topaz.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      },
      {
        name: "Forest Emerald",
        icon: "icons/forest-emerald.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      }
    ]
  },

  compass: {
    id: "compass",
    name: "Lafi Bedmountain’s Upgraded Compass",
    subtitle: "Treasure Compass",
    icon: "icons/compass-full.webp",
    combine: {
      image: "assets/combi-compass.png",
      text: "Arrange the required pieces in your inventory."
    },
    pieces: [
      {
        name: "Vodkhan Piece",
        icon: "icons/compass-vodkhan.webp",
        type: "simple",
        obtained: false,
        location: "Hystria Ruins<br>Dekhia Hystria <span class='tip-accent'>(recommended high GS)</span>",
        mobs: "Vodkhan, Afuaru, Vahmalkea Desert Chest, Vahmalkea Hystrah Chest, Vahmalkea Aakmah Chest",
        tip: "Medium difficulty piece. Dekhia improves efficiency for stronger players."
      },
      {
        name: "Elten Piece",
        icon: "icons/compass-elten.webp",
        type: "simple",
        obtained: false,
        location: "Hystria Ruins<br>Dekhia Hystria <span class='tip-accent'>(recommended high GS)</span>",
        mobs: "Elten, Tukar Belten, Afuaru, Vahmalkea Desert Chest, Vahmalkea Hystrah Chest, Vahmalkea Aakmah Chest",
        tip: "Extremely rare and usually the main bottleneck. Dekhia is strongly recommended for high-GS players."
      },
      {
        name: "Aakman Piece",
        icon: "icons/compass-aakman-piece.webp",
        type: "simple",
        obtained: false,
        location: "Aakman Temple<br>Dekhia Aakman <span class='tip-accent'>(recommended high GS)</span>",
        mobs: "Aakman Elite Guardian, Afuaru",
        tip: "Usually the easiest of the three main compass pieces."
      },
      {
        name: "Blood Ruby",
        icon: "icons/blood-ruby.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      },
      {
        name: "Ocean Sapphire",
        icon: "icons/ocean-sapphire.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      },
      {
        name: "Gold Topaz",
        icon: "icons/gold-topaz.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Can be bought or crafted."
      }
    ]
  },

  telescope: {
    id: "telescope",
    name: "Lafi Bedmountain’s Upgraded Telescope",
    subtitle: "Treasure Telescope",
    icon: "icons/lafi-bedmountains-telescope.webp",
    combine: {
      image: "assets/combi-telescope.png",
      text: "Arrange the required pieces in your inventory."
    },
    pieces: [
      {
        name: "Telescope Piece 1",
        icon: "icons/telescope-piece-1.webp",
        type: "simple",
        obtained: false,
        location: "Tungrad Ruins",
        mobs: "Tungrad Executioner",
        tip: "First telescope piece. Ulukita grind spot with high gear requirements."
      },
      {
        name: "Telescope Piece 2",
        icon: "icons/telescope-piece-2.webp",
        type: "simple",
        obtained: false,
        location: "City of the Dead<br>Darkseeker’s Retreat",
        mobs: "Tehmelun Elite Soldier, Mournful Darkseeker",
        tip: "Second telescope piece. City of the Dead is the more approachable Ulukita route, while Darkseeker’s Retreat is the harder option."
      },
      {
        name: "Telescope Piece 3",
        icon: "icons/telescope-piece-3.webp",
        type: "simple",
        obtained: false,
        location: "Tungrad Ruins<br>City of the Dead<br>Darkseeker’s Retreat<br>Hystria Ruins <span class='tip-accent'>(3x Vodkhan piece exchange)</span>",
        mobs: "Tungrad Executioner, Tehmelun Elite Soldier, Mournful Darkseeker, or exchange 3x Vodkhan pieces",
        tip: "Third telescope piece. This is the shared crossover piece and can also be obtained by exchanging 3 Vodkhan compass pieces."
      },
      {
        name: "Star Diamond",
        icon: "icons/star-diamond.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Craft with processing or buy from the Central Market."
      },
      {
        name: "Gold Topaz",
        icon: "icons/gold-topaz.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Craft with processing or buy from the Central Market."
      }
    ]
  },

  ring: {
    id: "ring",
    name: "Rich Merchant’s Ring",
    subtitle: "Treasure Ring",
    icon: "icons/rich-merchant-ring.webp",
    combine: {
      image: "assets/combi-ring.png",
      text: "Arrange the required pieces in your inventory."
    },
    pieces: [
      {
        name: "Ring Piece One",
        icon: "icons/ring-piece-one.webp",
        type: "simple",
        obtained: false,
        location: "Padix Island",
        mobs: "Padix Pirate",
        tip: "One of the core Rich Merchant’s Ring pieces."
      },
      {
        name: "Ring Piece Two",
        icon: "icons/ring-piece-two.webp",
        type: "simple",
        obtained: false,
        location: "Sycraia Underwater Ruins",
        mobs: "Sycraia monsters",
        tip: "Sycraia ring piece. Keep it separate from your normal treasure grinds."
      },
      {
        name: "Ring Piece Three",
        icon: "icons/ring-piece-three.webp",
        type: "simple",
        obtained: false,
        location: "Ash Forest",
        mobs: "Ash Forest monsters",
        tip: "One of the more painful endgame ring spots."
      },
      {
        name: "Ring Piece Four",
        icon: "icons/ring-piece-four.webp",
        type: "simple",
        obtained: false,
        location: "Crypt of Resting Thoughts",
        mobs: "Crypt monsters",
        tip: "Endgame piece from Crypt."
      },
      {
        name: "Ring Piece Five",
        icon: "icons/ring-piece-five.webp",
        type: "simple",
        obtained: false,
        location: "Olun’s Valley<br>Dekhia Olun’s Valley <span class='tip-accent'>(high GS alternative)</span>",
        mobs: "Olun monsters",
        tip: "Party/endgame ring piece. Dekhia is the premium route for stronger players."
      },
      {
        name: "Blue Coral",
        icon: "icons/blue-coral.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Support material for the final combination."
      },
      {
        name: "Red Coral",
        icon: "icons/red-coral.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Support material for the final combination."
      },
      {
        name: "Rough Ruby",
        icon: "icons/rough-ruby.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Base ruby material."
      },
      {
        name: "Ruby",
        icon: "icons/ruby.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Processed from Rough Ruby or bought directly."
      },
      {
        name: "Resplendent Ruby",
        icon: "icons/resplendent-ruby.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Processed support material for the ring."
      },
      {
        name: "Rough Sapphire",
        icon: "icons/rough-sapphire.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Base sapphire material."
      },
      {
        name: "Sapphire",
        icon: "icons/sapphire.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Processed from Rough Sapphire or bought directly."
      },
      {
        name: "Resplendent Sapphire",
        icon: "icons/resplendent-sapphire.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Processed support material for the ring."
      },
      {
        name: "Resplendent Topaz",
        icon: "icons/resplendent-topaz.webp",
        type: "simple",
        obtained: false,
        location: "Craft / Market",
        mobs: "-",
        tip: "Final support material for the ring combination."
      }
    ]
  },

  krogdalo: {
    id: "krogdalo",
    name: "Krogdalo’s Sanctuary",
    subtitle: "Mythical Horse Treasure",
    icon: "icons/krogdalo-icon.webp",
    pieces: [
      {
        name: "Mythical Arduanatt",
        icon: "icons/horse-arduanatt.webp",
        type: "simple",
        obtained: false,
        location: "Mythical Awakening",
        mobs: "-",
        tip: "Obtain Mythical Arduanatt (T10 Pegasus)."
      },
      {
        name: "Mythical Diné",
        icon: "icons/horse-dine.webp",
        type: "simple",
        obtained: false,
        location: "Mythical Awakening",
        mobs: "-",
        tip: "Obtain Mythical Diné (T10 Unicorn)."
      },
      {
        name: "Mythical Doom",
        icon: "icons/horse-doom.webp",
        type: "simple",
        obtained: false,
        location: "Mythical Awakening",
        mobs: "-",
        tip: "Obtain Mythical Doom (T10 Hell Horse)."
      }
    ]
  }
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getStorageKey(treasureId) {
  return `${STORAGE_PREFIX}${treasureId}_v11`;
}

function getTreasureIds() {
  return Object.keys(treasureRegistry);
}

function getDefaultTreasureData(treasureId) {
  return deepClone(treasureRegistry[treasureId]);
}

function normalizeLoadedData(treasureId, parsed) {
  const fallback = getDefaultTreasureData(treasureId);

  if (!parsed || typeof parsed !== "object") {
    return fallback;
  }

  parsed.id = fallback.id;
  parsed.name = typeof parsed.name === "string" ? parsed.name : fallback.name;
  parsed.subtitle = typeof parsed.subtitle === "string" ? parsed.subtitle : fallback.subtitle;
  parsed.icon = parsed.icon || fallback.icon;
  parsed.combine = parsed.combine || fallback.combine;

  if (!Array.isArray(parsed.pieces)) {
    return fallback;
  }

  parsed.pieces = fallback.pieces.map((fallbackPiece, index) => {
    const savedPiece = parsed.pieces[index];
    if (!savedPiece || typeof savedPiece !== "object") {
      return deepClone(fallbackPiece);
    }

    const merged = {
      ...deepClone(fallbackPiece),
      ...savedPiece
    };

    if (fallbackPiece.fullDrop) {
      merged.fullDrop = {
        ...deepClone(fallbackPiece.fullDrop),
        ...(savedPiece.fullDrop || {})
      };
    }

    if (fallbackPiece.pity) {
      merged.pity = {
        ...deepClone(fallbackPiece.pity),
        ...(savedPiece.pity || {})
      };
    }

    if (fallbackPiece.exchange) {
      merged.exchange = {
        ...deepClone(fallbackPiece.exchange),
        ...(savedPiece.exchange || {})
      };
    }

    if (fallbackPiece.material) {
      merged.material = {
        ...deepClone(fallbackPiece.material),
        ...(savedPiece.material || {})
      };
    }

    return merged;
  });

  return parsed;
}

function loadTreasureData(treasureId) {
  try {
    const raw = localStorage.getItem(getStorageKey(treasureId));
    if (!raw) return getDefaultTreasureData(treasureId);

    const parsed = JSON.parse(raw);
    return normalizeLoadedData(treasureId, parsed);
  } catch (error) {
    console.error(`Failed to load saved progress for ${treasureId}:`, error);
    return getDefaultTreasureData(treasureId);
  }
}

function saveTreasureData(treasureId, treasureData) {
  localStorage.setItem(getStorageKey(treasureId), JSON.stringify(treasureData));
}

function loadPanelState() {
  try {
    const saved = JSON.parse(localStorage.getItem(PANEL_STATE_KEY));
    if (saved && typeof saved === "object") return saved;
  } catch (error) {
    console.error("Failed to load panel state:", error);
  }

  return {
    ornette: false,
    odore: false,
    map: false,
    compass: false,
    telescope: false,
    ring: false,
    krogdalo: false
  };
}

function savePanelState(state) {
  localStorage.setItem(PANEL_STATE_KEY, JSON.stringify(state));
}

function loadAtanisState() {
  try {
    const saved = JSON.parse(localStorage.getItem(ATANIS_STATE_KEY));
    if (saved && typeof saved === "object") {
      return {
        total: clamp(Number(saved.total) || 0, 0, 999999)
      };
    }
  } catch (error) {
    console.error("Failed to load Atanis state:", error);
  }

  return { total: 0 };
}

function saveAtanisState(state) {
  localStorage.setItem(ATANIS_STATE_KEY, JSON.stringify(state));
}

const treasureGrid = document.getElementById("treasureGrid");
const treasureState = {};
const panelState = loadPanelState();
const atanisState = loadAtanisState();

getTreasureIds().forEach((treasureId) => {
  treasureState[treasureId] = loadTreasureData(treasureId);

  if (typeof panelState[treasureId] !== "boolean") {
    panelState[treasureId] = false;
  }
});

function isGrindPieceComplete(piece) {
  return !!piece.fullDrop?.obtained || Number(piece.pity?.current || 0) >= Number(piece.pity?.max || 0);
}

function isCraftedPieceComplete(piece) {
  return !!piece.obtained || Number(piece.material?.current || 0) >= Number(piece.material?.required || 0);
}

function isSimplePieceComplete(piece) {
  return !!piece.obtained;
}

function isPieceComplete(piece) {
  if (piece.type === "grind") return isGrindPieceComplete(piece);
  if (piece.type === "crafted") return isCraftedPieceComplete(piece);
  if (piece.type === "simple") return isSimplePieceComplete(piece);
  return false;
}

function getPieceProgress(piece) {
  if (piece.type === "grind") {
    if (piece.fullDrop?.obtained) return 1;
    const current = clamp(Number(piece.pity?.current) || 0, 0, Number(piece.pity?.max) || 0);
    const max = Number(piece.pity?.max) || 0;
    return max <= 0 ? 0 : current / max;
  }

  if (piece.type === "crafted") {
    if (piece.obtained) return 1;
    const current = clamp(Number(piece.material?.current) || 0, 0, Number(piece.material?.required) || 0);
    const required = Number(piece.material?.required) || 0;
    return required <= 0 ? 0 : current / required;
  }

  if (piece.type === "simple") {
    return piece.obtained ? 1 : 0;
  }

  return 0;
}

function isSimpleTreasure(treasureData) {
  return treasureData.pieces.every((piece) => piece.type === "simple");
}

function isPotionTreasureId(treasureId) {
  return treasureId === "ornette" || treasureId === "odore";
}

function getTreasureTypeLabel(treasureData) {
  const types = new Set(treasureData.pieces.map((piece) => piece.type));

  if (types.size === 1 && types.has("simple")) return "Drop Collection";
  if (types.size === 1 && types.has("grind")) return "Grind Progress";
  if (types.size === 1 && types.has("crafted")) return "Crafted Progress";
  if (types.has("grind") && types.has("crafted")) return "Grind + Crafted";
  if (types.has("grind") && types.has("simple")) return "Grind + Drops";
  if (types.has("crafted") && types.has("simple")) return "Craft + Drops";
  return "Treasure Assembly";
}

function calculateOverallProgress(treasureData) {
  const total = treasureData.pieces.length;
  const completed = treasureData.pieces.filter(isPieceComplete).length;
  const progressSum = treasureData.pieces.reduce((sum, piece) => sum + getPieceProgress(piece), 0);
  const percent = total === 0 ? 0 : Math.round((progressSum / total) * 100);

  return { total, completed, percent };
}

function createTooltip(piece) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";

  tooltip.innerHTML = `
    <div class="tip-title">${piece.name}</div>
    <div class="tip-row"><span class="tip-accent">📍</span> <strong>Location:</strong> ${piece.location || "Unknown"}</div>
    <div class="tip-row"><span class="tip-accent">👾</span> <strong>Mobs:</strong> ${piece.mobs || "Unknown"}</div>
    <div class="tip-row"><span class="tip-accent">💡</span> <strong>Tip:</strong> ${piece.tip || "No tip yet"}</div>
    ${piece.atanisNote ? `<div class="tip-row"><span class="tip-accent">✨</span> <strong>Atanis:</strong> ${piece.atanisNote}</div>` : ""}
  `;

  return tooltip;
}

function clearTooltipClasses() {
  document.querySelectorAll(".piece.tooltip-open").forEach((piece) => {
    piece.classList.remove("tooltip-open");
  });

  document.querySelectorAll(".treasure-panel.tooltip-active").forEach((panel) => {
    panel.classList.remove("tooltip-active");
  });

  document.querySelectorAll(".help.is-active").forEach((help) => {
    help.classList.remove("is-active");
  });

  document.querySelectorAll(".tooltip").forEach((tooltip) => {
    tooltip.classList.remove("flip-up", "shift-left", "shift-center");
  });
}

function closeAllTooltips() {
  document.querySelectorAll(".tooltip").forEach((tooltip) => {
    tooltip.style.display = "none";
  });
  clearTooltipClasses();
}

function closeAllCombineTooltips() {
  document.querySelectorAll(".combine-help-wrap.open").forEach((wrap) => {
    wrap.classList.remove("open");
    const button = wrap.querySelector(".combine-help-btn");
    if (button) {
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function createPieceBadge(text, extraClass = "") {
  const badge = document.createElement("span");
  badge.className = `piece-badge ${extraClass}`.trim();
  badge.textContent = text;
  return badge;
}

function createPanelPill(text, className = "") {
  const pill = document.createElement("span");
  pill.className = `panel-pill ${className}`.trim();
  pill.textContent = text;
  return pill;
}

function createChevron() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.classList.add("panel-chevron");

  const polyline = document.createElementNS(svgNS, "polyline");
  polyline.setAttribute("points", "6 9 12 15 18 9");
  svg.appendChild(polyline);

  return svg;
}

function createIcon(src, alt, className = "icon") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  img.className = className;
  img.loading = "lazy";
  return img;
}

function createInlineIconLabel(iconPath, labelHTML) {
  const wrapper = document.createElement("span");
  wrapper.className = "inline-icon-label";

  if (iconPath) {
    wrapper.appendChild(createIcon(iconPath, "", "icon small"));
  }

  const text = document.createElement("span");
  text.innerHTML = labelHTML;
  wrapper.appendChild(text);

  return wrapper;
}

function positionTooltip(help, tooltip) {
  tooltip.classList.remove("flip-up", "shift-left", "shift-center");

  if (window.innerWidth <= 760) {
    return;
  }

  tooltip.style.display = "block";

  const viewportPadding = 16;
  const rect = tooltip.getBoundingClientRect();

  const bottomOverflow = rect.bottom > window.innerHeight - viewportPadding;
  const hasTopSpace = rect.top >= rect.height + viewportPadding;

  if (bottomOverflow && hasTopSpace) {
    tooltip.classList.add("flip-up");
  }

  tooltip.classList.remove("shift-left", "shift-center");
  const updatedRect = tooltip.getBoundingClientRect();

  if (updatedRect.right > window.innerWidth - viewportPadding) {
    tooltip.classList.add("shift-left");
  }

  const leftRect = tooltip.getBoundingClientRect();
  if (leftRect.left < viewportPadding) {
    tooltip.classList.remove("shift-left");
    tooltip.classList.add("shift-center");
  }

  tooltip.style.display = "none";
}

function markTooltipOpen(help, tooltip) {
  const piece = help.closest(".piece");
  const panel = help.closest(".treasure-panel");

  if (piece) {
    piece.classList.add("tooltip-open");
  }

  if (panel) {
    panel.classList.add("tooltip-active");
  }

  help.classList.add("is-active");
}

function showTooltip(help, tooltip) {
  closeAllTooltips();
  positionTooltip(help, tooltip);
  markTooltipOpen(help, tooltip);
  tooltip.style.display = "block";
}

function hideTooltip(tooltip) {
  tooltip.style.display = "none";
  clearTooltipClasses();
}

function attachTooltipHandlers(help, tooltip) {
  help.addEventListener("mouseenter", () => {
    if (window.innerWidth <= 760) return;
    showTooltip(help, tooltip);
  });

  help.addEventListener("mouseleave", () => {
    if (window.innerWidth <= 760) return;
    const piece = help.closest(".piece");
    if (piece && piece.matches(":hover")) return;
    hideTooltip(tooltip);
  });

  const piece = help.closest(".piece");
  if (piece) {
    piece.addEventListener("mouseleave", () => {
      if (window.innerWidth <= 760) return;
      if (tooltip.matches(":hover")) return;
      hideTooltip(tooltip);
    });
  }

  tooltip.addEventListener("mouseleave", () => {
    if (window.innerWidth <= 760) return;
    hideTooltip(tooltip);
  });

  help.addEventListener("click", (event) => {
    event.stopPropagation();
    const isVisible = tooltip.style.display === "block";

    if (isVisible) {
      hideTooltip(tooltip);
      return;
    }

    showTooltip(help, tooltip);
  });
}

function createCombineButton(treasureData) {
  const wrap = document.createElement("div");
  wrap.className = "combine-help-wrap";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "combine-help-btn";
  button.setAttribute("aria-label", `Show assembly info for ${treasureData.name}`);
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = `<span class="combine-help-icon">⚒</span>`;

  const tooltip = document.createElement("div");
  tooltip.className = "combine-tooltip";

  const combineImage = treasureData.combine?.image || "";
  const combineText = treasureData.combine?.text || "Arrange the required pieces in your inventory.";

  tooltip.innerHTML = `
    <div class="combine-tooltip-inner">
      ${combineImage ? `<img src="${combineImage}" alt="${treasureData.name} combine layout" class="combine-tooltip-image" loading="lazy">` : ""}
      <p class="combine-tooltip-text">${combineText}</p>
    </div>
  `;

  function openTooltip() {
    closeAllCombineTooltips();
    wrap.classList.add("open");
    button.setAttribute("aria-expanded", "true");
  }

  function closeTooltip() {
    wrap.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("mouseenter", () => {
    if (window.innerWidth <= 760) return;
    openTooltip();
  });

  wrap.addEventListener("mouseleave", () => {
    if (window.innerWidth <= 760) return;
    closeTooltip();
  });

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = wrap.classList.contains("open");

    if (isOpen) {
      closeTooltip();
    } else {
      openTooltip();
    }
  });

  wrap.appendChild(button);
  wrap.appendChild(tooltip);

  return wrap;
}

function getAtanisEligiblePieces() {
  const eligible = [];

  ["ornette", "odore"].forEach((treasureId) => {
    const treasureData = treasureState[treasureId];
    if (!treasureData) return;

    treasureData.pieces.forEach((piece, index) => {
      if (piece.type !== "grind" || !piece.atanisNote || !piece.pity) return;

      const complete = isGrindPieceComplete(piece);
      const remaining = Math.max(0, piece.pity.max - piece.pity.current);

      eligible.push({
        treasureId,
        index,
        token: `${treasureId}:${index}`,
        piece,
        remaining,
        complete
      });
    });
  });

  return eligible;
}

function getAtanisDistribution() {
  const total = clamp(Number(atanisState.total) || 0, 0, 999999);
  let remainingPool = total;

  const targets = getAtanisEligiblePieces()
    .filter((entry) => !entry.complete && entry.remaining > 0)
    .sort((a, b) => a.remaining - b.remaining);

  const allocations = [];
  const allocationMap = new Map();

  targets.forEach((entry) => {
    if (remainingPool <= 0) return;

    const used = Math.min(entry.remaining, remainingPool);
    const allocation = {
      ...entry,
      used,
      completesPiece: used >= entry.remaining
    };

    allocations.push(allocation);
    allocationMap.set(entry.token, allocation);
    remainingPool -= used;
  });

  return { total, remainingPool, allocations, allocationMap };
}

function createAtanisSummaryMarkup(distribution) {
  if (!distribution.total) {
    return `
      <p class="atanis-summary-empty">
        Add your total Atanis here to get a suggested pity distribution across both potion sections.
      </p>
    `;
  }

  if (!distribution.allocations.length) {
    return `
      <p class="atanis-summary-line">Current pool: <strong>${distribution.total}</strong> Atanis' Element</p>
      <p class="atanis-summary-empty">No active HP/MP pity targets need Atanis support right now.</p>
    `;
  }

  return `
    <p class="atanis-summary-line">Current pool: <strong>${distribution.total}</strong> Atanis' Element</p>
    <ul class="atanis-allocation-list">
      ${distribution.allocations.map((entry) => `
        <li class="atanis-allocation-item">
          <div class="atanis-allocation-main">
            <img src="icons/atanis-element.webp" alt="Atanis' Element" class="icon small">
            <span>
              <strong>${entry.piece.pity.item}</strong>
              <span class="atanis-allocation-meta"> — ${entry.used}/${entry.remaining} suggested</span>
            </span>
          </div>
          <span class="atanis-allocation-tag ${entry.completesPiece ? "complete" : "partial"}">
            ${entry.completesPiece ? "Complete" : `Partial +${entry.used}`}
          </span>
        </li>
      `).join("")}
    </ul>
    <div class="atanis-summary-footer">
      <span>Priority: smallest remaining pity gaps first.</span>
      <span>Unused Atanis left: <strong>${distribution.remainingPool}</strong></span>
    </div>
  `;
}

function createAtanisHelper() {
  const helper = document.createElement("section");
  helper.className = "atanis-helper";

  const distribution = getAtanisDistribution();

  helper.innerHTML = `
    <div class="atanis-helper-head">
      <div class="atanis-helper-copy">
        <div class="atanis-helper-title-row">
          <img src="icons/atanis-element.webp" alt="Atanis' Element" class="icon large atanis-helper-icon">
          <div>
            <h3 class="atanis-helper-title">Shared Atanis' Element Helper</h3>
            <p class="atanis-helper-note">
              Enter your total Atanis Elements. The tracker suggests the best distribution across HP & MP potion pity pieces without auto-applying anything.
            </p>
          </div>
        </div>
      </div>

      <label class="atanis-input-group">
        <span class="atanis-input-label">Atanis Elements</span>
        <input type="number" min="0" step="1" value="${distribution.total}" class="atanis-total-input" data-atanis-input>
      </label>
    </div>

    <div class="atanis-helper-summary">
      ${createAtanisSummaryMarkup(distribution)}
    </div>
  `;

  const input = helper.querySelector("[data-atanis-input]");
  input.addEventListener("input", () => {
    const safeValue = clamp(Number(input.value) || 0, 0, 999999);
    atanisState.total = safeValue;
    input.value = safeValue;
    saveAtanisState(atanisState);
    refreshAtanisUI();
  });

  return helper;
}

function createAtanisMirrorHelper() {
  const helper = document.createElement("section");
  helper.className = "atanis-mirror-helper";

  const distribution = getAtanisDistribution();

  helper.innerHTML = `
    <div class="atanis-mirror-head">
      <div class="atanis-mirror-copy">
        <div class="atanis-mirror-title-row">
          <img src="icons/atanis-element.webp" alt="Atanis' Element" class="icon large atanis-helper-icon">
          <div>
            <h3 class="atanis-mirror-title">Shared Atanis Input</h3>
            <p class="atanis-mirror-note">
              This is the same shared Atanis pool used by the HP potion helper.
            </p>
            <div class="atanis-shared-note">Shared with HP potion</div>
          </div>
        </div>
      </div>

      <label class="atanis-mirror-input-group">
        <span class="atanis-mirror-input-label">Atanis Elements</span>
        <input type="number" min="0" step="1" value="${distribution.total}" class="atanis-mirror-input" data-atanis-mirror-input>
      </label>
    </div>

    <div class="atanis-mirror-summary">
      ${createAtanisSummaryMarkup(distribution)}
    </div>
  `;

  const input = helper.querySelector("[data-atanis-mirror-input]");
  input.addEventListener("input", () => {
    const safeValue = clamp(Number(input.value) || 0, 0, 999999);
    atanisState.total = safeValue;
    input.value = safeValue;
    saveAtanisState(atanisState);
    refreshAtanisUI();
  });

  return helper;
}

function refreshAtanisUI() {
  const distribution = getAtanisDistribution();

  document.querySelectorAll(".atanis-helper").forEach((helper) => {
    const summary = helper.querySelector(".atanis-helper-summary");
    const input = helper.querySelector("[data-atanis-input]");

    if (summary) summary.innerHTML = createAtanisSummaryMarkup(distribution);
    if (input) input.value = distribution.total;
  });

  document.querySelectorAll(".atanis-mirror-helper").forEach((helper) => {
    const summary = helper.querySelector(".atanis-mirror-summary");
    const input = helper.querySelector("[data-atanis-mirror-input]");

    if (summary) summary.innerHTML = createAtanisSummaryMarkup(distribution);
    if (input) input.value = distribution.total;
  });

  document.querySelectorAll("[data-atanis-piece-token]").forEach((node) => {
    const token = node.getAttribute("data-atanis-piece-token");
    const allocation = distribution.allocationMap.get(token);

    if (!allocation) {
      node.innerHTML = `<strong>Atanis Support:</strong> Available through the shared potion helper.`;
      return;
    }

    node.innerHTML = allocation.completesPiece
      ? `<strong>Atanis Support:</strong> Suggested to complete this pity piece (${allocation.used}/${allocation.remaining}).`
      : `<strong>Atanis Support:</strong> Suggested +${allocation.used} here from your shared pool.`;
  });
}

function createSimplePiece(piece, treasureId, onUpdate) {
  const wrapper = document.createElement("div");
  wrapper.className = "piece";

  const isKrogdalo = treasureId === "krogdalo";

  const header = document.createElement("div");
  header.className = "piece-title";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.checked = !!piece.obtained;

  const titleText = document.createElement("span");
  titleText.className = "piece-name";
  titleText.textContent = piece.name;

  const badge = createPieceBadge("Simple", "simple");

  header.appendChild(checkbox);

  if (piece.icon) {
    header.appendChild(createIcon(piece.icon, piece.name, isKrogdalo ? "icon krogdalo-horse-icon" : "icon large"));
  }

  header.appendChild(titleText);
  header.appendChild(badge);
  wrapper.appendChild(header);

  if (!isKrogdalo) {
    const noteRow = document.createElement("div");
    noteRow.className = "sub simple-note";
    noteRow.innerHTML = `<strong>Status:</strong> Pure drop / milestone item. Check when obtained.`;
    wrapper.appendChild(noteRow);

    const tooltip = createTooltip(piece);
    wrapper.appendChild(tooltip);

    const helpRow = document.createElement("div");
    helpRow.className = "sub";

    const help = document.createElement("span");
    help.className = "help";
    help.textContent = "i";

    helpRow.appendChild(help);
    helpRow.appendChild(document.createTextNode("Item details"));
    wrapper.appendChild(helpRow);

    attachTooltipHandlers(help, tooltip);
  }

  function updateState() {
    wrapper.classList.toggle("completed-piece", !!piece.obtained);
  }

  checkbox.addEventListener("change", () => {
    piece.obtained = checkbox.checked;
    updateState();
    saveTreasureData(treasureId, treasureState[treasureId]);
    onUpdate();
    refreshAtanisUI();
  });

  updateState();

  return wrapper;
}

function createGrindPiece(piece, treasureId, pieceIndex, onUpdate) {
  const wrapper = document.createElement("div");
  wrapper.className = "piece";

  const header = document.createElement("div");
  header.className = "piece-title";

  const mainCheckbox = document.createElement("input");
  mainCheckbox.type = "checkbox";
  mainCheckbox.className = "checkbox";
  mainCheckbox.disabled = true;

  const titleText = document.createElement("span");
  titleText.className = "piece-name";
  titleText.textContent = piece.name;

  header.appendChild(mainCheckbox);

  if (piece.icon) {
    header.appendChild(createIcon(piece.icon, piece.name, "icon large"));
  }

  header.appendChild(titleText);
  wrapper.appendChild(header);

  const fullDropRow = document.createElement("div");
  fullDropRow.className = "sub";

  const fullDropCheckbox = document.createElement("input");
  fullDropCheckbox.type = "checkbox";
  fullDropCheckbox.className = "checkbox";
  fullDropCheckbox.checked = !!piece.fullDrop.obtained;

  fullDropRow.appendChild(fullDropCheckbox);
  fullDropRow.appendChild(
    createInlineIconLabel(
      piece.fullDrop.icon,
      `<strong>Full Drop:</strong> ${piece.fullDrop.item}`
    )
  );
  wrapper.appendChild(fullDropRow);

  const pityRow = document.createElement("div");
  pityRow.className = "sub pity-row";

  const pityLabel = createInlineIconLabel(
    piece.pity.icon,
    `<strong>${piece.pity.item}</strong>`
  );

  const pityInput = document.createElement("input");
  pityInput.type = "number";
  pityInput.min = "0";
  pityInput.max = String(piece.pity.max);
  pityInput.value = piece.pity.current;
  pityInput.className = "pity-input";

  const pityMax = document.createElement("span");
  pityMax.textContent = `/ ${piece.pity.max}`;

  const help = document.createElement("span");
  help.className = "help";
  help.textContent = "i";

  pityRow.appendChild(pityLabel);
  pityRow.appendChild(pityInput);
  pityRow.appendChild(pityMax);
  pityRow.appendChild(help);
  wrapper.appendChild(pityRow);

  const bar = document.createElement("div");
  bar.className = "bar";

  const fill = document.createElement("div");
  fill.className = "fill";
  bar.appendChild(fill);
  wrapper.appendChild(bar);

  const exchangeRow = document.createElement("div");
  exchangeRow.className = "sub exchange-row";
  exchangeRow.appendChild(
    createInlineIconLabel(
      piece.exchange.icon,
      `<strong>Exchange Item:</strong> ${piece.exchange.item}`
    )
  );
  wrapper.appendChild(exchangeRow);

  if (piece.atanisNote && isPotionTreasureId(treasureId)) {
    const atanisRow = document.createElement("div");
    atanisRow.className = "sub atanis-support-row";

    const atanisLabel = document.createElement("span");
    atanisLabel.setAttribute("data-atanis-piece-token", `${treasureId}:${pieceIndex}`);
    atanisLabel.innerHTML = `<strong>Atanis Support:</strong> Available through the shared potion helper.`;

    atanisRow.appendChild(createIcon("icons/atanis-element.webp", "Atanis' Element", "icon small"));
    atanisRow.appendChild(atanisLabel);
    wrapper.appendChild(atanisRow);
  }

  const tooltip = createTooltip(piece);
  wrapper.appendChild(tooltip);

  function updatePieceState() {
    if (piece.pity.current >= piece.pity.max) {
      piece.pity.current = piece.pity.max;
      pityInput.value = piece.pity.max;
    }

    const completed = isGrindPieceComplete(piece);
    mainCheckbox.checked = completed;
    fullDropCheckbox.checked = !!piece.fullDrop.obtained;
    wrapper.classList.toggle("completed-piece", completed);
    fill.style.width = `${Math.round(getPieceProgress(piece) * 100)}%`;
  }

  function persistAndRefresh() {
    saveTreasureData(treasureId, treasureState[treasureId]);
    onUpdate();
    refreshAtanisUI();
  }

  fullDropCheckbox.addEventListener("change", () => {
    piece.fullDrop.obtained = fullDropCheckbox.checked;
    updatePieceState();
    persistAndRefresh();
  });

  pityInput.addEventListener("input", () => {
    const raw = Number(pityInput.value);
    const safeValue = clamp(Number.isNaN(raw) ? 0 : raw, 0, piece.pity.max);

    piece.pity.current = safeValue;
    pityInput.value = safeValue;

    updatePieceState();
    persistAndRefresh();
  });

  attachTooltipHandlers(help, tooltip);
  updatePieceState();

  return wrapper;
}

function createCraftedPiece(piece, treasureId, onUpdate) {
  const wrapper = document.createElement("div");
  wrapper.className = "piece";

  const header = document.createElement("div");
  header.className = "piece-title";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.checked = !!piece.obtained;

  const titleText = document.createElement("span");
  titleText.className = "piece-name";
  titleText.textContent = piece.name;

  const badge = createPieceBadge("Crafted", "crafted");

  header.appendChild(checkbox);

  if (piece.icon) {
    header.appendChild(createIcon(piece.icon, piece.name, "icon large"));
  }

  header.appendChild(titleText);
  header.appendChild(badge);
  wrapper.appendChild(header);

  const materialRow = document.createElement("div");
  materialRow.className = "sub material-row";
  materialRow.appendChild(
    createInlineIconLabel(
      piece.material.icon,
      `<strong>Material:</strong> ${piece.material.item}`
    )
  );
  wrapper.appendChild(materialRow);

  const materialProgressRow = document.createElement("div");
  materialProgressRow.className = "sub material-progress-row";

  const materialLabel = document.createElement("span");
  materialLabel.innerHTML = `<strong>Progress</strong>`;

  const materialInput = document.createElement("input");
  materialInput.type = "number";
  materialInput.min = "0";
  materialInput.max = String(piece.material.required);
  materialInput.value = piece.material.current;
  materialInput.className = "material-input";

  const materialRequired = document.createElement("span");
  materialRequired.textContent = `/ ${piece.material.required}`;

  const help = document.createElement("span");
  help.className = "help";
  help.textContent = "i";

  materialProgressRow.appendChild(materialLabel);
  materialProgressRow.appendChild(materialInput);
  materialProgressRow.appendChild(materialRequired);
  materialProgressRow.appendChild(help);
  wrapper.appendChild(materialProgressRow);

  const bar = document.createElement("div");
  bar.className = "bar";

  const fill = document.createElement("div");
  fill.className = "fill";
  bar.appendChild(fill);
  wrapper.appendChild(bar);

  const noteRow = document.createElement("div");
  noteRow.className = "sub crafted-note";
  noteRow.innerHTML = `<strong>Status:</strong> Auto-completes at required material count, or can be checked manually.`;
  wrapper.appendChild(noteRow);

  const tooltip = createTooltip(piece);
  wrapper.appendChild(tooltip);

  function updatePieceState() {
    if (piece.material.current >= piece.material.required) {
      piece.material.current = piece.material.required;
      piece.obtained = true;
    }

    if (!piece.obtained && piece.material.current < piece.material.required) {
      checkbox.checked = false;
    } else {
      checkbox.checked = !!piece.obtained;
    }

    materialInput.value = piece.material.current;
    wrapper.classList.toggle("completed-piece", isCraftedPieceComplete(piece));
    fill.style.width = `${Math.round(getPieceProgress(piece) * 100)}%`;
  }

  function persistAndRefresh() {
    saveTreasureData(treasureId, treasureState[treasureId]);
    onUpdate();
    refreshAtanisUI();
  }

  checkbox.addEventListener("change", () => {
    piece.obtained = checkbox.checked;
    updatePieceState();
    persistAndRefresh();
  });

  materialInput.addEventListener("input", () => {
    const raw = Number(materialInput.value);
    const safeValue = clamp(Number.isNaN(raw) ? 0 : raw, 0, piece.material.required);

    piece.material.current = safeValue;

    if (piece.material.current >= piece.material.required) {
      piece.obtained = true;
    } else if (!checkbox.checked) {
      piece.obtained = false;
    }

    updatePieceState();
    persistAndRefresh();
  });

  attachTooltipHandlers(help, tooltip);
  updatePieceState();

  return wrapper;
}

function createMarketFlavorNode(treasureId) {
  const flavor = document.createElement("span");
  flavor.className = "market-flavor hidden";

  if (treasureId === "ornette" || treasureId === "odore") {
    flavor.textContent = "(or skip it for ~8.5B on the marketplace)";
  }

  return flavor;
}

function createTreasurePanel(treasureId) {
  const treasureData = treasureState[treasureId];
  const panel = document.createElement("section");
  panel.className = `treasure-panel treasure-${treasureId}`;

  if (isSimpleTreasure(treasureData)) {
    panel.classList.add("simple-layout");
  }

  if (!panelState[treasureId]) {
    panel.classList.add("collapsed");
  }

  const panelTop = document.createElement("div");
  panelTop.className = "panel-top";

  const left = document.createElement("div");
  left.className = "panel-top-left";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Treasure Progress";

  const titleRow = document.createElement("div");
  titleRow.className = "panel-title-row";

  const titleGroup = document.createElement("div");
  titleGroup.className = "panel-title-group";

  titleGroup.appendChild(createChevron());

  if (treasureData.icon) {
    titleGroup.appendChild(createIcon(treasureData.icon, treasureData.name, "icon panel-icon"));
  }

  const titleMain = document.createElement("div");
  titleMain.className = "panel-title-main";

  const titleLine = document.createElement("div");
  titleLine.className = "panel-title-line";

  const title = document.createElement("h2");
  title.textContent = treasureData.name;
  titleLine.appendChild(title);

  if (treasureData.combine?.image || treasureData.combine?.text) {
    titleLine.appendChild(createCombineButton(treasureData));
  }

  const metaRow = document.createElement("div");
  metaRow.className = "panel-meta-row";

  const typePill = createPanelPill(getTreasureTypeLabel(treasureData), "type");
  const countPill = createPanelPill(`${treasureData.pieces.length} pieces`, "count");

  metaRow.appendChild(typePill);
  metaRow.appendChild(countPill);

  titleMain.appendChild(titleLine);
  titleMain.appendChild(metaRow);

  titleGroup.appendChild(titleMain);
  titleRow.appendChild(titleGroup);

  const subtitle = document.createElement("p");
  subtitle.className = "panel-subtitle";
  subtitle.textContent = treasureData.subtitle;

  left.appendChild(eyebrow);
  left.appendChild(titleRow);
  left.appendChild(subtitle);

  const actions = document.createElement("div");
  actions.className = "panel-actions";

  const overallBox = document.createElement("div");
  overallBox.className = "overall-box";

  const overallLabel = document.createElement("span");
  overallLabel.className = "overall-label";
  overallLabel.textContent = "Overall";

  const overallValue = document.createElement("span");
  overallValue.className = "overall-value";

  const overallCount = document.createElement("span");
  overallCount.className = "overall-count";

  const marketFlavor = createMarketFlavorNode(treasureId);

  overallBox.appendChild(overallLabel);
  overallBox.appendChild(overallValue);
  overallBox.appendChild(overallCount);
  overallBox.appendChild(marketFlavor);

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "ghost-btn";
  resetButton.textContent = "Reset Progress";

  actions.appendChild(overallBox);
  actions.appendChild(resetButton);

  panelTop.appendChild(left);
  panelTop.appendChild(actions);
  panel.appendChild(panelTop);

  const overallBar = document.createElement("div");
  overallBar.className = "overall-bar";

  const overallFill = document.createElement("div");
  overallFill.className = "overall-fill";
  overallBar.appendChild(overallFill);
  panel.appendChild(overallBar);

  const tree = document.createElement("section");
  tree.className = "tree";
  panel.appendChild(tree);

  function updateOverallUI() {
    const { total, completed, percent } = calculateOverallProgress(treasureData);
    overallValue.textContent = `${percent}%`;
    overallCount.textContent = `${completed} / ${total} completed`;
    overallFill.style.width = `${percent}%`;

    if (isPotionTreasureId(treasureId) && completed < total) {
      marketFlavor.classList.remove("hidden");
    } else {
      marketFlavor.classList.add("hidden");
    }
  }

  function rerenderTree() {
    tree.innerHTML = "";

    if (treasureId === "ornette") {
      tree.appendChild(createAtanisHelper());
    }

    if (treasureId === "odore") {
      tree.appendChild(createAtanisMirrorHelper());
    }

    treasureData.pieces.forEach((piece, pieceIndex) => {
      if (piece.type === "grind") {
        tree.appendChild(createGrindPiece(piece, treasureId, pieceIndex, updateOverallUI));
      } else if (piece.type === "crafted") {
        tree.appendChild(createCraftedPiece(piece, treasureId, updateOverallUI));
      } else if (piece.type === "simple") {
        tree.appendChild(createSimplePiece(piece, treasureId, updateOverallUI));
      }
    });

    updateOverallUI();
  }

  panelTop.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    if (event.target.closest(".help")) return;
    if (event.target.closest(".combine-help-wrap")) return;
    if (event.target.closest("input")) return;

    const isCurrentlyCollapsed = panel.classList.contains("collapsed");

    document.querySelectorAll(".treasure-panel").forEach((p) => {
      p.classList.add("collapsed");
    });

    Object.keys(panelState).forEach((key) => {
      panelState[key] = false;
    });

    if (isCurrentlyCollapsed) {
      panel.classList.remove("collapsed");
      panelState[treasureId] = true;
    }

    savePanelState(panelState);
  });

  resetButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const confirmed = window.confirm(`Reset all saved progress for ${treasureData.name}?`);
    if (!confirmed) return;

    localStorage.removeItem(getStorageKey(treasureId));
    treasureState[treasureId] = getDefaultTreasureData(treasureId);

    const freshPanel = createTreasurePanel(treasureId);
    panel.replaceWith(freshPanel);
    refreshAtanisUI();
  });

  rerenderTree();

  return panel;
}

function renderAllTreasures() {
  treasureGrid.innerHTML = "";

  getTreasureIds().forEach((treasureId) => {
    treasureGrid.appendChild(createTreasurePanel(treasureId));
  });

  refreshAtanisUI();
}

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("help")) {
    closeAllTooltips();
  }

  if (!event.target.closest(".combine-help-wrap")) {
    closeAllCombineTooltips();
  }
});

window.addEventListener("resize", () => {
  closeAllTooltips();
  closeAllCombineTooltips();
});

renderAllTreasures();