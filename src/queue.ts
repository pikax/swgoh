const requestretry = require("requestretry");
import {RequiredUriUrl, UriOptions} from "request";

const Queue = require("promise-queue") as Queue;
interface Queue {
  new (maxConcurrent: number, maxQueued?: number): Queue;

  add<T>(generator: () => Promise<T>): Promise<T>;

  getQueueLength(): number;

  getPendingLength(): number;
}
const TICK = 33;


export interface QueueConfig{
  simultaneousRequests: number;
  maxQueueSize: number; // after hitting this size the queue will wait until promise level go as much as safeQueueSize
  safeQueueSize: number; //

  tick: number;
}

const config : QueueConfig = {
  simultaneousRequests: 10,
  safeQueueSize: 5,
  maxQueueSize: 50,
  tick: 33
};

export class ConcurrentQueue {
  private readonly _queue: Queue;

  constructor(private _config: QueueConfig = config) {
    this._queue = new Queue(30);
  }

  async queue(uri: RequiredUriUrl|string): Promise<any> {
    if (this._queue.getQueueLength() > this._config.maxQueueSize) {
      while (this._queue.getQueueLength() < this._config.safeQueueSize) {
        await promiseSetTimeout(TICK);
      }
    }

    return this._queue.add(() => requestretry(uri));
  }

}


export function promiseSetTimeout(ms: number): Promise<any> {
  return new Promise((resolve => setTimeout(resolve, ms)));
}