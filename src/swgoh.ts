import * as url from 'url';
import * as cheerio from 'cheerio'

import {Collection, Guild, Profile} from "./interface";
import {ConcurrentQueue} from "./queue";
import {parseCollection, parseGuild, parseProfile} from "./parser";


const swgohgg = "https://swgoh.gg";

export class Swgoh {

  constructor(private _queue = new ConcurrentQueue()){
  }

  private getCheerio(uri){
    return this._queue.queue(uri).then(x=>cheerio.load(x.body));
  }

  profile(username: string): Promise<Profile>{
    const uri = url.resolve(swgohgg, `/u/${username}/`);
    return this.getCheerio(uri).then(parseProfile);
  }

  collection(username: string): Promise<Collection>{
    const uri = url.resolve(swgohgg, `/u/${username}/collection`);
    return this.getCheerio(uri).then(parseCollection);
  }

  guild(guildUrl: string)
  guild(opts:{id:number, name:string})
  guild(opts: string| {id:number, name:string}): Promise<Guild>{
    let uri: string ;
    if(typeof opts === "string"){
      uri = url.resolve(swgohgg, opts);
    }
    else{
       uri = url.resolve(swgohgg, `/g/${opts.id}/${opts.name}`);
    }
    return this.getCheerio(uri).then(parseGuild);
  }
}

export const swgoh = new Swgoh();