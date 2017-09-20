import { Collection, Profile, ShipCollection } from "./interface";
import { ConcurrentQueue } from "./queue";
export declare class Swgoh {
    private _queue;
    constructor(_queue?: ConcurrentQueue);
    private getCheerio(uri);
    profile(username: string): Promise<Profile>;
    collection(username: string): Promise<Collection>;
    ship(username: string): Promise<ShipCollection>;
    guild(guildUrl: string): any;
    guild(opts: {
        id: number;
        name: string;
    }): any;
}
export declare const swgoh: Swgoh;
