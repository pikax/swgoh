import * as cheerio from 'cheerio'
import * as request from 'request';
import {RequiredUriUrl} from "request";
import * as url from 'url';
import {
    Collection, Guild, ModCollection, Profile, ShipCollection, SwgohggUnits
} from "./interface";
import {
    parseCollection, getModPages, parseGuild, parseModCollection, parseProfile, parseShips
} from "./parser/index";

import {ConcurrentQueue} from "./queue";
import {isNumber} from "util";
import {swgohgg} from "./config";
import {OptionsWithUri} from "request";
import {defaults, jar} from "request";
import {parseCollectionPages} from "./parser/user";


const swgohJar = jar();
defaults({
    jar: swgohJar
});


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


    //based on https://github.com/bahmutov/csrf-login/blob/master/src/csrf-login.js
    async login(username: string, password: string): Promise<boolean> {
        const uri = url.resolve(swgohgg, "/accounts/login/");
        const jar = request.jar();
        const host = "swgoh.gg";

        //TODO some cleaning

        const $login = await this._queue.queue({uri, jar} as any).then(x => cheerio.load(x.body));
        const csrfmiddlewaretoken = $login("input[name=csrfmiddlewaretoken]").attr("value");

        const csrf = csrfmiddlewaretoken;
        const form = {
            username,
            password,
            csrfmiddlewaretoken,
        };


        // console.log(csrfmiddlewaretoken);

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

        // console.log(jar.getCookieString(uri));

        // console.log(r)
        const html = await this._queue.queue(r as any).then(x => x.body as string);
        // console.log('html:' + html)

        //todo change to regex expression with word probably
        return html.indexOf(username) >= 0;
    }

    // NOTE swgoh.gg changed the default to be ally code
    profile(username: string): Promise<Profile> {
        const uri = url.resolve(swgohgg, `/u/${username}/`);
        return this.getCheerio(uri).then(parseProfile);
    }

    profileAlly(allyCode: string): Promise<Profile> {
        const uri = url.resolve(swgohgg, `/p/${allyCode}/`);
        return this.getCheerio(uri).then(parseProfile);
    }

    
    async collection(username: string): Promise<Collection> {
        const uri = url.resolve(swgohgg, `/u/${username}/characters/`);
        const $ = await this.getCheerio(uri);

        const pages = parseCollectionPages($);

        const promises = [Promise.resolve(parseCollection($))];
        for (let i = 2; i <= pages; i++) {
            promises.push(this.getCheerio(url.resolve(uri, "?page=" + i)).then(parseCollection));
        }

        const collections: Collection[] = await Promise.all(promises)

        return collections.reduce((v, c)=>{
            c.push(...v);
            return c;
        }, []);
    }

    async collectionAlly(allyCode: string): Promise<Collection> {
        const uri = url.resolve(swgohgg, `/p/${allyCode}/characters/`);
        const $ = await this.getCheerio(uri);

        const pages = parseCollectionPages($);

        const promises = [Promise.resolve(parseCollection($))];
        for (let i = 2; i <= pages; i++) {
            promises.push(this.getCheerio(url.resolve(uri, "?page=" + i)).then(parseCollection));
        }

        const collections: Collection[] = await Promise.all(promises)

        return collections.reduce((v, c)=>{
            c.push(...v);
            return c;
        }, []);
    }
    async mods(username: string): Promise<ModCollection> {
        const modsUri = `/u/${username}/mods/`;

        const uri = url.resolve(swgohgg, modsUri);

        const $: CheerioStatic = await this.getCheerio(uri);

        const modsPage = getModPages($) - 1;

        const promises = Array.from({length: modsPage},
            (k, i) => i + 2)
            .map(x => this.getCheerio(uri + `?page=${x}`)
                .then(x => parseModCollection(x))
            );


        const pMods: ModCollection[] = await Promise.all([
            ...promises,
        ]);

        pMods.unshift(parseModCollection($)); //insert at the beginning
        return [].concat.apply([], pMods); //flat
    }

    async modsAlly(allyCode: string): Promise<ModCollection> {
        const modsUri = `/p/${allyCode}/mods/`;

        const uri = url.resolve(swgohgg, modsUri);

        const $: CheerioStatic = await this.getCheerio(uri);

        const modsPage = getModPages($) - 1;

        const promises = Array.from({length: modsPage},
            (k, i) => i + 2)
            .map(x => this.getCheerio(uri + `?page=${x}`)
                .then(x => parseModCollection(x))
            );


        const pMods: ModCollection[] = await Promise.all([
            ...promises,
        ]);

        pMods.unshift(parseModCollection($)); //insert at the beginning
        return [].concat.apply([], pMods); //flat
    }

    ship(username: string): Promise<ShipCollection> {
        const uri = url.resolve(swgohgg, `/u/${username}/ships/`);
        return this.getCheerio(uri).then(parseShips);
    }
    
    shipAlly(allyCode: string): Promise<ShipCollection> {
        const uri = url.resolve(swgohgg, `/p/${allyCode}/ships/`);
        return this.getCheerio(uri).then(parseShips);
    }

    //guildUrl like '/g/232/requiem/'
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
