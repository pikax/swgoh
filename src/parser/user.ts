import {Character, Collection, GearLevel, Guild, Profile, User, UserInfo, UserStats} from "../interface";
import * as path from 'path';
import {assetUrl} from "../util";


export function parseCollection($: CheerioStatic): Collection {
    return <any>$("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > div > div > div > div.player-char-portrait")
        .map(function (x) {
            const _$ = $(this);
            const p$ = _$.parent("div");

            const n$ = p$.find("div.collection-char-name");
            const na$ = n$.find("a");

            const a$ = _$.find("a");
            const i$ = a$.find("img");
            const gp$ = p$.find("div.collection-char-gp");
            const gp = gp$.attr("title").replace(/,/g, '').match(/\d+/g); // fix points


            const gl: number = a$.find("div.char-portrait-full-gear-level").text() as any;

            const imgsrc = i$.attr("data-src").slice(2);
            return <Character>{
                code: na$.attr("href").match(/(?:\/u\/.*collection\/)(.*)(?:\/)$/)[1],
                description: na$.text(),

                imageSrc: `${assetUrl}${path.basename(imgsrc)}`,

                star: 7 - a$.find("div.star-inactive").length,
                gearLevel: <GearLevel> (GearLevel[gl] as any), //todo fix this cast
                level: +(a$.find("div.char-portrait-full-level").text()),

                galacticPower: +gp[0],
                maxGalacticPower: +gp[1],
            }
        })
        .get();
}


export function parseCollectionPages($: CheerioStatic): number {
    const txt = $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > ul > li:nth-child(1) > a').text();
    if (!txt) {
        return 0;
    }

    const m = txt.match(/\d+$/);
    if (!m) {
        return 0;
    }

    debugger;
    return +m[0];
}

export function parseProfile($: CheerioStatic): Profile {
    return {...parseInfo($), ...parseStats($), ...parseUser($)} as Profile;

}


const parseUser = ($: CheerioStatic): User => {
    const b$ = $("body > div.container.p-t-md > div.content-container > div.content-container-aside > div.panel.panel-default.panel-profile.m-b-sm > div.panel-body");
    const username = b$.find("h5.panel-title").text();
    const panelMenus = b$.find("ul > li > h5").get().map((x: any) => +(x.lastChild || {}).nodeValue);
    const p = b$.find("p > strong").slice(1).get().map((x: any) => x.lastChild.nodeValue);

    const userInfo: {key: string, value: string}[] = b$.find("p")
        .map((i, x)=>({
            key: x.firstChild.nodeValue || '',
            value: x.children[1] && x.children[1].lastChild.nodeValue || null
        }))
        .toArray() as any;

    const g = b$.find("p > strong > a");
    const aGuild = g.text(); //get
    const aGuildUrl = g.attr("href");

    const lastUpdatedUTC = $('li > span.header-text > div > span').attr("data-datetime");
    const playername = $('h5.panel-title:nth-child(1) > a:nth-child(1)').text();


    const allyCode = userInfo.find(x=>x.key.startsWith("Ally Code"));
    const joined = userInfo.find(x=>x.key.startsWith("Joined"));


    return {
        username,
        playername,


        userId: panelMenus[0],
        arenaRank: panelMenus[1] || null,
        level: panelMenus[2],

        allyCode: allyCode && allyCode.value || null,
        joined: joined && joined.value || null,


        guild: aGuild,
        guildUrl: aGuildUrl,

        lastUpdatedUTC
    }

};

const parseStats = ($: CheerioStatic): UserStats => {
    const p = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li:nth-child(3) > div > div > ul > li > h5")
        .get().map((x: any) => +x.lastChild.nodeValue);


    return {
        collectionScore: p[0],
        characters: p[1],
        characters7: p[2],
        characters6: p[3],
        gearXII: p[4],
        gearXI: p[5],
        gearX: p[6],
        gearIX: p[7],
        gearVIII: p[8],
    }
};

const parseInfo = ($: CheerioStatic): UserInfo => {
    const p: number[] = $("body > div.container.p-t-md > div.content-container > div.content-container-aside > div:nth-child(4) > div > div > p > strong").get()
        .map((x: any) => +x.lastChild.nodeValue.replace(/,/g, ""));

    return {
        galacticPower: p[0],
        charactersGalacticPower: p[1],
        shipsGalacticPower: p[2],
        pVEBattlesWon: p[3],
        pVEHardBattlesWon: p[4],
        galacticWarBattlesWon: p[5],
        arenaBattlesWon: p[6],
        guildCurrencyEarned: p[7],
        raidsWon: p[8],
        shipBattlesWon: p[9],
    }

};