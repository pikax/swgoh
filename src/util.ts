
export const fixNumber = (txt: string): number => txt && +txt.replace(/,/g, '') || null;
export const parsePercent100 = (txt: string): number => (+txt.replace("%", '')) / 100;


const swgohAsset = "https://swgoh.gg/static/img/assets/";
const githubAsset =  "https://raw.githubusercontent.com/pikax/swgoh/master/static/img/";

const assetLocation = process.env.SWGOH_ASSET_LOCATION || githubAsset;
export const assetUrl = process.env.USE_SWGOH_ASSET && swgohAsset || assetLocation;
