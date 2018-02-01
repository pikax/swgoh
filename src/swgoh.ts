import * as cheerio from 'cheerio'
import * as request from 'request';
import {RequiredUriUrl} from "request";
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
import {OptionsWithUri} from "request";


export class Swgoh {

    constructor(private _queue = new ConcurrentQueue()) {
    }

    private getCheerio(uri) {
        return this._queue.queue(uri)
            .then(this.validateRequest)
            .then(x => cheerio.load(x.body));
    }

    private validateRequest(request: { body: string }) {
        if (request.body.indexOf("<title>Login &middot; SWGOH.GG</title>") >= 0) {
            throw new Error('Login is required');
        }

        return request;
    }

    async login(username: string, password: string): Promise<boolean> {
        // see https://github.com/bahmutov/csrf-login/blob/master/src/csrf-login.js to fix this
        const uri = url.resolve(swgohgg, "/accounts/login/");
        const jar = request.jar();
        const host = "swgoh.gg";

        request.defaults({
            jar: jar,
            // baseUrl: host
        });


        const $login = await this._queue.queue({uri, jar} as any).then(x => cheerio.load(x.body));

        const csrfmiddlewaretoken = $login("input[name=csrfmiddlewaretoken]").attr("value");

        const csrf = csrfmiddlewaretoken;

        const csrfName = "csrfmiddlewaretoken";

        const form = {
            username,
            password,
            csrfmiddlewaretoken,
        };


        console.log(csrfmiddlewaretoken);

        const r: OptionsWithUri = {
            uri,
            form,
            method: "POST",
            jar,

            followAllRedirects: true,
            headers: {
                referer: host
            }
        };

        jar.setCookie(request.cookie('csrftoken=' + csrf), uri);

        console.log(jar.getCookieString(uri));

        console.log(r)
        const html = await this._queue.queue(r as any).then(x => x.body as string);
        console.log('html:' + html)

        //todo change to regex expression with word probalby
        return html.indexOf(username) >= 0;
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
