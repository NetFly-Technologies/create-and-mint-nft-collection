const BASEDIR = process.cwd();
const { FOLDERS } = require(`${BASEDIR}/constants/folders.js`);
const { MODE } = require(`${FOLDERS.constantsDir}/blend_mode.js`);
const { NETWORK } = require(`${FOLDERS.constantsDir}/network.js`);

const network = NETWORK.eth;

const solanaMetadata = {
  symbol: "STB",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "YOUR_WEBSITE_URL_HERE", // Add your website URL here. Ex. https://thepeanutgalleryandco.co.za/
  creators: [
    {
      address: "YOUR_WALLET_ADDRESS_HERE", // Add your owner wallet address here. Ex. 0x5cE5D823f4bD8Ec610868fBa65832B479152C7E1
      share: 100,
    },
  ],
};



const incompatibleTraits = {
  "Computer/Altair": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Amiga 1000": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Amiga 2000": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Apple II": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Apple Lisa": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Atari ST": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Broken": [
    "Wallpaper/*",
  ],
  "Computer/Franklin Ace 1200 PC": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/IBM PC": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/McIntosh Classic": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/TRS 80": [
    "Keyboard/*",
    "Wallpaper/*",
  ],
  "Computer/Bloom Dex": [
    "Keyboard/None",
    "Wallpaper/None",
  ],
  "Computer/CryptoCurrencies": [
    "Keyboard/None",
    "Wallpaper/None",
  ],
  "Computer/Golden": [
    "Keyboard/None",
    "Wallpaper/None",
  ],
  "Computer/Mac": [
    "Keyboard/None",
    "Wallpaper/None",
  ],
  "Computer/Neon": [
    "Keyboard/None",
    "Wallpaper/None",
  ],
  "Computer/White": [
    "Keyboard/None",
    "Wallpaper/None",
  ]
}

const incompatibleTraitsConfig = {
  "Computer/Altair":
      {
        shouldGenerateWithFallback: true
      },
  "Computer/Amiga 1000": {
    shouldGenerateWithFallback: true
  },
  "Computer/Amiga 2000": {
    shouldGenerateWithFallback: true
  },
  "Computer/Apple II": {
    shouldGenerateWithFallback: true
  },
  "Computer/Apple Lisa": {
    shouldGenerateWithFallback: true
  },
  "Computer/Atari ST": {
    shouldGenerateWithFallback: true
  },
  "Computer/Broken": {
    shouldGenerateWithFallback: true
  },
  "Computer/Franklin Ace 1200 PC": {
    shouldGenerateWithFallback: true
  },
  "Computer/IBM PC": {
    shouldGenerateWithFallback: true
  },
  "Computer/McIntosh Classic": {
    shouldGenerateWithFallback: true
  },
  "Computer/TRS 80": {
    shouldGenerateWithFallback: true
  },
  "Computer/Bloom Dex": {
    shouldGenerateWithFallback: false
  },
  "Computer/CryptoCurrencies": {
    shouldGenerateWithFallback: false
  },
  "Computer/Golden": {
    shouldGenerateWithFallback: false
  },
  "Computer/Mac": {
    shouldGenerateWithFallback: false
  },
  "Computer/Neon": {
    shouldGenerateWithFallback: false
  },
  "Computer/White": {
    shouldGenerateWithFallback: false
  },
}

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Background" },
      { name: "Desk" },
      { name: "Wallpaper" },
      { name: "Accessory" },
      { name: "Keyboard" },
      { name: "Mouse" },
      { name: "Computer" },
      { name: "GPU" },
    ],
    incompatibleTraits: incompatibleTraits,
    incompatibleTraitsConfig: incompatibleTraitsConfig,
    shouldGenerateWithIncompatibleTrait: true,
    incompatibleFallbackImage: "None"
  },
];


/* Example of configuration settings
const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    maxRepeatedTraits: 1,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color", maxRepeatedTrait: 2 },
      { name: "Iris" },
      { name: "Shine", layerItemsMaxRepeatedTrait: 4 },
      { name: "Bottom lid", maxRepeatedTrait: 3 },
      { name: "Top lid" },
    ],
    layerItemsMaxRepeatedTraits: [
      { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      "Eye color/Cyan": [
        "Eyeball/Red",
      ],
      "Iris/Large": [
        "Bottom lid/High",
        "Top lid/High"
      ],
    },
    dependentTraits: {
      "Eye color/Cyan": [
        "Eyeball/White",
      ],
      "Background/Blue": [
        "Eyeball/Red",
        "Top lid/low"
      ],
    }
  },
];
*/

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1100,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// These are additional items that will be added to each NFT. You can remove them or add new ones as well if needed.
// Uncomment the lines if you would like to use these and update the details.
const extraMetadata = {
  //creator: "NFT_CREATOR_HERE", // Add the creator of the NFT collection here. Ex. The Peanut Gallery And Co
  //external_url: "YOUR_WEBSITE_URL_HERE"  // Add your website URL here. This will be added to each of your NFTs. Ex. https://thepeanutgalleryandco.co.za/
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
