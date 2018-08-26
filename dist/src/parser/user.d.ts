/// <reference types="cheerio" />
import { Collection, Profile } from "../interface";
export declare function parseCollection($: CheerioStatic): Collection;
export declare function parseCollectionPages($: CheerioStatic): number;
export declare function parseProfile($: CheerioStatic): Profile;
