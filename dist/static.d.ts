import { CharacterStats, ShipStats } from "./interface";
export declare function getCharacters(cached?: boolean): Promise<CharacterStats[]>;
export declare function getShips(cached?: boolean): Promise<ShipStats[]>;
