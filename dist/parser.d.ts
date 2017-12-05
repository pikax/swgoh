/// <reference types="cheerio" />
import { Collection, Guild, Mod, Profile, ShipCollection, CharacterStats, ShipStats } from "./interface";
export declare function parseCollection($: CheerioStatic): Collection;
export declare function parseProfile($: CheerioStatic): Profile;
export declare function parseGuild($: CheerioStatic): Guild;
export declare function parseShips($: CheerioStatic): ShipCollection;
export declare const parseModCollection: ($: CheerioStatic) => Mod[];
export declare const parseCharacterStats: ($: CheerioStatic) => CharacterStats[];
export declare const parseShipStats: ($: CheerioStatic) => ShipStats[];
export declare const parseUserToon: ($: CheerioStatic) => void;
