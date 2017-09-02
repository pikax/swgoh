/// <reference types="request" />
import { RequiredUriUrl } from "request";
export interface QueueConfig {
    simultaneousRequests: number;
    maxQueueSize: number;
    safeQueueSize: number;
    tick: number;
}
export declare class ConcurrentQueue {
    private _config;
    private readonly _queue;
    constructor(_config?: QueueConfig);
    queue(uri: RequiredUriUrl): Promise<any>;
}
export declare function promiseSetTimeout(ms: number): Promise<any>;
