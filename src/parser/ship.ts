import {
  CharacterCore, CharacterCoreStats, GearLevel, Ship, ShipBaseDefensive, ShipBaseOffensive, ShipBaseStats,
  ShipCollection, ShipStats,
  ShipType
} from "../interface";
import {fixNumber, parsePercent100} from "../util";




export function parseShips($: CheerioStatic): ShipCollection {
  return <any> $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > div > div > div')
    .map(function (x) {
      const _$ = $(this);
      const na$ = _$.find('div.collection-ship-name > a'); //name
      const m$ = _$.find(".collection-ship-main"); //main


      const ship$ = m$.find('div.collection-ship-primary > div > a');
      const crew$ = m$.find('div.collection-ship-secondary');


      const gp$ = crew$.find("div.collection-char-gp");
      const gpTitle = gp$.attr("title");
      const gp = gpTitle
        ? gpTitle.replace(/,/g, '').match(/\d+/g) // fix points
        : [undefined, undefined, undefined];

      const stars = ship$.find("div.ship-portrait-full-star-inactive").length;

      const img = ship$.find(".ship-portrait-full-frame-img").attr("src");

      // todo move to other place
      const crewMembers = crew$.find('.collection-ship-crew-member')
        .map(function (x) {
          const _$ = $(this);
          const na$ = _$.find(".char-portrait-full-link");

          const a$ = _$.find("a");
          const i$ = a$.find("img");

          const name = _$.find('.player-char-portrait').attr("title");


          const gl: number = a$.find("div.char-portrait-full-gear-level").text() as any;

          // NOTE if the user doesn't have that crew member unlocked it should skip it
          if (!na$.attr("href"))
            return;

          return <CharacterCore>{
            code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)collection\/)(.*)(?:\/)$/)[1],
            description: name,

            imageSrc: i$.attr("src").slice(2),

            star: 7 - a$.find("div.star-inactive").length,
            gearLevel: <GearLevel> (GearLevel[gl] as any), //todo fix this cast
            level: +(a$.find("div.char-portrait-full-level").text()),
          }
        })
        .get();


      const hasShip = na$.attr("href").startsWith('/u');

      return <Ship>{
        code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)ships\/)(.*)(?:\/)$/)[1],
        description: na$.text(),

        imageSrc: img === undefined ? ship$.find(".ship-portrait-frame-img").attr("src") : img,

        star: hasShip ? 7 - stars : 0,
        level: +ship$.find(".ship-portrait-full-frame-level").text(),


        crew: crewMembers as any,

        galacticPower: +gp[0],
        maxGalacticPower: +gp[1],
      }
    })
    .get();
}





export const parseShipStats = ($: CheerioStatic): ShipStats[] => {

  const c = $("#units").find("tbody > tr")
    .map(function (x): ShipStats {
      const _$ = $(this);

      const a = _$.find("td > a");
      const href = a.attr("href");

      const code = href.match(/(?:\/ships\/)([^\/]*)/)[1];
      const description = a.text();
      const tds = _$.find("td").get().slice(1).map((x: any) => (x.lastChild || {nodeValue: null}).nodeValue);

      const core: CharacterCoreStats = {
        code,
        description
      };

      // base stats
      const base: ShipBaseStats = {
        power: +tds[0],
        speed: +tds[1],
        health: fixNumber(tds[2]),
        protection: fixNumber(tds[8]),
      };

      const shipType: ShipType = {
        isCapital: base.health === null
      };


      const offensive: ShipBaseOffensive = {
        physicalDmg: +tds[3],
        physicalCrit: +tds[4],
        specialDmg: +tds[5],
        specialCrit: +tds[6],
        potency: +tds[7],
      };

      const defensive: ShipBaseDefensive = {
        armor: +tds[9],
        resistance: +tds[10],
        tenacity: parsePercent100(tds[11]),
      };


      return {
        ...core,
        ...shipType,
        ...base,
        ...offensive,
        ...defensive,
      } as ShipStats
    });

  return c.get() as any as ShipStats[];
};