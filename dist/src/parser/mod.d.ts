/// <reference types="cheerio" />
import { Mod } from "../interface";
export declare const parseModCollection: ($: CheerioStatic) => Mod[];
export declare const getModPages: ($: CheerioStatic) => number;
