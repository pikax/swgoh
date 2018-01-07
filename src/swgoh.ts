import * as cheerio from 'cheerio'
import * as url from 'url';
import {
  Collection, Guild, ModCollection, Profile, ShipCollection, SwgohggUnits
} from "./interface";
import {
  parseCollection, parseGuild, parseModCollection, parseProfile, parseShips
} from "./parser";

import {ConcurrentQueue} from "./queue";
import {isNumber} from "util";
import {swgohgg} from "./config";


export class Swgoh {

  constructor(private _queue = new ConcurrentQueue()) {
  }

  private getCheerio(uri) {
    return this._queue.queue(uri).then(x => cheerio.load(x.body));
  }

  profile(username: string): Promise<Profile> {
    const uri = url.resolve(swgohgg, `/u/${username}/`);
    return this.getCheerio(uri).then(parseProfile);
  }

  collection(username: string): Promise<Collection> {
    const uri = url.resolve(swgohgg, `/u/${username}/collection/`);
    return this.getCheerio(uri).then(parseCollection);
  }

  async mods(username: string): Promise<ModCollection> {
    const modsUri = `/u/${username}/mods/`;
    let mods = [];
    let done = false;

    let uri = url.resolve(swgohgg, modsUri);
    do {
      const $: CheerioStatic = await this.getCheerio(uri);
      mods = mods.concat(await parseModCollection($));

      const href = $("li.media.list-group-item.p-a.collection-mod-list a").last().attr("href");

      if (href.startsWith(modsUri)) {
        uri = url.resolve(uri, href);
      } else {
        done = true;
      }
    } while (!done);

    return mods;
  }

  ship(username: string): Promise<ShipCollection> {
    const uri = url.resolve(swgohgg, `/u/${username}/ships/`);
    return this.getCheerio(uri).then(parseShips);
  }

  guild(guildUrl: string): Promise<Guild>
  guild(opts: { id: number, name: string }): Promise<Guild>
  guild(opts: string | { id: number, name: string }): Promise<Guild> {
    let uri: string;
    if (typeof opts === "string") {
      const m = opts.match(/\d+/);
      if (!m) {
        throw new Error(`Error: "${opts}" is not a valid guild url`);
      }
      uri = url.resolve(swgohgg, opts);
    }
    else {
      const id = opts.id;
      if (isNaN(id) || !isNumber(id)) {
        throw new Error(`Error: Unable to parse guild id from "${opts}"`);
      }
      const name = opts.name;
      if (!name || name === '') {
        throw new Error(`Error: Unable to parse guild name from "${opts}"`);
      }
      uri = url.resolve(swgohgg, `/g/${id}/${name}/`);
    }
    return this.getCheerio(uri).then(parseGuild);
  }

  units(guildUrl: string): Promise<SwgohggUnits>
  units(opts: { id: number, name: string }): Promise<SwgohggUnits>
  units(opts: string | { id: number, name: string }): Promise<SwgohggUnits> {
    let id: number;
    if (typeof opts === "string") {
      const m = opts.match(/\d+/);
      if (!m) {
        throw new Error(`Error: "${opts}" is not a valid guild url`);
      }
      id = +m[0];
    }
    else {
      id = opts.id;
    }

    if (isNaN(id) || !isNumber(id)) {
      throw new Error(`Error: Unable to parse guild id from url "${opts}"`);
    }

    const uri = url.resolve(swgohgg, `/api/guilds/${id}/units/`);
    return this._queue.queue(uri).then(x => x.body);
  }
}

export const swgoh = new Swgoh();