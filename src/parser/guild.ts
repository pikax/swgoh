import { Guild, GuildInfo, GuildUser } from "../interface";
import * as path from 'path';
import { assetUrl, fixNumber } from "../util";



//TODO change to have information about guild

export function parseGuild($: CheerioStatic): Guild {
    return {
        ...parseGuildInfo($),
        users: parseUsers($),
    };
}



function parseUsers($: CheerioStatic): GuildUser[] {
    return $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-0.b-t-0 > div > table > tbody > tr")
        .map(function () {
            const _$: Cheerio = $(this);

            const a = _$.find('td > a');

            const username = a.attr("href").slice(3, -1);
            const description = a.find("strong").text();


            const tds = _$.find("td").slice(1).contents(); // skip a

            const galacticPower = +tds[0].nodeValue;
            const arenaRank = +tds[1].nodeValue || undefined;
            const arenaAverage = +tds[2].nodeValue;

            return {
                username,
                description,
                galacticPower,
                // collectionScore,
                arenaRank,
                arenaAverage
            };
        }).get() as any;

    // return {}
}

function parseGuildInfo($: CheerioStatic): GuildInfo {
    const imageSrc = $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > h1 > img').attr('src');
    const guildMembers = $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > h1 > small').text();

    const description = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > p > i").text();
    const name = $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > h1')
        .children()[1].next.nodeValue.trimLeft();

    const gp = $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > div:nth-child(4) > div:nth-child(1) > div > div.stat-item-value').text();
    const agp = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > div:nth-child(4) > div:nth-child(2) > div > div.stat-item-value").text();

    const rank = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > div:nth-child(5) > div:nth-child(1) > div > div.stat-item-value").text();

    const arank = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > div:nth-child(5) > div:nth-child(3) > div > div.stat-item-value").text();

    const raidPoints = +$("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > div:nth-child(5) > div:nth-child(2) > div > div.stat-item-value").text();

    const lp = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.list-group-item.p-a > div.media-heading.text-right > small > strong > span").attr("data-datetime");


    const galacticPower = fixNumber(gp);
    const averageGalacticPower = fixNumber(agp);
    const arenaRank = fixNumber(arank);


    const m = guildMembers.match(/\d+/g);

    const memberCount = +m[0];
    const profileCount = +m[1];

    const lastUpdated = new Date(lp);

    return {
        name,
        imageSrc,
        description,
        galacticPower,
        averageGalacticPower,

        rank,
        raidPoints,
        arenaRank,

        memberCount,
        profileCount,

        lastUpdated
    }
}