
export const fixNumber = (txt: string): number => txt && +txt.replace(/,/g, '') || null;
export const parsePercent100 = (txt: string): number => (+txt.replace("%", '')) / 100;