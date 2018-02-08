import { Collection, Guild, ModCollection, Profile, ShipCollection, SwgohggUnits } from "./interface";
import { ConcurrentQueue } from "./queue";
export declare class Swgoh {
    private _queue;
    constructor(_queue?: ConcurrentQueue);
    private getCheerio(uri);
    private validateRequest(request);
    login(username: string, password: string): Promise<boolean>;
    profile(username: string): Promise<Profile>;
    collection(username: string): Promise<Collection>;
    mods(username: string): Promise<ModCollection>;
    ship(username: string): Promise<ShipCollection>;
    guild(guildUrl: string): Promise<Guild>;
    guild(opts: {
        id: number;
        name: string;
    }): Promise<Guild>;
    units(guildUrl: string): Promise<SwgohggUnits>;
    units(opts: {
        id: number;
        name: string;
    }): Promise<SwgohggUnits>;
}
export declare const swgoh: Swgoh;
