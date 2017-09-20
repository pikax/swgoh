/// <reference types="cheerio" />
import { Collection, Guild, Profile, ShipCollection } from "./interface";
export declare function parseCollection($: CheerioStatic): Collection;
export declare function parseProfile($: CheerioStatic): Profile;
export declare function parseGuild($: CheerioStatic): Guild;
export declare function parseShips($: CheerioStatic): ShipCollection;
