const STORAGE_PREFIX = "bdoTreasureTracker_";
const PANEL_STATE_KEY = "bdoTreasureTracker_panelState_v6";
const ATANIS_STATE_KEY = "bdoTreasureTracker_atanis_v2";
const STORAGE_WARNING_ID = "storageWarning";
const COMBINE_DIALOG_ID = "combineDialog";
const SHARE_TOAST_ID = "shareToast";
const SHARE_CARD_STAGE_ID = "shareCardStage";
const SHARE_PREVIEW_DIALOG_ID = "sharePreviewDialog";
const SHARE_EXPORT_URL = "https://bdotreasurehub.com/";
const HTML2CANVAS_SCRIPT_ID = "html2canvasRuntime";
const HTML2CANVAS_SCRIPT_URL = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
const HTML2CANVAS_SCRIPT_INTEGRITY = "sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==";
const HTML2CANVAS_LOAD_TIMEOUT_MS = 12000;
const SHARE_ASSET_WAIT_TIMEOUT_MS = 4500;
const PROGRESS_PAYLOAD_VERSION = 12;
const LEGACY_PROGRESS_STORAGE_VERSIONS = [11];
const VISUAL_INTRO_SESSION_KEY = "bdoTreasureTracker_visualIntroSeen_v1";
const VISUAL_INTRO_LOCAL_KEY = "bdoTreasureTracker_visualIntroSeenAt_v1";
const VISUAL_INTRO_RECENT_MS = 1000 * 60 * 60 * 18;

const treasureRegistry = {
  ornette: {
    id: "ornette",
    name: "Ornette’s Spirit Essence",
    subtitle: "Infinite HP Potion",
    icon: "icons/ornettes-spirit-essence.webp",
    combine: {
      image: "assets/combi-hp.webp",
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
      image: "assets/combi-mp.webp",
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
      image: "assets/combi-map.webp",
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
      image: "assets/combi-compass.webp",
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
      image: "assets/combi-telescope.webp",
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
      image: "assets/combi-ring.webp",
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
  },

  nostos: {
    id: "nostos",
    name: "Star of Nostos",
    isNew: true,
    subtitle: "Gathering Life Skill Treasure",
    icon: "icons/star-of-nostos.png",
    combine: {
      image: "assets/combi-nostos.png",
      text: "Combine the six higher-tier materials in Yaz's Combinables Pouch. Disable Auto Arrange before combining."
    },
    pieces: [
      {
        name: "Terrashard",
        activity: "Hoe Gathering",
        icon: "icons/terrashard.png",
        type: "lifeskillCraft",
        obtained: false,
        lowerMaterial: {
          item: "Cracked Terrashard",
          icon: "icons/cracked-terrashard.png",
          current: 0,
          required: 1000
        },
        essence: {
          item: "Essence of Nature",
          icon: "icons/essence-of-nature.png",
          current: 0,
          required: 100
        },
        location: "Hoe Gathering",
        mobs: "Gathering activity",
        tip: "Gather Cracked Terrashard through Hoe Gathering, then use Simple Alchemy with Essence of Nature."
      },
      {
        name: "Eonwood Round",
        activity: "Lumbering",
        icon: "icons/eonwood-round.png",
        type: "lifeskillCraft",
        obtained: false,
        lowerMaterial: {
          item: "Withered Wood Chip",
          icon: "icons/withered-wood-chip.png",
          current: 0,
          required: 1000
        },
        essence: {
          item: "Essence of Nature",
          icon: "icons/essence-of-nature.png",
          current: 0,
          required: 100
        },
        location: "Lumbering",
        mobs: "Gathering activity",
        tip: "Gather Withered Wood Chip through Lumbering, then use Simple Alchemy with Essence of Nature."
      },
      {
        name: "Essence of Life",
        activity: "Fluid Collecting",
        icon: "icons/essence-of-life.png",
        type: "lifeskillCraft",
        obtained: false,
        lowerMaterial: {
          item: "Thin Essence of Life",
          icon: "icons/thin-essence-of-life.png",
          current: 0,
          required: 1000
        },
        essence: {
          item: "Essence of Nature",
          icon: "icons/essence-of-nature.png",
          current: 0,
          required: 100
        },
        location: "Fluid Collecting",
        mobs: "Gathering activity",
        tip: "Gather Thin Essence of Life through Fluid Collecting, then use Simple Alchemy with Essence of Nature."
      },
      {
        name: "Heartvein Crystal",
        activity: "Mining",
        icon: "icons/heartvein-crystal.png",
        type: "lifeskillCraft",
        obtained: false,
        lowerMaterial: {
          item: "Dim Heartvein Shard",
          icon: "icons/dim-heartvein-shard.png",
          current: 0,
          required: 1000
        },
        essence: {
          item: "Essence of Nature",
          icon: "icons/essence-of-nature.png",
          current: 0,
          required: 100
        },
        location: "Mining<br>Pilgrim's Haven <span class='tip-accent'>(best location)</span>",
        mobs: "Gathering activity",
        tip: "Gather Dim Heartvein Shard through Mining, then use Simple Alchemy with Essence of Nature."
      },
      {
        name: "Wildsoul",
        activity: "Butchering",
        icon: "icons/wildsoul.png",
        type: "lifeskillCraft",
        obtained: false,
        lowerMaterial: {
          item: "Faint Wildsoul",
          icon: "icons/faint-wildsoul.png",
          current: 0,
          required: 1000
        },
        essence: {
          item: "Essence of Nature",
          icon: "icons/essence-of-nature.png",
          current: 0,
          required: 100
        },
        location: "Butchering",
        mobs: "Gathering activity",
        tip: "Gather Faint Wildsoul through Butchering, then use Simple Alchemy with Essence of Nature."
      },
      {
        name: "Naturewoven Hide",
        activity: "Tanning",
        icon: "icons/naturewoven-hide.png",
        type: "lifeskillCraft",
        obtained: false,
        lowerMaterial: {
          item: "Faded Naturewoven Hide",
          icon: "icons/faded-naturewoven-hide.png",
          current: 0,
          required: 1000
        },
        essence: {
          item: "Essence of Nature",
          icon: "icons/essence-of-nature.png",
          current: 0,
          required: 100
        },
        location: "Tanning<br>Navarn Steppe <span class='tip-accent'>(best location)</span>",
        mobs: "Gathering activity",
        tip: "Gather Faded Naturewoven Hide through Tanning, then use Simple Alchemy with Essence of Nature."
      }
    ]
  }
};

const pieceIdMap = {
  ornette: [
    "sherekhan-panacea",
    "rons-tintinnabulum",
    "ash-halfmoon-kagtunak",
    "gayaks-courage-stone",
    "musical-spirits-sound-stone"
  ],
  odore: [
    "narcs-crimson-tear",
    "markthanans-gland",
    "valtarras-clairvoyance",
    "krogdalos-protection-stone",
    "night-crows-dawn-stone"
  ],
  map: [
    "map-sulfur-1",
    "map-pila-ku-2",
    "map-sulfur-3",
    "map-pila-ku-4",
    "map-blood-ruby",
    "map-ocean-sapphire",
    "map-gold-topaz",
    "map-forest-emerald"
  ],
  compass: [
    "compass-vodkhan",
    "compass-elten",
    "compass-aakman",
    "compass-blood-ruby",
    "compass-ocean-sapphire",
    "compass-gold-topaz"
  ],
  telescope: [
    "telescope-piece-1",
    "telescope-piece-2",
    "telescope-piece-3",
    "telescope-star-diamond",
    "telescope-gold-topaz"
  ],
  ring: [
    "ring-piece-one",
    "ring-piece-two",
    "ring-piece-three",
    "ring-piece-four",
    "ring-piece-five",
    "ring-blue-coral",
    "ring-red-coral",
    "ring-rough-ruby",
    "ring-ruby",
    "ring-resplendent-ruby",
    "ring-rough-sapphire",
    "ring-sapphire",
    "ring-resplendent-sapphire",
    "ring-resplendent-topaz"
  ],
  krogdalo: [
    "mythical-arduanatt",
    "mythical-dine",
    "mythical-doom"
  ],
  nostos: [
    "terrashard",
    "eonwood-round",
    "essence-of-life",
    "heartvein-crystal",
    "wildsoul",
    "naturewoven-hide"
  ]
};

Object.entries(treasureRegistry).forEach(([treasureId, treasureData]) => {
  treasureData.pieces.forEach((piece, index) => {
    piece.id = pieceIdMap[treasureId]?.[index] || `${treasureId}-piece-${index + 1}`;
  });
});

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function clamp(value, min, max) {
  const safeValue = Number.isFinite(value) ? value : min;
  return Math.max(min, Math.min(max, safeValue));
}

function toFiniteNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function toFiniteInteger(value, fallback = 0) {
  return Math.trunc(toFiniteNumber(value, fallback));
}

function normalizeCount(value, min = 0, max = Number.MAX_SAFE_INTEGER, fallback = 0) {
  return clamp(toFiniteInteger(value, fallback), min, max);
}

function bindIntegerCountInput(input, options) {
  const {
    getValue,
    setValue,
    min = 0,
    max = Number.MAX_SAFE_INTEGER,
    onCommit = () => {}
  } = options;

  input.step = "1";
  input.inputMode = "numeric";
  input.min = String(min);
  if (Number.isFinite(max)) {
    input.max = String(max);
  }

  const commit = (forceBlank = false) => {
    const rawValue = input.value.trim();
    if (!rawValue && !forceBlank) return false;

    const previousValue = normalizeCount(getValue(), min, max);
    const nextValue = normalizeCount(rawValue || 0, min, max);
    const displayChanged = input.value !== String(nextValue);
    const valueChanged = nextValue !== previousValue;

    setValue(nextValue);
    input.value = String(nextValue);

    if (valueChanged || displayChanged) {
      onCommit(nextValue);
      return true;
    }

    return false;
  };

  input.addEventListener("input", () => {
    commit(false);
  });

  const finalize = () => {
    commit(true);
  };

  input.addEventListener("change", finalize);
  input.addEventListener("blur", finalize);
}

function hasOwn(object, key) {
  return Object.prototype.hasOwnProperty.call(object || {}, key);
}

function getStorageKey(treasureId) {
  return `${STORAGE_PREFIX}${treasureId}_v${PROGRESS_PAYLOAD_VERSION}`;
}

function getLegacyStorageKeys(treasureId) {
  return LEGACY_PROGRESS_STORAGE_VERSIONS.map(
    (version) => `${STORAGE_PREFIX}${treasureId}_v${version}`
  );
}

function getTreasureIds() {
  const preferredOrder = [
    "nostos",
    "ornette",
    "odore",
    "map",
    "compass",
    "telescope",
    "ring",
    "krogdalo"
  ];

  const knownIds = new Set(Object.keys(treasureRegistry));
  const ordered = preferredOrder.filter((treasureId) => knownIds.has(treasureId));
  const remaining = Object.keys(treasureRegistry).filter((treasureId) => !ordered.includes(treasureId));
  return [...ordered, ...remaining];
}

function getDefaultTreasureData(treasureId) {
  return deepClone(treasureRegistry[treasureId]);
}

function getDefaultPanelState() {
  return getTreasureIds().reduce((state, treasureId) => {
    state[treasureId] = false;
    return state;
  }, {});
}

function getSavedValue(savedPiece, flatKey, nestedKey, nestedField) {
  if (!savedPiece || typeof savedPiece !== "object") return undefined;
  if (hasOwn(savedPiece, flatKey)) return savedPiece[flatKey];

  const nested = savedPiece[nestedKey];
  if (nested && typeof nested === "object" && hasOwn(nested, nestedField)) {
    return nested[nestedField];
  }

  return undefined;
}

function applyPieceProgress(piece, savedPiece) {
  if (!savedPiece || typeof savedPiece !== "object") return;

  if (piece.type === "simple") {
    const obtained = getSavedValue(savedPiece, "obtained");
    if (obtained !== undefined) {
      piece.obtained = obtained === true;
    }
    return;
  }

  if (piece.type === "grind") {
    const fullDropObtained = getSavedValue(savedPiece, "fullDropObtained", "fullDrop", "obtained");
    if (piece.fullDrop && fullDropObtained !== undefined) {
      piece.fullDrop.obtained = fullDropObtained === true;
    }

    const pityCurrent = getSavedValue(savedPiece, "pityCurrent", "pity", "current");
    if (piece.pity && pityCurrent !== undefined) {
      piece.pity.current = normalizeCount(pityCurrent, 0, toFiniteInteger(piece.pity.max));
    }
    return;
  }

  if (piece.type === "crafted") {
    const obtained = getSavedValue(savedPiece, "obtained");
    if (obtained !== undefined) {
      piece.obtained = obtained === true;
    }

    const materialCurrent = getSavedValue(savedPiece, "materialCurrent", "material", "current");
    if (piece.material && materialCurrent !== undefined) {
      piece.material.current = clamp(
        toFiniteInteger(materialCurrent),
        0,
        toFiniteInteger(piece.material.required)
      );
    }
    return;
  }

  if (piece.type === "lifeskillCraft") {
    const obtained = getSavedValue(savedPiece, "obtained");
    if (obtained !== undefined) {
      piece.obtained = obtained === true;
    }

    const lowerMaterialCurrent = getSavedValue(savedPiece, "lowerMaterialCurrent", "lowerMaterial", "current");
    if (piece.lowerMaterial && lowerMaterialCurrent !== undefined) {
      piece.lowerMaterial.current = clamp(
        toFiniteInteger(lowerMaterialCurrent),
        0,
        toFiniteInteger(piece.lowerMaterial.required)
      );
    }

    const essenceCurrent = getSavedValue(savedPiece, "essenceCurrent", "essence", "current");
    if (piece.essence && essenceCurrent !== undefined) {
      piece.essence.current = clamp(
        toFiniteInteger(essenceCurrent),
        0,
        toFiniteInteger(piece.essence.required)
      );
    }
  }
}

function extractPieceProgress(piece) {
  const progress = {
    id: piece.id,
    type: piece.type
  };

  if (piece.type === "simple") {
    progress.obtained = !!piece.obtained;
  }

  if (piece.type === "grind") {
    progress.fullDropObtained = !!piece.fullDrop?.obtained;
    progress.pityCurrent = clamp(
      toFiniteInteger(piece.pity?.current),
      0,
      toFiniteInteger(piece.pity?.max)
    );
  }

  if (piece.type === "crafted") {
    progress.obtained = !!piece.obtained;
    progress.materialCurrent = clamp(
      toFiniteInteger(piece.material?.current),
      0,
      toFiniteInteger(piece.material?.required)
    );
  }

  if (piece.type === "lifeskillCraft") {
    progress.obtained = !!piece.obtained;
    progress.lowerMaterialCurrent = clamp(
      toFiniteInteger(piece.lowerMaterial?.current),
      0,
      toFiniteInteger(piece.lowerMaterial?.required)
    );
    progress.essenceCurrent = clamp(
      toFiniteInteger(piece.essence?.current),
      0,
      toFiniteInteger(piece.essence?.required)
    );
  }

  return progress;
}

function createProgressPayload(treasureData) {
  const pieces = treasureData.pieces.reduce((savedPieces, piece) => {
    savedPieces[piece.id] = extractPieceProgress(piece);
    return savedPieces;
  }, {});

  return {
    version: PROGRESS_PAYLOAD_VERSION,
    pieces
  };
}

function normalizeLoadedData(treasureId, parsed) {
  const fallback = getDefaultTreasureData(treasureId);

  if (!parsed || typeof parsed !== "object") {
    return fallback;
  }

  if (!parsed.pieces || typeof parsed.pieces !== "object") {
    return fallback;
  }

  const savedPiecesById = {};

  if (Array.isArray(parsed.pieces)) {
    fallback.pieces.forEach((piece, index) => {
      savedPiecesById[piece.id] = parsed.pieces[index];
    });
  } else {
    fallback.pieces.forEach((piece) => {
      savedPiecesById[piece.id] = parsed.pieces[piece.id];
    });
  }

  fallback.pieces.forEach((piece) => {
    applyPieceProgress(piece, savedPiecesById[piece.id]);
  });

  return fallback;
}

function showStorageWarning() {
  if (!document.body) return;

  let warning = document.getElementById(STORAGE_WARNING_ID);
  if (!warning) {
    warning = document.createElement("div");
    warning.id = STORAGE_WARNING_ID;
    warning.className = "storage-warning";
    warning.setAttribute("role", "status");
    warning.setAttribute("aria-live", "polite");
    document.body.appendChild(warning);
  }

  warning.hidden = false;
  warning.textContent = "Progress could not be saved in this browser session.";

  window.clearTimeout(showStorageWarning.hideTimer);
  showStorageWarning.hideTimer = window.setTimeout(() => {
    warning.hidden = true;
  }, 5200);
}

function showToast(message) {
  if (!document.body) return;

  let toast = document.getElementById(SHARE_TOAST_ID);
  if (!toast) {
    toast = document.createElement("div");
    toast.id = SHARE_TOAST_ID;
    toast.className = "share-toast";
    toast.hidden = true;
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.hidden = false;
  toast.classList.remove("is-visible");

  window.requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  window.clearTimeout(showToast.hideTimer);
  showToast.hideTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");

    window.clearTimeout(showToast.cleanupTimer);
    showToast.cleanupTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 220);
  }, 3200);
}

function saveJSONToStorage(key, value, label) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Failed to save ${label}:`, error);
    showStorageWarning();
    return false;
  }
}

function removeStorageItem(key, label) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Failed to reset ${label}:`, error);
    showStorageWarning();
    return false;
  }
}

function readStorageValue(storage, key) {
  try {
    return storage.getItem(key);
  } catch (error) {
    console.warn(`Storage read failed for ${key}:`, error);
    return null;
  }
}

function writeStorageValue(storage, key, value) {
  try {
    storage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Storage write failed for ${key}:`, error);
    return false;
  }
}

function loadTreasureData(treasureId) {
  try {
    const currentKey = getStorageKey(treasureId);
    const currentRaw = localStorage.getItem(currentKey);

    if (currentRaw) {
      try {
        const parsed = JSON.parse(currentRaw);
        if (parsed?.pieces && typeof parsed.pieces === "object") {
          const currentData = normalizeLoadedData(treasureId, parsed);

          getLegacyStorageKeys(treasureId).forEach((legacyKey) => {
            try {
              localStorage.removeItem(legacyKey);
            } catch (error) {
              console.warn(`Could not remove legacy progress key ${legacyKey}:`, error);
            }
          });

          return currentData;
        }
      } catch (error) {
        console.warn(`Current progress payload is invalid for ${treasureId}; checking legacy data.`, error);
      }
    }

    for (const legacyKey of getLegacyStorageKeys(treasureId)) {
      const legacyRaw = localStorage.getItem(legacyKey);
      if (!legacyRaw) continue;

      let legacyParsed = null;
      try {
        legacyParsed = JSON.parse(legacyRaw);
      } catch (error) {
        console.warn(`Legacy progress payload is invalid for ${treasureId}:`, error);
        continue;
      }
      if (!legacyParsed?.pieces || typeof legacyParsed.pieces !== "object") continue;

      const migratedData = normalizeLoadedData(treasureId, legacyParsed);
      const migrated = saveJSONToStorage(
        currentKey,
        createProgressPayload(migratedData),
        `${treasureId} progress migration`
      );

      if (migrated) {
        try {
          localStorage.removeItem(legacyKey);
        } catch (error) {
          console.warn(`Could not remove migrated progress key ${legacyKey}:`, error);
        }
      }

      return migratedData;
    }

    return getDefaultTreasureData(treasureId);
  } catch (error) {
    console.error(`Failed to load saved progress for ${treasureId}:`, error);
    return getDefaultTreasureData(treasureId);
  }
}

function saveTreasureData(treasureId, treasureData) {
  return saveJSONToStorage(
    getStorageKey(treasureId),
    createProgressPayload(treasureData),
    `${treasureId} progress`
  );
}

function removeTreasureProgressStorage(treasureId) {
  for (const legacyKey of getLegacyStorageKeys(treasureId)) {
    if (!removeStorageItem(legacyKey, `${treasureId} legacy progress`)) {
      return false;
    }
  }

  return removeStorageItem(getStorageKey(treasureId), `${treasureId} progress`);
}

function loadPanelState() {
  const defaults = getDefaultPanelState();

  try {
    const saved = JSON.parse(localStorage.getItem(PANEL_STATE_KEY));
    if (saved && typeof saved === "object") {
      Object.keys(defaults).forEach((treasureId) => {
        if (typeof saved[treasureId] === "boolean") {
          defaults[treasureId] = saved[treasureId];
        }
      });
    }
  } catch (error) {
    console.error("Failed to load panel state:", error);
  }

  return defaults;
}

function savePanelState(state) {
  saveJSONToStorage(PANEL_STATE_KEY, state, "panel state");
}

function loadAtanisState() {
  try {
    const saved = JSON.parse(localStorage.getItem(ATANIS_STATE_KEY));
    if (saved && typeof saved === "object") {
      return {
        total: normalizeCount(saved.total, 0, 999999)
      };
    }
  } catch (error) {
    console.error("Failed to load Atanis state:", error);
  }

  return { total: 0 };
}

function saveAtanisState(state) {
  saveJSONToStorage(
    ATANIS_STATE_KEY,
    { total: normalizeCount(state?.total, 0, 999999) },
    "Atanis state"
  );
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
  return !!piece.fullDrop?.obtained || toFiniteInteger(piece.pity?.current) >= toFiniteInteger(piece.pity?.max);
}

function isCraftedPieceComplete(piece) {
  return !!piece.obtained || toFiniteInteger(piece.material?.current) >= toFiniteInteger(piece.material?.required);
}

function isLifeSkillCraftPieceComplete(piece) {
  return !!piece.obtained || (
    toFiniteInteger(piece.lowerMaterial?.current) >= toFiniteInteger(piece.lowerMaterial?.required) &&
    toFiniteInteger(piece.essence?.current) >= toFiniteInteger(piece.essence?.required)
  );
}

function isSimplePieceComplete(piece) {
  return !!piece.obtained;
}

function isPieceComplete(piece) {
  if (piece.type === "grind") return isGrindPieceComplete(piece);
  if (piece.type === "crafted") return isCraftedPieceComplete(piece);
  if (piece.type === "lifeskillCraft") return isLifeSkillCraftPieceComplete(piece);
  if (piece.type === "simple") return isSimplePieceComplete(piece);
  return false;
}

function getPieceProgress(piece) {
  if (piece.type === "grind") {
    if (piece.fullDrop?.obtained) return 1;
    const current = clamp(toFiniteInteger(piece.pity?.current), 0, toFiniteInteger(piece.pity?.max));
    const max = toFiniteInteger(piece.pity?.max);
    return max <= 0 ? 0 : current / max;
  }

  if (piece.type === "crafted") {
    if (piece.obtained) return 1;
    const current = clamp(toFiniteInteger(piece.material?.current), 0, toFiniteInteger(piece.material?.required));
    const required = toFiniteInteger(piece.material?.required);
    return required <= 0 ? 0 : current / required;
  }

  if (piece.type === "lifeskillCraft") {
    if (piece.obtained) return 1;

    const lowerCurrent = clamp(
      toFiniteInteger(piece.lowerMaterial?.current),
      0,
      toFiniteInteger(piece.lowerMaterial?.required)
    );
    const lowerRequired = toFiniteInteger(piece.lowerMaterial?.required);
    const essenceCurrent = clamp(
      toFiniteInteger(piece.essence?.current),
      0,
      toFiniteInteger(piece.essence?.required)
    );
    const essenceRequired = toFiniteInteger(piece.essence?.required);

    const lowerProgress = lowerRequired <= 0 ? 0 : lowerCurrent / lowerRequired;
    const essenceProgress = essenceRequired <= 0 ? 0 : essenceCurrent / essenceRequired;
    return (lowerProgress + essenceProgress) / 2;
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

function getSimplePieceMethod(piece, treasureId = "") {
  const location = String(piece?.location || "").toLowerCase();

  if (treasureId === "krogdalo" || location.includes("mythical awakening")) {
    return {
      id: "milestone",
      badge: "Milestone",
      badgeClass: "simple",
      status: "Mythical horse milestone. Check when obtained."
    };
  }

  if (location.includes("craft") || location.includes("market") || location.includes("exchange")) {
    return {
      id: "material",
      badge: "Craft / Market",
      badgeClass: "crafted",
      status: "Supporting material from crafting or the Central Market. Check when ready."
    };
  }

  return {
    id: "drop",
    badge: "Drop",
    badgeClass: "simple",
    status: "Treasure drop. Check when obtained."
  };
}

function getTreasureTypeLabel(treasureData) {
  const types = new Set(treasureData.pieces.map((piece) => piece.type));

  if (types.has("lifeskillCraft")) return "Gathering + Crafted";
  if (types.size === 1 && types.has("simple")) {
    const methods = new Set(
      treasureData.pieces.map((piece) => getSimplePieceMethod(piece, treasureData.id).id)
    );

    if (methods.size === 1 && methods.has("milestone")) return "Mythical Milestones";
    if (methods.size === 1 && methods.has("material")) return "Material Collection";
    if (methods.size === 1 && methods.has("drop")) return "Drop Collection";
    if (methods.has("drop") && methods.has("material")) return "Drops + Materials";
    return "Treasure Collection";
  }
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

function appendSanitizedText(parent, value) {
  parent.appendChild(document.createTextNode(String(value ?? "").replace(/<[^>]*>/g, "")));
}

function appendFormattedText(parent, value) {
  const lines = String(value ?? "").split(/<br\s*\/?>/gi);
  const accentPattern = /<span\s+class=["']tip-accent["']>(.*?)<\/span>/gi;

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      parent.appendChild(document.createElement("br"));
    }

    let lastIndex = 0;
    let match = accentPattern.exec(line);

    while (match) {
      appendSanitizedText(parent, line.slice(lastIndex, match.index));

      const accent = document.createElement("span");
      accent.className = "tip-accent";
      appendSanitizedText(accent, match[1]);
      parent.appendChild(accent);

      lastIndex = match.index + match[0].length;
      match = accentPattern.exec(line);
    }

    appendSanitizedText(parent, line.slice(lastIndex));
    accentPattern.lastIndex = 0;
  });
}

function appendStrongLabel(parent, label) {
  const strong = document.createElement("strong");
  strong.textContent = label;
  parent.appendChild(strong);
}

function appendTextParts(parent, parts) {
  parts.forEach((part) => {
    if (typeof part === "string") {
      parent.appendChild(document.createTextNode(part));
      return;
    }

    if (part?.strong) {
      appendStrongLabel(parent, part.strong);
    }
  });
}

function createTipRow(icon, label, value) {
  const row = document.createElement("div");
  row.className = "tip-row";

  const accent = document.createElement("span");
  accent.className = "tip-accent";
  accent.setAttribute("aria-hidden", "true");
  accent.appendChild(createLucideIcon(icon, "tip-row-icon"));

  row.appendChild(accent);
  row.appendChild(document.createTextNode(" "));
  appendStrongLabel(row, `${label}:`);
  row.appendChild(document.createTextNode(" "));
  appendFormattedText(row, value);

  return row;
}

function createStatusRow(label, text, className = "sub") {
  const row = document.createElement("div");
  row.className = className;
  appendStrongLabel(row, `${label}:`);
  row.appendChild(document.createTextNode(` ${text}`));
  return row;
}

function createHelpButton(label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "help";
  button.setAttribute("aria-label", label);
  button.setAttribute("aria-expanded", "false");
  button.appendChild(createLucideIcon("info", "control-icon"));
  return button;
}

function createTooltip(piece) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.id = `tooltip-${piece.id}`;
  tooltip.setAttribute("role", "tooltip");

  const title = document.createElement("div");
  title.className = "tip-title";
  title.textContent = piece.name;

  tooltip.appendChild(title);
  tooltip.appendChild(createTipRow("map-pin", "Location", piece.location || "Unknown"));
  tooltip.appendChild(createTipRow("target", "Mobs", piece.mobs || "Unknown"));
  tooltip.appendChild(createTipRow("lightbulb", "Tip", piece.tip || "No tip yet"));

  if (piece.atanisNote) {
    tooltip.appendChild(createTipRow("sparkles", "Atanis", piece.atanisNote));
  }

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
    help.setAttribute("aria-expanded", "false");
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

const modalStack = [];
const modalElementSnapshots = new Map();

function getModalFocusableElements(overlay) {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  return Array.from(overlay.querySelectorAll(selector)).filter((element) => {
    return !element.hidden && element.getAttribute("aria-hidden") !== "true";
  });
}

function rememberModalElementState(element) {
  if (modalElementSnapshots.has(element)) return;

  modalElementSnapshots.set(element, {
    inert: !!element.inert,
    hadInertAttribute: element.hasAttribute("inert"),
    ariaHidden: element.getAttribute("aria-hidden")
  });
}

function restoreModalElementState(element) {
  const snapshot = modalElementSnapshots.get(element);
  if (!snapshot) return;

  element.inert = snapshot.inert;
  if (!snapshot.hadInertAttribute) {
    element.removeAttribute("inert");
  }

  if (snapshot.ariaHidden === null) {
    element.removeAttribute("aria-hidden");
  } else {
    element.setAttribute("aria-hidden", snapshot.ariaHidden);
  }
}

function isModalLiveRegion(element) {
  return element.id === SHARE_TOAST_ID || element.id === STORAGE_WARNING_ID;
}

function applyModalIsolation() {
  const activeState = modalStack[modalStack.length - 1] || null;

  Array.from(document.body.children).forEach((element) => {
    rememberModalElementState(element);

    if (isModalLiveRegion(element)) {
      restoreModalElementState(element);
      return;
    }

    if (activeState && element === activeState.overlay) {
      restoreModalElementState(element);
      return;
    }

    element.inert = true;
    element.setAttribute("aria-hidden", "true");
  });

  document.body.classList.toggle("modal-open", modalStack.length > 0);
}

function handleModalKeydown(event) {
  const activeState = modalStack[modalStack.length - 1];
  if (!activeState) return;

  if (event.key === "Escape") {
    event.preventDefault();
    event.stopImmediatePropagation();
    activeState.onEscape();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = getModalFocusableElements(activeState.overlay);
  if (!focusable.length) {
    event.preventDefault();
    activeState.overlay.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const current = document.activeElement;

  if (event.shiftKey && (current === first || !activeState.overlay.contains(current))) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (current === last || !activeState.overlay.contains(current))) {
    event.preventDefault();
    first.focus();
  }
}

function activateModalAccessibility(overlay, options = {}) {
  const existingState = modalStack.find((state) => state.overlay === overlay);
  if (existingState) return;

  const hadTabIndex = overlay.hasAttribute("tabindex");
  const previousTabIndex = overlay.getAttribute("tabindex");
  if (!hadTabIndex) {
    overlay.setAttribute("tabindex", "-1");
  }

  const state = {
    overlay,
    initialFocus: options.initialFocus || null,
    returnFocus: options.returnFocus || document.activeElement,
    onEscape: typeof options.onEscape === "function" ? options.onEscape : () => {},
    hadTabIndex,
    previousTabIndex
  };

  modalStack.push(state);
  if (modalStack.length === 1) {
    document.addEventListener("keydown", handleModalKeydown, true);
  }

  applyModalIsolation();

  window.requestAnimationFrame(() => {
    const topState = modalStack[modalStack.length - 1];
    if (topState !== state) return;
    (state.initialFocus || getModalFocusableElements(overlay)[0] || overlay).focus();
  });
}

function deactivateModalAccessibility(overlay, options = {}) {
  const stateIndex = modalStack.findIndex((state) => state.overlay === overlay);
  if (stateIndex < 0) return;

  const [state] = modalStack.splice(stateIndex, 1);

  if (!state.hadTabIndex) {
    overlay.removeAttribute("tabindex");
  } else if (state.previousTabIndex !== null) {
    overlay.setAttribute("tabindex", state.previousTabIndex);
  }

  if (modalStack.length) {
    applyModalIsolation();
  } else {
    document.removeEventListener("keydown", handleModalKeydown, true);
    modalElementSnapshots.forEach((snapshot, element) => {
      restoreModalElementState(element);
    });
    modalElementSnapshots.clear();
    document.body.classList.remove("modal-open");
  }

  const shouldReturnFocus = options.returnFocus !== false;
  const returnTarget = options.returnFocusTarget || state.returnFocus;
  const activeOverlay = modalStack[modalStack.length - 1]?.overlay || null;

  if (
    shouldReturnFocus &&
    returnTarget &&
    typeof returnTarget.focus === "function" &&
    (!activeOverlay || activeOverlay.contains(returnTarget))
  ) {
    window.requestAnimationFrame(() => {
      returnTarget.focus();
    });
  }
}

let combineDialogState = null;

function ensureCombineDialog() {
  if (combineDialogState?.overlay && document.body.contains(combineDialogState.overlay)) {
    return combineDialogState;
  }

  const overlay = document.createElement("div");
  overlay.id = COMBINE_DIALOG_ID;
  overlay.className = "combine-dialog-overlay";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", `${COMBINE_DIALOG_ID}Title`);

  const card = document.createElement("div");
  card.className = "combine-dialog-card";

  const header = document.createElement("div");
  header.className = "combine-dialog-header";

  const title = document.createElement("h3");
  title.id = `${COMBINE_DIALOG_ID}Title`;
  title.className = "combine-dialog-title";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "combine-dialog-close";
  closeButton.setAttribute("aria-label", "Close assembly preview");
  closeButton.appendChild(createLucideIcon("x", "control-icon"));

  const media = document.createElement("div");
  media.className = "combine-dialog-media";

  const image = document.createElement("img");
  image.className = "combine-dialog-image";
  image.alt = "";
  image.loading = "eager";
  media.appendChild(image);

  const text = document.createElement("p");
  text.className = "combine-dialog-text";

  header.appendChild(title);
  header.appendChild(closeButton);
  card.appendChild(header);
  card.appendChild(media);
  card.appendChild(text);
  overlay.appendChild(card);

  overlay.addEventListener("click", (event) => {
    if (event.target !== overlay) return;
    closeAllCombineTooltips();
  });

  closeButton.addEventListener("click", () => {
    closeAllCombineTooltips();
  });

  document.body.appendChild(overlay);

  combineDialogState = {
    overlay,
    title,
    media,
    image,
    text,
    closeButton,
    activeTrigger: null,
    activeTreasureId: null
  };

  return combineDialogState;
}

function openCombineDialog(treasureData, triggerButton) {
  const dialog = ensureCombineDialog();
  const isSameDialog = dialog.activeTreasureId === treasureData.id && dialog.activeTrigger === triggerButton && !dialog.overlay.hidden;

  if (isSameDialog) {
    closeAllCombineTooltips();
    return;
  }

  closeAllCombineTooltips({ returnFocus: false });

  dialog.title.textContent = treasureData.name;
  dialog.text.textContent = treasureData.combine?.text || "Arrange the required pieces in your inventory.";

  if (treasureData.combine?.image) {
    dialog.image.src = treasureData.combine.image;
    dialog.image.alt = `${treasureData.name} combine layout`;
    dialog.media.hidden = false;
  } else {
    dialog.image.removeAttribute("src");
    dialog.image.alt = "";
    dialog.media.hidden = true;
  }

  const wrap = triggerButton.closest(".combine-help-wrap");
  if (wrap) {
    wrap.classList.add("open");
  }

  triggerButton.setAttribute("aria-expanded", "true");
  dialog.activeTrigger = triggerButton;
  dialog.activeTreasureId = treasureData.id;
  dialog.overlay.hidden = false;

  activateModalAccessibility(dialog.overlay, {
    initialFocus: dialog.closeButton,
    returnFocus: triggerButton,
    onEscape: () => closeAllCombineTooltips()
  });

  window.requestAnimationFrame(() => {
    dialog.overlay.classList.add("is-visible");
  });
}

function closeAllCombineTooltips(options = {}) {
  const dialog = combineDialogState;
  if (!dialog) return;

  const returnFocus = options.returnFocus !== false;
  const activeTrigger = dialog.activeTrigger;
  const activeWrap = activeTrigger?.closest(".combine-help-wrap");

  deactivateModalAccessibility(dialog.overlay, {
    returnFocus,
    returnFocusTarget: activeTrigger
  });
  dialog.overlay.classList.remove("is-visible");
  dialog.overlay.hidden = true;

  if (activeWrap) {
    activeWrap.classList.remove("open");
  }

  if (activeTrigger) {
    activeTrigger.setAttribute("aria-expanded", "false");
  }

  dialog.activeTrigger = null;
  dialog.activeTreasureId = null;
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

function createLucideIcon(name, className = "") {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "18");
  svg.setAttribute("height", "18");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add("lucide-icon");

  if (className) {
    className.split(/\s+/).filter(Boolean).forEach((token) => svg.classList.add(token));
  }

  const appendPath = (data) => {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", data);
    svg.appendChild(path);
  };

  if (name === "info") {
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "10");
    svg.appendChild(circle);
    appendPath("M12 16v-4");
    appendPath("M12 8h.01");
  } else if (name === "x") {
    appendPath("M18 6 6 18");
    appendPath("m6 6 12 12");
  } else if (name === "wrench") {
    appendPath("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z");
  } else if (name === "map-pin") {
    appendPath("M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0Z");
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "10");
    circle.setAttribute("r", "3");
    svg.appendChild(circle);
  } else if (name === "target") {
    [10, 6, 2].forEach((radius) => {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", "12");
      circle.setAttribute("cy", "12");
      circle.setAttribute("r", String(radius));
      svg.appendChild(circle);
    });
  } else if (name === "lightbulb") {
    appendPath("M9 18h6");
    appendPath("M10 22h4");
    appendPath("M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.6-1.5 2.5h-4c0-.9-.6-1.8-1.5-2.5Z");
  } else if (name === "sparkles") {
    appendPath("m12 3-1.1 3.1a2 2 0 0 1-1.2 1.2L6.5 8.5l3.2 1.2a2 2 0 0 1 1.2 1.2L12 14l1.1-3.1a2 2 0 0 1 1.2-1.2l3.2-1.2-3.2-1.2a2 2 0 0 1-1.2-1.2Z");
    appendPath("m5 3 .5 1.4A1 1 0 0 0 6.1 5L7.5 5.5 6.1 6a1 1 0 0 0-.6.6L5 8l-.5-1.4A1 1 0 0 0 3.9 6L2.5 5.5 3.9 5a1 1 0 0 0 .6-.6Z");
    appendPath("m19 16 .6 1.6a1 1 0 0 0 .6.6l1.8.6-1.8.6a1 1 0 0 0-.6.6L19 22l-.6-1.6a1 1 0 0 0-.6-.6l-1.8-.6 1.8-.6a1 1 0 0 0 .6-.6Z");
  }

  return svg;
}

function configureProgressBar(progressBar, label) {
  progressBar.setAttribute("role", "progressbar");
  progressBar.setAttribute("aria-label", label);
  progressBar.setAttribute("aria-valuemin", "0");
  progressBar.setAttribute("aria-valuemax", "100");
  progressBar.setAttribute("aria-valuenow", "0");
}

function updateProgressBar(progressBar, percent, valueText = "") {
  const safePercent = clamp(Math.round(toFiniteNumber(percent)), 0, 100);
  progressBar.setAttribute("aria-valuenow", String(safePercent));

  if (valueText) {
    progressBar.setAttribute("aria-valuetext", valueText);
  } else {
    progressBar.removeAttribute("aria-valuetext");
  }
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
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add("panel-chevron");

  const polyline = document.createElementNS(svgNS, "polyline");
  polyline.setAttribute("points", "6 9 12 15 18 9");
  svg.appendChild(polyline);

  return svg;
}

function createCameraIcon(className = "share-progress-icon") {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add(className);

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M4 7h2.4l1.5-2h8.2l1.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
  );

  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "13");
  circle.setAttribute("r", "3.25");

  svg.appendChild(path);
  svg.appendChild(circle);
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

function createInlineIconLabel(iconPath, labelParts) {
  const wrapper = document.createElement("span");
  wrapper.className = "inline-icon-label";

  if (iconPath) {
    wrapper.appendChild(createIcon(iconPath, "", "icon small"));
  }

  const text = document.createElement("span");
  appendTextParts(text, Array.isArray(labelParts) ? labelParts : [String(labelParts ?? "")]);
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
  help.setAttribute("aria-expanded", "true");
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
  help.setAttribute("aria-describedby", tooltip.id);

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

  help.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    hideTooltip(tooltip);
    help.focus();
  });

  help.addEventListener("blur", () => {
    hideTooltip(tooltip);
  });
}

function createCombineButton(treasureData) {
  const wrap = document.createElement("div");
  wrap.className = "combine-help-wrap";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "combine-help-btn";
  button.setAttribute("aria-label", `Show assembly info for ${treasureData.name}`);
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-controls", COMBINE_DIALOG_ID);
  button.setAttribute("aria-expanded", "false");

  const buttonIcon = document.createElement("span");
  buttonIcon.className = "combine-help-icon";
  buttonIcon.setAttribute("aria-hidden", "true");
  buttonIcon.appendChild(createLucideIcon("wrench", "control-icon"));
  button.appendChild(buttonIcon);

  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCombineDialog(treasureData, button);
  });

  button.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeAllCombineTooltips();
    button.focus();
  });

  wrap.appendChild(button);

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
      const remaining = Math.max(0, toFiniteInteger(piece.pity.max) - toFiniteInteger(piece.pity.current));

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
  const total = normalizeCount(atanisState.total, 0, 999999);
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

function createAtanisSummaryNode(distribution) {
  const fragment = document.createDocumentFragment();

  if (!distribution.total) {
    const empty = document.createElement("p");
    empty.className = "atanis-summary-empty";
    empty.textContent = "Add your total Atanis here to get a suggested pity distribution across both potion sections.";
    fragment.appendChild(empty);
    return fragment;
  }

  const currentPool = document.createElement("p");
  currentPool.className = "atanis-summary-line";
  currentPool.appendChild(document.createTextNode("Current pool: "));

  const total = document.createElement("strong");
  total.textContent = distribution.total;
  currentPool.appendChild(total);
  currentPool.appendChild(document.createTextNode(" Atanis' Element"));
  fragment.appendChild(currentPool);

  if (!distribution.allocations.length) {
    const empty = document.createElement("p");
    empty.className = "atanis-summary-empty";
    empty.textContent = "No active HP/MP pity targets need Atanis support right now.";
    fragment.appendChild(empty);
    return fragment;
  }

  const list = document.createElement("ul");
  list.className = "atanis-allocation-list";

  distribution.allocations.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "atanis-allocation-item";

    const main = document.createElement("div");
    main.className = "atanis-allocation-main";
    main.appendChild(createIcon("icons/atanis-element.webp", "Atanis' Element", "icon small"));

    const text = document.createElement("span");
    const itemName = document.createElement("strong");
    itemName.textContent = entry.piece.pity.item;

    const meta = document.createElement("span");
    meta.className = "atanis-allocation-meta";
    meta.textContent = ` — ${entry.used}/${entry.remaining} suggested`;

    text.appendChild(itemName);
    text.appendChild(meta);
    main.appendChild(text);

    const tag = document.createElement("span");
    tag.className = `atanis-allocation-tag ${entry.completesPiece ? "complete" : "partial"}`;
    tag.textContent = entry.completesPiece ? "Complete" : `Partial +${entry.used}`;

    item.appendChild(main);
    item.appendChild(tag);
    list.appendChild(item);
  });

  const footer = document.createElement("div");
  footer.className = "atanis-summary-footer";

  const priority = document.createElement("span");
  priority.textContent = "Priority: smallest remaining pity gaps first.";

  const unused = document.createElement("span");
  unused.appendChild(document.createTextNode("Unused Atanis left: "));
  const remaining = document.createElement("strong");
  remaining.textContent = distribution.remainingPool;
  unused.appendChild(remaining);

  footer.appendChild(priority);
  footer.appendChild(unused);

  fragment.appendChild(list);
  fragment.appendChild(footer);
  return fragment;
}

function createAtanisHelper() {
  const helper = document.createElement("section");
  helper.className = "atanis-helper";

  const distribution = getAtanisDistribution();

  const head = document.createElement("div");
  head.className = "atanis-helper-head";

  const copy = document.createElement("div");
  copy.className = "atanis-helper-copy";

  const titleRow = document.createElement("div");
  titleRow.className = "atanis-helper-title-row";
  titleRow.appendChild(createIcon("icons/atanis-element.webp", "Atanis' Element", "icon large atanis-helper-icon"));

  const textWrap = document.createElement("div");

  const title = document.createElement("h3");
  title.className = "atanis-helper-title";
  title.textContent = "Shared Atanis' Element Helper";

  const note = document.createElement("p");
  note.className = "atanis-helper-note";
  note.textContent = "Enter your total Atanis Elements. The tracker suggests the best distribution across HP & MP potion pity pieces without auto-applying anything.";

  textWrap.appendChild(title);
  textWrap.appendChild(note);
  titleRow.appendChild(textWrap);
  copy.appendChild(titleRow);

  const inputGroup = document.createElement("label");
  inputGroup.className = "atanis-input-group";

  const inputLabel = document.createElement("span");
  inputLabel.className = "atanis-input-label";
  inputLabel.textContent = "Atanis Elements";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.step = "1";
  input.value = distribution.total;
  input.className = "atanis-total-input";
  input.setAttribute("data-atanis-input", "");
  input.setAttribute("aria-label", "Shared Atanis Elements for HP potion helper");

  inputGroup.appendChild(inputLabel);
  inputGroup.appendChild(input);
  head.appendChild(copy);
  head.appendChild(inputGroup);

  const summary = document.createElement("div");
  summary.className = "atanis-helper-summary";
  summary.setAttribute("role", "status");
  summary.setAttribute("aria-live", "polite");
  summary.setAttribute("aria-atomic", "true");
  summary.replaceChildren(createAtanisSummaryNode(distribution));

  helper.appendChild(head);
  helper.appendChild(summary);

  bindIntegerCountInput(input, {
    getValue: () => atanisState.total,
    setValue: (value) => {
      atanisState.total = value;
    },
    max: 999999,
    onCommit: () => {
      saveAtanisState(atanisState);
      refreshAtanisUI();
    }
  });

  return helper;
}

function createAtanisMirrorHelper() {
  const helper = document.createElement("section");
  helper.className = "atanis-mirror-helper";

  const distribution = getAtanisDistribution();

  const head = document.createElement("div");
  head.className = "atanis-mirror-head";

  const copy = document.createElement("div");
  copy.className = "atanis-mirror-copy";

  const titleRow = document.createElement("div");
  titleRow.className = "atanis-mirror-title-row";
  titleRow.appendChild(createIcon("icons/atanis-element.webp", "Atanis' Element", "icon large atanis-helper-icon"));

  const textWrap = document.createElement("div");

  const title = document.createElement("h3");
  title.className = "atanis-mirror-title";
  title.textContent = "Shared Atanis Input";

  const note = document.createElement("p");
  note.className = "atanis-mirror-note";
  note.textContent = "This is the same shared Atanis pool used by the HP potion helper.";

  const sharedNote = document.createElement("div");
  sharedNote.className = "atanis-shared-note";
  sharedNote.textContent = "Shared with HP potion";

  textWrap.appendChild(title);
  textWrap.appendChild(note);
  textWrap.appendChild(sharedNote);
  titleRow.appendChild(textWrap);
  copy.appendChild(titleRow);

  const inputGroup = document.createElement("label");
  inputGroup.className = "atanis-mirror-input-group";

  const inputLabel = document.createElement("span");
  inputLabel.className = "atanis-mirror-input-label";
  inputLabel.textContent = "Atanis Elements";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.step = "1";
  input.value = distribution.total;
  input.className = "atanis-mirror-input";
  input.setAttribute("data-atanis-mirror-input", "");
  input.setAttribute("aria-label", "Shared Atanis Elements for MP potion helper");

  inputGroup.appendChild(inputLabel);
  inputGroup.appendChild(input);
  head.appendChild(copy);
  head.appendChild(inputGroup);

  const summary = document.createElement("div");
  summary.className = "atanis-mirror-summary";
  summary.setAttribute("role", "status");
  summary.setAttribute("aria-live", "polite");
  summary.setAttribute("aria-atomic", "true");
  summary.replaceChildren(createAtanisSummaryNode(distribution));

  helper.appendChild(head);
  helper.appendChild(summary);

  bindIntegerCountInput(input, {
    getValue: () => atanisState.total,
    setValue: (value) => {
      atanisState.total = value;
    },
    max: 999999,
    onCommit: () => {
      saveAtanisState(atanisState);
      refreshAtanisUI();
    }
  });

  return helper;
}

function refreshAtanisUI() {
  const distribution = getAtanisDistribution();

  document.querySelectorAll(".atanis-helper").forEach((helper) => {
    const summary = helper.querySelector(".atanis-helper-summary");
    const input = helper.querySelector("[data-atanis-input]");

    if (summary) summary.replaceChildren(createAtanisSummaryNode(distribution));
    if (input) input.value = distribution.total;
  });

  document.querySelectorAll(".atanis-mirror-helper").forEach((helper) => {
    const summary = helper.querySelector(".atanis-mirror-summary");
    const input = helper.querySelector("[data-atanis-mirror-input]");

    if (summary) summary.replaceChildren(createAtanisSummaryNode(distribution));
    if (input) input.value = distribution.total;
  });

  document.querySelectorAll("[data-atanis-piece-token]").forEach((node) => {
    const token = node.getAttribute("data-atanis-piece-token");
    const allocation = distribution.allocationMap.get(token);

    const supportLabel = document.createElement("strong");
    supportLabel.textContent = "Atanis Support:";

    if (!allocation) {
      node.replaceChildren(supportLabel, document.createTextNode(" Available through the shared potion helper."));
      return;
    }

    const message = allocation.completesPiece
      ? ` Suggested to complete this pity piece (${allocation.used}/${allocation.remaining}).`
      : ` Suggested +${allocation.used} here from your shared pool.`;

    node.replaceChildren(supportLabel, document.createTextNode(message));
  });
}

function createSimplePiece(piece, treasureId, onUpdate) {
  const wrapper = document.createElement("div");
  wrapper.className = "piece";

  const isKrogdalo = treasureId === "krogdalo";
  const method = getSimplePieceMethod(piece, treasureId);

  const header = document.createElement("div");
  header.className = "piece-title";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.checked = !!piece.obtained;
  checkbox.setAttribute("aria-label", `${piece.name} obtained`);

  const titleText = document.createElement("span");
  titleText.className = "piece-name";
  titleText.textContent = piece.name;

  const badge = createPieceBadge(method.badge, method.badgeClass);

  header.appendChild(checkbox);

  if (piece.icon) {
    header.appendChild(createIcon(piece.icon, piece.name, isKrogdalo ? "icon krogdalo-horse-icon" : "icon large"));
  }

  header.appendChild(titleText);
  header.appendChild(badge);
  wrapper.appendChild(header);

  wrapper.appendChild(createStatusRow("Status", method.status, "sub simple-note"));

  const tooltip = createTooltip(piece);
  wrapper.appendChild(tooltip);

  const helpRow = document.createElement("div");
  helpRow.className = "sub";

  const help = createHelpButton(`Show item details for ${piece.name}`);

  helpRow.appendChild(help);
  helpRow.appendChild(document.createTextNode("Item details"));
  wrapper.appendChild(helpRow);

  attachTooltipHandlers(help, tooltip);

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
  mainCheckbox.setAttribute("aria-label", `${piece.name} completion status`);

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
  fullDropCheckbox.setAttribute("aria-label", `${piece.fullDrop.item} full drop obtained`);

  fullDropRow.appendChild(fullDropCheckbox);
  fullDropRow.appendChild(
    createInlineIconLabel(
      piece.fullDrop.icon,
      [{ strong: "Full Drop:" }, ` ${piece.fullDrop.item}`]
    )
  );
  wrapper.appendChild(fullDropRow);

  const pityRow = document.createElement("div");
  pityRow.className = "sub pity-row";

  const pityLabel = createInlineIconLabel(
    piece.pity.icon,
    [{ strong: piece.pity.item }]
  );

  const pityInput = document.createElement("input");
  pityInput.type = "number";
  pityInput.min = "0";
  pityInput.max = String(piece.pity.max);
  pityInput.value = piece.pity.current;
  pityInput.className = "pity-input";
  pityInput.setAttribute("aria-label", `${piece.pity.item} pity count`);

  const pityMax = document.createElement("span");
  pityMax.textContent = `/ ${piece.pity.max}`;

  const help = createHelpButton(`Show item details for ${piece.name}`);

  pityRow.appendChild(pityLabel);
  pityRow.appendChild(pityInput);
  pityRow.appendChild(pityMax);
  pityRow.appendChild(help);
  wrapper.appendChild(pityRow);

  const bar = document.createElement("div");
  bar.className = "bar";
  configureProgressBar(bar, `${piece.name} pity progress`);

  const fill = document.createElement("div");
  fill.className = "fill";
  bar.appendChild(fill);
  wrapper.appendChild(bar);

  const exchangeRow = document.createElement("div");
  exchangeRow.className = "sub exchange-row";
  exchangeRow.appendChild(
    createInlineIconLabel(
      piece.exchange.icon,
      [{ strong: "Exchange Item:" }, ` ${piece.exchange.item}`]
    )
  );
  wrapper.appendChild(exchangeRow);

  if (piece.atanisNote && isPotionTreasureId(treasureId)) {
    const atanisRow = document.createElement("div");
    atanisRow.className = "sub atanis-support-row";

    const atanisLabel = document.createElement("span");
    atanisLabel.setAttribute("data-atanis-piece-token", `${treasureId}:${pieceIndex}`);
    atanisLabel.setAttribute("aria-live", "polite");
    atanisLabel.setAttribute("aria-atomic", "true");
    const supportLabel = document.createElement("strong");
    supportLabel.textContent = "Atanis Support:";
    atanisLabel.replaceChildren(supportLabel, document.createTextNode(" Available through the shared potion helper."));

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
    const progressPercent = Math.round(getPieceProgress(piece) * 100);
    fill.style.width = `${progressPercent}%`;
    updateProgressBar(
      bar,
      progressPercent,
      piece.fullDrop.obtained
        ? "Full drop obtained"
        : `${piece.pity.current} of ${piece.pity.max} pity items`
    );
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

  bindIntegerCountInput(pityInput, {
    getValue: () => piece.pity.current,
    setValue: (value) => {
      piece.pity.current = value;
    },
    max: piece.pity.max,
    onCommit: () => {
      updatePieceState();
      persistAndRefresh();
    }
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
  checkbox.setAttribute("aria-label", `${piece.name} obtained`);

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
      [{ strong: "Material:" }, ` ${piece.material.item}`]
    )
  );
  wrapper.appendChild(materialRow);

  const materialProgressRow = document.createElement("div");
  materialProgressRow.className = "sub material-progress-row";

  const materialLabel = document.createElement("span");
  appendStrongLabel(materialLabel, "Progress");

  const materialInput = document.createElement("input");
  materialInput.type = "number";
  materialInput.min = "0";
  materialInput.max = String(piece.material.required);
  materialInput.value = piece.material.current;
  materialInput.className = "material-input";
  materialInput.setAttribute("aria-label", `${piece.material.item} material count`);

  const materialRequired = document.createElement("span");
  materialRequired.textContent = `/ ${piece.material.required}`;

  const help = createHelpButton(`Show item details for ${piece.name}`);

  materialProgressRow.appendChild(materialLabel);
  materialProgressRow.appendChild(materialInput);
  materialProgressRow.appendChild(materialRequired);
  materialProgressRow.appendChild(help);
  wrapper.appendChild(materialProgressRow);

  const bar = document.createElement("div");
  bar.className = "bar";
  configureProgressBar(bar, `${piece.name} material progress`);

  const fill = document.createElement("div");
  fill.className = "fill";
  bar.appendChild(fill);
  wrapper.appendChild(bar);

  wrapper.appendChild(createStatusRow("Status", "Auto-completes at required material count, or can be checked manually.", "sub crafted-note"));

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
    const progressPercent = Math.round(getPieceProgress(piece) * 100);
    fill.style.width = `${progressPercent}%`;
    updateProgressBar(
      bar,
      progressPercent,
      piece.obtained && piece.material.current < piece.material.required
        ? `Obtained; ${piece.material.current} of ${piece.material.required} materials tracked`
        : `${piece.material.current} of ${piece.material.required} materials`
    );
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

  bindIntegerCountInput(materialInput, {
    getValue: () => piece.material.current,
    setValue: (value) => {
      piece.material.current = value;
    },
    max: piece.material.required,
    onCommit: () => {
      if (piece.material.current >= piece.material.required) {
        piece.obtained = true;
      } else if (!checkbox.checked) {
        piece.obtained = false;
      }

      updatePieceState();
      persistAndRefresh();
    }
  });

  attachTooltipHandlers(help, tooltip);
  updatePieceState();

  return wrapper;
}

function createLifeSkillCraftPiece(piece, treasureId, onUpdate) {
  const wrapper = document.createElement("div");
  wrapper.className = "piece";

  const header = document.createElement("div");
  header.className = "piece-title";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.checked = !!piece.obtained;
  checkbox.setAttribute("aria-label", `${piece.name} obtained`);

  const titleText = document.createElement("span");
  titleText.className = "piece-name";
  titleText.textContent = piece.name;

  const badge = createPieceBadge("Gathering", "gathering");

  header.appendChild(checkbox);

  if (piece.icon) {
    header.appendChild(createIcon(piece.icon, piece.name, "icon large"));
  }

  header.appendChild(titleText);
  header.appendChild(badge);
  wrapper.appendChild(header);

  const sourceRow = document.createElement("div");
  sourceRow.className = "sub lifeskill-source-row";
  appendStrongLabel(sourceRow, "Activity:");
  sourceRow.appendChild(document.createTextNode(` ${piece.activity || "Gathering"}`));
  wrapper.appendChild(sourceRow);

  const lowerRow = document.createElement("div");
  lowerRow.className = "sub lifeskill-progress-row";
  lowerRow.appendChild(
    createInlineIconLabel(
      piece.lowerMaterial.icon,
      [{ strong: "Material:" }, ` ${piece.lowerMaterial.item}`]
    )
  );

  const lowerInput = document.createElement("input");
  lowerInput.type = "number";
  lowerInput.min = "0";
  lowerInput.max = String(piece.lowerMaterial.required);
  lowerInput.value = piece.lowerMaterial.current;
  lowerInput.className = "material-input";
  lowerInput.setAttribute("aria-label", `${piece.lowerMaterial.item} material count for ${piece.name}`);

  const lowerRequired = document.createElement("span");
  lowerRequired.textContent = `/ ${piece.lowerMaterial.required}`;

  lowerRow.appendChild(lowerInput);
  lowerRow.appendChild(lowerRequired);
  wrapper.appendChild(lowerRow);

  const essenceRow = document.createElement("div");
  essenceRow.className = "sub lifeskill-progress-row";
  essenceRow.appendChild(
    createInlineIconLabel(
      piece.essence.icon,
      [{ strong: "Essence:" }, ` ${piece.essence.item}`]
    )
  );

  const essenceInput = document.createElement("input");
  essenceInput.type = "number";
  essenceInput.min = "0";
  essenceInput.max = String(piece.essence.required);
  essenceInput.value = piece.essence.current;
  essenceInput.className = "material-input";
  essenceInput.setAttribute("aria-label", `${piece.essence.item} count for ${piece.name}`);

  const essenceRequired = document.createElement("span");
  essenceRequired.textContent = `/ ${piece.essence.required}`;

  essenceRow.appendChild(essenceInput);
  essenceRow.appendChild(essenceRequired);

  const help = createHelpButton(`Show item details for ${piece.name}`);
  essenceRow.appendChild(help);
  wrapper.appendChild(essenceRow);

  const bar = document.createElement("div");
  bar.className = "bar";
  configureProgressBar(bar, `${piece.name} crafting progress`);

  const fill = document.createElement("div");
  fill.className = "fill";
  bar.appendChild(fill);
  wrapper.appendChild(bar);

  wrapper.appendChild(createStatusRow("Status", "Simple Alchemy result using 1,000 gathering materials and 100 Essence of Nature.", "sub crafted-note"));

  const tooltip = createTooltip(piece);
  wrapper.appendChild(tooltip);

  function updatePieceState() {
    if (piece.lowerMaterial.current >= piece.lowerMaterial.required) {
      piece.lowerMaterial.current = piece.lowerMaterial.required;
    }

    if (piece.essence.current >= piece.essence.required) {
      piece.essence.current = piece.essence.required;
    }

    if (
      piece.lowerMaterial.current >= piece.lowerMaterial.required &&
      piece.essence.current >= piece.essence.required
    ) {
      piece.obtained = true;
    }

    if (
      !piece.obtained &&
      (
        piece.lowerMaterial.current < piece.lowerMaterial.required ||
        piece.essence.current < piece.essence.required
      )
    ) {
      checkbox.checked = false;
    } else {
      checkbox.checked = !!piece.obtained;
    }

    lowerInput.value = piece.lowerMaterial.current;
    essenceInput.value = piece.essence.current;
    wrapper.classList.toggle("completed-piece", isLifeSkillCraftPieceComplete(piece));
    const progressPercent = Math.round(getPieceProgress(piece) * 100);
    fill.style.width = `${progressPercent}%`;
    updateProgressBar(
      bar,
      progressPercent,
      `${piece.lowerMaterial.current} of ${piece.lowerMaterial.required} gathering materials and ` +
        `${piece.essence.current} of ${piece.essence.required} essence`
    );
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

  bindIntegerCountInput(lowerInput, {
    getValue: () => piece.lowerMaterial.current,
    setValue: (value) => {
      piece.lowerMaterial.current = value;
    },
    max: piece.lowerMaterial.required,
    onCommit: () => {
      updatePieceState();
      persistAndRefresh();
    }
  });

  bindIntegerCountInput(essenceInput, {
    getValue: () => piece.essence.current,
    setValue: (value) => {
      piece.essence.current = value;
    },
    max: piece.essence.required,
    onCommit: () => {
      updatePieceState();
      persistAndRefresh();
    }
  });

  attachTooltipHandlers(help, tooltip);
  updatePieceState();

  return wrapper;
}

function createMarketFlavorNode(treasureId) {
  const flavor = document.createElement("span");
  flavor.className = "market-flavor hidden";

  if (treasureId === "ornette" || treasureId === "odore") {
    flavor.textContent = "(Central Market availability and prices vary by region)";
  }

  return flavor;
}

function createShareCardIcon(src, alt, className) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt || "";
  image.className = className;
  image.loading = "eager";
  image.decoding = "async";
  return image;
}

function formatSharePair(current, required) {
  const safeRequired = Math.max(0, toFiniteInteger(required));
  const safeCurrent = safeRequired > 0
    ? clamp(toFiniteInteger(current), 0, safeRequired)
    : Math.max(0, toFiniteInteger(current));

  return safeRequired > 0 ? `${safeCurrent} / ${safeRequired}` : `${safeCurrent}`;
}

function getSharePieceStatus(piece) {
  const completed = isPieceComplete(piece);

  if (piece.type === "grind") {
    if (piece.fullDrop?.obtained) {
      return {
        complete: true,
        summary: "Full drop obtained",
        detail: "Completed"
      };
    }

    return {
      complete: completed,
      summary: `${formatSharePair(piece.pity?.current, piece.pity?.max)} pity`,
      detail: completed ? "Exchange ready" : "Pity progress"
    };
  }

  if (piece.type === "crafted") {
    const materialSummary = formatSharePair(piece.material?.current, piece.material?.required);

    if (piece.obtained && toFiniteInteger(piece.material?.current) < toFiniteInteger(piece.material?.required)) {
      return {
        complete: true,
        summary: "Obtained",
        detail: `${materialSummary} tracked`
      };
    }

    return {
      complete: completed,
      summary: materialSummary,
      detail: piece.material?.item || "Material progress"
    };
  }

  if (piece.type === "lifeskillCraft") {
    const lowerSummary = formatSharePair(piece.lowerMaterial?.current, piece.lowerMaterial?.required);
    const essenceSummary = `${formatSharePair(piece.essence?.current, piece.essence?.required)} essence`;

    if (
      piece.obtained &&
      (
        toFiniteInteger(piece.lowerMaterial?.current) < toFiniteInteger(piece.lowerMaterial?.required) ||
        toFiniteInteger(piece.essence?.current) < toFiniteInteger(piece.essence?.required)
      )
    ) {
      return {
        complete: true,
        summary: "Obtained",
        detail: `${lowerSummary} + ${essenceSummary}`
      };
    }

    return {
      complete: completed,
      summary: lowerSummary,
      detail: essenceSummary
    };
  }

  return {
    complete: completed,
    summary: completed ? "Obtained" : "Missing",
    detail: completed ? "Collected" : "Still missing"
  };
}

function createSharePieceItem(piece) {
  const status = getSharePieceStatus(piece);
  const item = document.createElement("div");
  item.className = `share-card-piece ${status.complete ? "completed" : "missing"}`;

  const iconWrap = document.createElement("div");
  iconWrap.className = "share-card-piece-icon-wrap";
  if (piece.icon) {
    iconWrap.appendChild(createShareCardIcon(piece.icon, piece.name, "share-card-piece-icon"));
  }

  const body = document.createElement("div");
  body.className = "share-card-piece-body";

  const name = document.createElement("div");
  name.className = "share-card-piece-name";
  name.textContent = piece.name;

  const summary = document.createElement("div");
  summary.className = "share-card-piece-status";
  summary.textContent = status.summary;

  const detail = document.createElement("div");
  detail.className = "share-card-piece-detail";
  detail.textContent = status.detail;

  const mark = document.createElement("span");
  mark.className = "share-card-piece-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = status.complete ? "✓" : "•";

  body.appendChild(name);
  body.appendChild(summary);
  body.appendChild(detail);

  item.appendChild(iconWrap);
  item.appendChild(body);
  item.appendChild(mark);
  return item;
}

function buildTreasureShareCard(treasureId) {
  const treasureData = treasureState[treasureId];
  const { total, completed, percent } = calculateOverallProgress(treasureData);
  const isNewTreasure = !!treasureData.isNew;

  const card = document.createElement("article");
  card.className = "treasure-share-card";
  card.setAttribute("data-treasure", treasureId);

  const header = document.createElement("header");
  header.className = "share-card-header";

  const brand = document.createElement("div");
  brand.className = "share-card-brand";
  brand.textContent = "BDO Treasure Tracker";
  header.appendChild(brand);

  const titleRow = document.createElement("div");
  titleRow.className = "share-card-title-row";

  if (treasureData.icon) {
    titleRow.appendChild(createShareCardIcon(treasureData.icon, treasureData.name, "share-card-treasure-icon"));
  }

  const titleCopy = document.createElement("div");
  titleCopy.className = "share-card-title-copy";

  const titleLine = document.createElement("div");
  titleLine.className = "share-card-title-line";

  const title = document.createElement("h2");
  title.className = "share-card-title";
  title.textContent = treasureData.name;
  titleLine.appendChild(title);

  if (isNewTreasure) {
    const badge = document.createElement("span");
    badge.className = "new-treasure-badge share-card-new-badge";
    badge.textContent = "NEW";
    titleLine.appendChild(badge);
  }

  const subtitle = document.createElement("p");
  subtitle.className = "share-card-subtitle";
  subtitle.textContent = treasureData.subtitle;

  const metaRow = document.createElement("div");
  metaRow.className = "share-card-meta-row";
  metaRow.appendChild(createPanelPill(getTreasureTypeLabel(treasureData), "type"));
  metaRow.appendChild(createPanelPill(`${total} pieces`, "count"));

  titleCopy.appendChild(titleLine);
  titleCopy.appendChild(subtitle);
  titleCopy.appendChild(metaRow);
  titleRow.appendChild(titleCopy);
  header.appendChild(titleRow);

  const progressSection = document.createElement("section");
  progressSection.className = "share-card-progress";

  const progressTop = document.createElement("div");
  progressTop.className = "share-card-progress-top";

  const progressLabel = document.createElement("div");
  progressLabel.className = "share-card-progress-label";
  progressLabel.textContent = "Overall Progress";

  const progressValue = document.createElement("div");
  progressValue.className = "share-card-progress-value";
  progressValue.textContent = `${percent}%`;

  progressTop.appendChild(progressLabel);
  progressTop.appendChild(progressValue);

  const progressCount = document.createElement("div");
  progressCount.className = "share-card-progress-count";
  progressCount.textContent = `${completed} / ${total} completed`;

  const progressBar = document.createElement("div");
  progressBar.className = "share-card-progress-bar";

  const progressFill = document.createElement("div");
  progressFill.className = "share-card-progress-fill";
  progressFill.style.width = `${percent}%`;

  progressBar.appendChild(progressFill);
  progressSection.appendChild(progressTop);
  progressSection.appendChild(progressCount);
  progressSection.appendChild(progressBar);

  const pieceGrid = document.createElement("section");
  pieceGrid.className = "share-card-piece-grid";

  treasureData.pieces.forEach((piece) => {
    pieceGrid.appendChild(createSharePieceItem(piece));
  });

  const footer = document.createElement("footer");
  footer.className = "share-card-footer";

  const footerUrl = document.createElement("span");
  footerUrl.className = "share-card-footer-url";
  footerUrl.textContent = "bdotreasurehub.com";

  const footerText = document.createElement("span");
  footerText.className = "share-card-footer-copy";
  footerText.textContent = "Fan-made BDO community tracker";

  footer.appendChild(footerUrl);
  footer.appendChild(footerText);

  card.appendChild(header);
  card.appendChild(progressSection);
  card.appendChild(pieceGrid);
  card.appendChild(footer);
  return card;
}

let html2CanvasLoadPromise = null;

function ensureHtml2CanvasLoaded() {
  if (typeof window.html2canvas === "function") {
    return Promise.resolve(window.html2canvas);
  }

  if (html2CanvasLoadPromise) {
    return html2CanvasLoadPromise;
  }

  html2CanvasLoadPromise = new Promise((resolve, reject) => {
    const staleScript = document.getElementById(HTML2CANVAS_SCRIPT_ID);
    if (staleScript) {
      staleScript.remove();
    }

    const script = document.createElement("script");
    script.id = HTML2CANVAS_SCRIPT_ID;
    script.src = HTML2CANVAS_SCRIPT_URL;
    script.async = true;
    script.integrity = HTML2CANVAS_SCRIPT_INTEGRITY;
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";

    let settled = false;
    const finish = (error = null) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);

      if (error) {
        script.remove();
        reject(error);
        return;
      }

      resolve(window.html2canvas);
    };

    const createLoadError = (message) => {
      const error = new Error(message);
      error.code = "HTML2CANVAS_LOAD_FAILED";
      return error;
    };

    const onLoad = () => {
      if (typeof window.html2canvas !== "function") {
        finish(createLoadError("Screenshot library loaded without exposing html2canvas."));
        return;
      }

      finish();
    };

    const onError = () => {
      finish(createLoadError("Screenshot library could not be loaded."));
    };

    const timeoutId = window.setTimeout(() => {
      finish(createLoadError("Screenshot library load timed out."));
    }, HTML2CANVAS_LOAD_TIMEOUT_MS);

    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });
    document.head.appendChild(script);
  }).catch((error) => {
    html2CanvasLoadPromise = null;
    throw error;
  });

  return html2CanvasLoadPromise;
}

function createShareCardStage() {
  const existingStage = document.getElementById(SHARE_CARD_STAGE_ID);
  if (existingStage) {
    existingStage.remove();
  }

  const stage = document.createElement("div");
  stage.id = SHARE_CARD_STAGE_ID;
  stage.className = "share-card-stage";
  return stage;
}

async function waitForShareCardAssets(root) {
  const images = Array.from(root.querySelectorAll("img"));
  const imagePromises = images.map((image) => {
    if (image.complete) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        image.removeEventListener("load", done);
        image.removeEventListener("error", done);
        resolve();
      };

      const timeoutId = window.setTimeout(done, SHARE_ASSET_WAIT_TIMEOUT_MS);
      image.addEventListener("load", done, { once: true });
      image.addEventListener("error", done, { once: true });
    });
  });

  const fontPromise = document.fonts?.ready
    ? Promise.race([
      document.fonts.ready.catch((error) => {
        console.warn("Font readiness check failed:", error);
      }),
      wait(SHARE_ASSET_WAIT_TIMEOUT_MS)
    ])
    : Promise.resolve();

  await Promise.all([Promise.all(imagePromises), fontPromise]);

  await wait(40);
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    if (typeof canvas.toBlob === "function") {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/png");
      return;
    }

    const dataUrl = canvas.toDataURL("image/png");
    const [header, body] = dataUrl.split(",");
    const mimeMatch = header.match(/data:(.*?);base64/);
    const mime = mimeMatch ? mimeMatch[1] : "image/png";
    const binary = atob(body);
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    resolve(new Blob([bytes], { type: mime }));
  });
}

function downloadObjectUrl(objectUrl, filename) {
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function closeSharePreviewModal(options = {}) {
  const { returnFocus = true } = options;
  const overlay = document.getElementById(SHARE_PREVIEW_DIALOG_ID);
  if (!overlay) return;

  const triggerButton = overlay.activeTrigger || null;
  const objectUrl = overlay.objectUrl || "";

  overlay.activeTrigger = null;
  overlay.objectUrl = "";

  deactivateModalAccessibility(overlay, {
    returnFocus,
    returnFocusTarget: triggerButton
  });

  overlay.remove();

  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
  }

}

function openSharePreviewModal({
  treasureId,
  treasureData,
  blob,
  filename,
  triggerButton
}) {
  closeSharePreviewModal({ returnFocus: false });
  closeAllCombineTooltips({ returnFocus: false });

  const objectUrl = URL.createObjectURL(blob);
  const overlay = document.createElement("div");
  overlay.id = SHARE_PREVIEW_DIALOG_ID;
  overlay.className = "share-preview-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", `${SHARE_PREVIEW_DIALOG_ID}Title`);
  overlay.setAttribute("aria-describedby", `${SHARE_PREVIEW_DIALOG_ID}Description`);
  overlay.activeTrigger = triggerButton || null;
  overlay.objectUrl = objectUrl;

  const card = document.createElement("div");
  card.className = "share-preview-card";

  const header = document.createElement("div");
  header.className = "share-preview-header";

  const titleWrap = document.createElement("div");
  titleWrap.className = "share-preview-copy";

  const title = document.createElement("h3");
  title.id = `${SHARE_PREVIEW_DIALOG_ID}Title`;
  title.className = "share-preview-title";
  title.textContent = "Share progress";

  const description = document.createElement("p");
  description.id = `${SHARE_PREVIEW_DIALOG_ID}Description`;
  description.className = "share-preview-description";
  description.textContent = `${treasureData.name} progress card is ready.`;

  titleWrap.appendChild(title);
  titleWrap.appendChild(description);
  header.appendChild(titleWrap);

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "share-preview-close";
  closeButton.setAttribute("aria-label", "Close share progress preview");
  closeButton.appendChild(createLucideIcon("x", "control-icon"));
  header.appendChild(closeButton);

  const previewFrame = document.createElement("div");
  previewFrame.className = "share-preview-frame";

  const previewImage = document.createElement("img");
  previewImage.className = "share-preview-image";
  previewImage.src = objectUrl;
  previewImage.alt = `${treasureData.name} progress card preview`;
  previewImage.loading = "eager";
  previewFrame.appendChild(previewImage);

  const actions = document.createElement("div");
  actions.className = "share-preview-actions";

  const shareButton = document.createElement("button");
  shareButton.type = "button";
  shareButton.className = "ghost-btn share-preview-action share-preview-action-primary";
  shareButton.textContent = "Share Image";

  const downloadButton = document.createElement("button");
  downloadButton.type = "button";
  downloadButton.className = "ghost-btn share-preview-action";
  downloadButton.textContent = "Download PNG";

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.className = "ghost-btn share-preview-action";
  openButton.textContent = "Open Image";

  const dismissButton = document.createElement("button");
  dismissButton.type = "button";
  dismissButton.className = "ghost-btn share-preview-action";
  dismissButton.textContent = "Close";

  const closeModal = () => {
    closeSharePreviewModal();
  };

  shareButton.addEventListener("click", async () => {
    if (
      typeof File !== "function" ||
      typeof navigator === "undefined" ||
      typeof navigator.share !== "function" ||
      typeof navigator.canShare !== "function"
    ) {
      showToast("Sharing is not supported here. You can download or open the image instead.");
      return;
    }

    const file = new File([blob], filename, { type: "image/png" });
    const shareData = {
      files: [file],
      title: "BDO Treasure Tracker",
      text: `${treasureData.name} progress from BDO Treasure Tracker`,
      url: SHARE_EXPORT_URL
    };

    try {
      if (!navigator.canShare({ files: [file] })) {
        showToast("Sharing is not supported here. You can download or open the image instead.");
        return;
      }

      await navigator.share(shareData);
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }

      console.warn(`Native share failed for ${treasureId}:`, error);
      showToast("Sharing is not supported here. You can download or open the image instead.");
    }
  });

  downloadButton.addEventListener("click", () => {
    downloadObjectUrl(objectUrl, filename);
    showToast("Download started. If nothing happens, use Open Image and save it manually.");
  });

  openButton.addEventListener("click", () => {
    const openedWindow = window.open(objectUrl, "_blank");
    if (!openedWindow) {
      showToast("Could not open the image automatically. Try Download PNG instead.");
      return;
    }

    try {
      openedWindow.opener = null;
    } catch (error) {
      console.warn("Could not clear opener for share preview window:", error);
    }
  });

  dismissButton.addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  actions.appendChild(shareButton);
  actions.appendChild(downloadButton);
  actions.appendChild(openButton);
  actions.appendChild(dismissButton);

  card.appendChild(header);
  card.appendChild(previewFrame);
  card.appendChild(actions);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  activateModalAccessibility(overlay, {
    initialFocus: shareButton,
    returnFocus: triggerButton,
    onEscape: closeModal
  });

  window.requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
  });
}

async function generateTreasureShareCard(treasureId, options = {}) {
  const { triggerButton = null } = options;
  const treasureData = treasureState[treasureId];
  if (!treasureData) return;

  let stage = null;

  try {
    await ensureHtml2CanvasLoaded();
    closeSharePreviewModal({ returnFocus: false });
    stage = createShareCardStage();
    const card = buildTreasureShareCard(treasureId);
    stage.appendChild(card);
    document.body.appendChild(stage);

    await waitForShareCardAssets(card);

    const canvas = await window.html2canvas(card, {
      backgroundColor: "#081220",
      scale: 2,
      useCORS: true
    });

    const blob = await canvasToBlob(canvas);
    if (!blob) {
      throw new Error("Canvas export returned an empty blob.");
    }

    const filename = `bdo-treasure-progress-${treasureId}.png`;
    openSharePreviewModal({
      treasureId,
      treasureData,
      blob,
      filename,
      triggerButton
    });
  } catch (error) {
    console.error(`Failed to generate share card for ${treasureId}:`, error);
    showToast(
      error?.code === "HTML2CANVAS_LOAD_FAILED"
        ? "Screenshot tool could not load. Check your connection and try again."
        : "Could not create progress card. Please try again."
    );
  } finally {
    if (stage) {
      stage.remove();
    }
  }
}

function createShareProgressButton(treasureId, treasureName) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "share-progress-btn";
  button.setAttribute("aria-label", `Share progress for ${treasureName}`);
  button.setAttribute("title", `Share progress for ${treasureName}`);
  button.setAttribute("aria-busy", "false");

  button.appendChild(createCameraIcon());

  const label = document.createElement("span");
  label.className = "share-progress-label";
  label.textContent = "Share Progress";
  button.appendChild(label);

  button.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (button.disabled) return;

    showToast("Preparing progress card...");
    button.disabled = true;
    button.setAttribute("aria-busy", "true");

    try {
      await generateTreasureShareCard(treasureId, { triggerButton: button });
    } finally {
      button.disabled = false;
      button.setAttribute("aria-busy", "false");
    }
  });

  return button;
}

function createTreasurePanel(treasureId) {
  const treasureData = treasureState[treasureId];
  const treeId = `${treasureId}-tree`;
  const headingId = `${treasureId}-heading`;
  const panel = document.createElement("section");
  panel.className = `treasure-panel treasure-${treasureId}`;
  panel.setAttribute("aria-labelledby", headingId);

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

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "panel-toggle-button";
  toggleButton.setAttribute("aria-controls", treeId);
  toggleButton.setAttribute("aria-label", treasureData.name);

  const titleGroup = document.createElement("span");
  titleGroup.className = "panel-title-group";

  titleGroup.appendChild(createChevron());

  if (treasureData.icon) {
    titleGroup.appendChild(createIcon(treasureData.icon, "", "icon panel-icon"));
  }

  const titleMain = document.createElement("span");
  titleMain.className = "panel-title-main";

  const titleLine = document.createElement("span");
  titleLine.className = "panel-title-line";

  const titleText = document.createElement("span");
  titleText.className = "panel-heading-text";
  titleText.textContent = treasureData.name;
  titleLine.appendChild(titleText);

  if (treasureData.isNew) {
    const newBadge = document.createElement("span");
    newBadge.className = "new-treasure-badge";
    newBadge.textContent = "NEW";
    titleLine.appendChild(newBadge);
  }

  const metaRow = document.createElement("span");
  metaRow.className = "panel-meta-row";

  const typePill = createPanelPill(getTreasureTypeLabel(treasureData), "type");
  const countPill = createPanelPill(`${treasureData.pieces.length} pieces`, "count");

  metaRow.appendChild(typePill);
  metaRow.appendChild(countPill);

  titleMain.appendChild(titleLine);
  titleMain.appendChild(metaRow);

  titleGroup.appendChild(titleMain);
  toggleButton.appendChild(titleGroup);

  const title = document.createElement("h2");
  title.id = headingId;
  title.className = "panel-heading";
  title.appendChild(toggleButton);
  titleRow.appendChild(title);

  const titleActions = document.createElement("div");
  titleActions.className = "panel-title-actions";
  titleActions.appendChild(createShareProgressButton(treasureId, treasureData.name));

  if (treasureData.combine?.image || treasureData.combine?.text) {
    titleActions.appendChild(createCombineButton(treasureData));
  }

  titleRow.appendChild(titleActions);

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
  overallBox.setAttribute("role", "status");
  overallBox.setAttribute("aria-live", "polite");
  overallBox.setAttribute("aria-atomic", "true");

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
  resetButton.className = "ghost-btn reset-progress-btn";
  resetButton.textContent = "Reset Progress";
  resetButton.setAttribute("aria-label", `Reset progress for ${treasureData.name}`);

  actions.appendChild(overallBox);
  actions.appendChild(resetButton);

  panelTop.appendChild(left);
  panelTop.appendChild(actions);
  panel.appendChild(panelTop);

  const overallBar = document.createElement("div");
  overallBar.className = "overall-bar";
  configureProgressBar(overallBar, `${treasureData.name} overall progress`);

  const overallFill = document.createElement("div");
  overallFill.className = "overall-fill";
  overallBar.appendChild(overallFill);
  panel.appendChild(overallBar);

  const tree = document.createElement("section");
  tree.className = "tree";
  tree.id = treeId;
  tree.setAttribute("aria-labelledby", headingId);
  panel.appendChild(tree);

  function syncPanelExpandedState() {
    const expanded = !panel.classList.contains("collapsed");
    toggleButton.setAttribute("aria-expanded", String(expanded));
    tree.setAttribute("aria-hidden", String(!expanded));
    tree.inert = !expanded;
  }

  function updateOverallUI() {
    const { total, completed, percent } = calculateOverallProgress(treasureData);
    overallValue.textContent = `${percent}%`;
    overallCount.textContent = `${completed} / ${total} completed`;
    overallFill.style.width = `${percent}%`;
    updateProgressBar(
      overallBar,
      percent,
      `${completed} of ${total} pieces completed; ${percent} percent overall`
    );

    if (isPotionTreasureId(treasureId) && completed < total) {
      marketFlavor.classList.remove("hidden");
    } else {
      marketFlavor.classList.add("hidden");
    }
  }

  function rerenderTree() {
    tree.replaceChildren();

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
      } else if (piece.type === "lifeskillCraft") {
        tree.appendChild(createLifeSkillCraftPiece(piece, treasureId, updateOverallUI));
      } else if (piece.type === "simple") {
        tree.appendChild(createSimplePiece(piece, treasureId, updateOverallUI));
      }
    });

    updateOverallUI();
  }

  toggleButton.addEventListener("click", () => {
    const isCurrentlyCollapsed = panel.classList.contains("collapsed");

    document.querySelectorAll(".treasure-panel").forEach((p) => {
      p.classList.add("collapsed");
      const button = p.querySelector(".panel-toggle-button");
      const panelTree = p.querySelector(".tree");
      if (button) button.setAttribute("aria-expanded", "false");
      if (panelTree) {
        panelTree.setAttribute("aria-hidden", "true");
        panelTree.inert = true;
      }
    });

    Object.keys(panelState).forEach((key) => {
      panelState[key] = false;
    });

    if (isCurrentlyCollapsed) {
      panel.classList.remove("collapsed");
      panelState[treasureId] = true;
      registerPanelVisual(panel);
    }

    syncPanelExpandedState();
    savePanelState(panelState);
  });

  resetButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const confirmed = window.confirm(`Reset all saved progress for ${treasureData.name}?`);
    if (!confirmed) return;

    if (!removeTreasureProgressStorage(treasureId)) return;
    treasureState[treasureId] = getDefaultTreasureData(treasureId);

    const freshPanel = createTreasurePanel(treasureId);
    panel.replaceWith(freshPanel);
    registerPanelVisual(freshPanel);
    refreshAtanisUI();
    showToast(`${treasureData.name} progress reset.`);

    const freshResetButton = freshPanel.querySelector(".reset-progress-btn");
    const fallbackFocus = freshPanel.querySelector(".panel-toggle-button");
    window.requestAnimationFrame(() => {
      (freshResetButton || fallbackFocus)?.focus();
    });
  });

  rerenderTree();
  syncPanelExpandedState();

  return panel;
}

function renderAllTreasures() {
  treasureGrid.replaceChildren();

  getTreasureIds().forEach((treasureId) => {
    treasureGrid.appendChild(createTreasurePanel(treasureId));
  });

  refreshAtanisUI();
  registerAllPanelVisuals();
}

let panelVisualObserver = null;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

function ensurePanelVisualObserver() {
  if (panelVisualObserver || !("IntersectionObserver" in window)) {
    return;
  }

  panelVisualObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("panel-visual-ready");
      panelVisualObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: "640px 0px"
  });
}

function registerPanelVisual(panel) {
  if (!panel) return;

  if (!("IntersectionObserver" in window)) {
    panel.classList.add("panel-visual-ready");
    return;
  }

  ensurePanelVisualObserver();

  if (!panel.dataset.panelVisualRegistered) {
    panelVisualObserver.observe(panel);
    panel.dataset.panelVisualRegistered = "true";
  }

  if (!panel.classList.contains("collapsed")) {
    panel.classList.add("panel-visual-ready");
  }
}

function registerAllPanelVisuals() {
  document.querySelectorAll(".treasure-panel").forEach((panel) => {
    registerPanelVisual(panel);
  });
}

function hideStartupLoader() {
  const loader = document.getElementById("startupLoader");
  document.body.classList.remove("is-loading");

  if (!loader) return;

  loader.classList.add("is-hidden");
  window.setTimeout(() => {
    loader.remove();
  }, 260);
}

function hasSeenVisualIntroThisSession() {
  return readStorageValue(sessionStorage, VISUAL_INTRO_SESSION_KEY) === "1";
}

function hasSeenVisualIntroRecently() {
  const stored = Number(readStorageValue(localStorage, VISUAL_INTRO_LOCAL_KEY));
  return Number.isFinite(stored) && (Date.now() - stored) < VISUAL_INTRO_RECENT_MS;
}

function markVisualIntroSeen() {
  writeStorageValue(sessionStorage, VISUAL_INTRO_SESSION_KEY, "1");
  writeStorageValue(localStorage, VISUAL_INTRO_LOCAL_KEY, String(Date.now()));
}

async function initializeVisualExperience() {
  const backgroundReady = preloadImage("images/background-main.webp");
  const seenThisSession = hasSeenVisualIntroThisSession();
  const seenRecently = hasSeenVisualIntroRecently();

  if (seenThisSession) {
    hideStartupLoader();
    await backgroundReady;
    document.body.classList.add("body-visual-ready");
    markVisualIntroSeen();
    return;
  }

  await Promise.allSettled([
    wait(seenRecently ? 180 : 520),
    backgroundReady
  ]);

  document.body.classList.add("body-visual-ready");
  hideStartupLoader();
  markVisualIntroSeen();
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".help")) {
    closeAllTooltips();
  }

  if (!event.target.closest(".combine-help-wrap") && !event.target.closest(".combine-dialog-card")) {
    closeAllCombineTooltips();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeAllCombineTooltips();
});

window.addEventListener("resize", () => {
  closeAllTooltips();
  closeAllCombineTooltips();
});

renderAllTreasures();
initializeVisualExperience();
