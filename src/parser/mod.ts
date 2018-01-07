import {ModCollection, ModPrimary, ModPrimaryValue, ModSlot, TranslatedModName, Mod} from "../interface";


export const parseModCollection = ($: CheerioStatic): ModCollection => {

  const m = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.mod-list > ul > li.media.list-group-item.p-a.collection-mod-list > div > div > div")
    .map(function (x) {
      const _$ = $(this);


      const tier = _$.find(".statmod-pip").length;
      const character = _$.find(".char-portrait-img").attr("alt");
      const level = _$.find(".statmod-level").text();

      const description = _$.find(".statmod-img").attr("alt");


      const mod = _$.find(".pc-statmod").first();

      /*
export enum ModSlot {
  Transmitter,
  Receiver,
  Processor,
  HoloArray,
  DataBus,
  Multiplexer
}*/
      let slot: ModSlot = mod.hasClass("pc-statmod-slot1") && ModSlot.Transmitter;
      slot = !slot && mod.hasClass("pc-statmod-slot2") && ModSlot.Receiver || slot;
      slot = !slot && mod.hasClass("pc-statmod-slot3") && ModSlot.Processor || slot;
      slot = !slot && mod.hasClass("pc-statmod-slot4") && ModSlot.HoloArray || slot;
      slot = !slot && mod.hasClass("pc-statmod-slot5") && ModSlot.DataBus || slot;
      slot = !slot && mod.hasClass("pc-statmod-slot6") && ModSlot.Multiplexer || slot;


      const primaryStat = _$.find(".statmod-stats-1");
      const secondaryStats = _$.find(".statmod-stats-2 > .statmod-stat");


      const primary: ModPrimaryValue = {
        type: primaryStat.find(".statmod-stat-label").text() as ModPrimary,
        value: primaryStat.find(".statmod-stat-value").text(),//.replace(/\+|%/g,''), // NOTE no need to use number
      };

      const secondary = secondaryStats.map(function (s) {
        const ss = $(this);
        return {
          type: ss.find(".statmod-stat-label").text(),
          value: ss.find(".statmod-stat-value").text(),//.replace(/\+|%/g,''), // NOTE no need to use number
        }
      }).get();


      return {
        character,
        tier,

        description,

        level,
        slot: TranslatedModName[slot],

        primary: primary,
        secondary,
      }

    }).get();

  return m as any;
};
