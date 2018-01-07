/// <reference types="cheerio" />
import { Collection, Guild, Profile } from "../interface";
export declare function parseCollection($: CheerioStatic): Collection;
export declare function parseProfile($: CheerioStatic): Profile;
export declare function parseGuild($: CheerioStatic): Guild;
