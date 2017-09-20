import {
	Character, Collection, GearLevel, Guild, Profile, Ship, ShipCollection, User, UserInfo,
	UserStats
} from "./interface";


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
			const gp = gp$.attr("title").replace(",", "").match(/\d+/g); // fix points


			const gl: number = a$.find("div.char-portrait-full-gear-level").text() as any;

			return <Character>{
				code: na$.attr("href").match(/(?:\/u\/.*collection\/)(.*)(?:\/)$/)[1],
				description: na$.text(),

				imageSrc: i$.attr("src").slice(2),

				star: 7 - a$.find("div.star-inactive").length,
				gearLevel: <GearLevel> (GearLevel[gl] as any), //todo fix this cast
				level: +(a$.find("div.char-portrait-full-level").text()),

				galacticPower: +gp[0],
				maxGalacticPower: +gp[1],
			}
		})
		.get();
}

export function parseProfile($: CheerioStatic): Profile {
	return {...parseInfo($), ...parseStats($), ...parseUser($)};

}

export function parseGuild($: CheerioStatic): Guild {
	return <any>$("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-0.b-t-0 > div > table > tbody > tr > td > a")
		.map(function () {
			const _$ = $(this);
			const username = _$.attr("href").slice(3, -1);
			const description = _$.find("strong").text();
			return {username, description};
		}).get();
}


export function parseShips($: CheerioStatic): ShipCollection {
	return <any> $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > div > div > div')
		.map(function (x) {
			const _$ = $(this);
			const na$ =  _$.find('div.collection-ship-name > a'); //name

			const m$ = _$.find(".collection-ship-main"); //main


			const ship$ = m$.find('div.collection-ship-primary > div > a');
			const crew$ = m$.find('div.collection-ship-secundary');


			const stars = ship$.find("div.ship-portrait-full-star-inactive").length;

			const img = ship$.find(".ship-portrait-full-frame-img").attr("src")			;

			return <Ship>{
				code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)ships\/)(.*)(?:\/)$/)[1],
				description: na$.text(),

				imageSrc: img === undefined ? ship$.find(".ship-portrait-frame-img").attr("src") : img,

				star: stars ? 7 - stars : 0,
				level: +ship$.find(".ship-portrait-full-frame-level").text(),
				galacticPower: 0,


				crew: [],

				maxGalacticPower: 0,
			}
		})
		.get();
}


const parseUser = ($: CheerioStatic): User => {
	const b$ = $("body > div.container.p-t-md > div.content-container > div.content-container-aside > div.panel.panel-default.panel-profile.m-b-sm > div.panel-body");

	const name = b$.find("h5.panel-title").text();
	const panelMenus = b$.find("ul > li > h5").get().map((x: any) => +x.lastChild.nodeValue);
	const p = b$.find("p > strong").slice(1).get().map((x: any) => x.lastChild.nodeValue);

	const g = b$.find("p > strong > a");
	const aGuild = g.text(); //get
	const aGuildUrl = g.attr("href");


	return {
		username: name,

		userId: panelMenus[0],
		arenaRank: panelMenus[1],
		level: panelMenus[2],


		allyCode: p[0],
		joined: p[1],


		guild: aGuild,
		guildUrl: aGuildUrl

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
