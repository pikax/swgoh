import {
  CharacterBaseAbilities, CharacterBaseDefensive, CharacterBaseGear, CharacterBaseOffensive, CharacterBaseStats,
  CharacterCoreStats,
  CharacterStats, IToonGeneral, IToonPhysicalOffence, IToonPhysicalSurvivability, IToonPower, IToonPrimaryAttributes,
  IToonPrimaryAttributesGrowth, IToonSpecialOffence, IToonSpecialSurvivability,
  IToonStats
} from "../interface";
import {fixNumber, parsePercent100} from "../util";

export const parseCharacterStats = ($: CheerioStatic): CharacterStats[] => {
  const c = $("#characters").find("tbody > tr")
    .map(function (x): CharacterStats {
      const _$ = $(this);

      const a = _$.find("td > a");

      const href = a.attr("href");

      const code = href.match(/(?:\/characters\/)([^\/]*)/)[1];
      const description = a.text();
      const tds = _$.find("td").get().slice(1).map((x: any) => x.lastChild.nodeValue);


      const core: CharacterCoreStats = {
        code,
        description
      };

      // base stats
      const base: CharacterBaseStats = {
        power: +tds[0],
        speed: +tds[1],
        health: fixNumber(tds[2]),
        maxAbility: tds[3] !== "None" ? +tds[3] : null,
      };
      const offensive: CharacterBaseOffensive = {
        physicalDmg: +tds[4],
        physicalCrit: +tds[5],
        specialDmg: +tds[6],
        specialCrit: +tds[7],
        armorPen: +tds[8],
        resistancePen: +tds[9],
        potency: +tds[10],
      };

      const defensive: CharacterBaseDefensive = {
        protection: fixNumber(tds[11]),
        armor: +tds[12],
        resistance: +tds[13],
        tenacity: parsePercent100(tds[14]),
        healthSteal: parsePercent100(tds[15]),
      };

      const gear: CharacterBaseGear = {
        tier: +tds[16],
        credits: fixNumber(tds[17]),
        raid: +tds[18],
        gold: +tds[19],
        purple: +tds[20],
        blue: +tds[21],
        green: +tds[22],
        white: +tds[23],
      };


      const abilities: CharacterBaseAbilities = {
        maxDamageAbility: tds[24] !== "None" ? +tds[24] : null,
        baseAbility: tds[25] !== "None" ? +tds[25] : null,
        aoeAbility: +tds[26],
      };

      return {
        ...core,
        ...base,
        ...offensive,
        ...defensive,
        ...gear,
        ...abilities
      } as CharacterStats
    });

  return c.get() as any as CharacterStats[];
};


export const parseToonStats = ($: CheerioStatic): IToonStats => {
  const $$ = $('div.content-container-primary-aside > ul > li span.pc-stat-value').get().map((x: any) => x.lastChild.nodeValue)

  const power: IToonPower = {
    power: +$$[0],
    statPower: +$$[1],
  };

  const primary: IToonPrimaryAttributes & IToonPrimaryAttributesGrowth = {
    str: +$$[2],
    agi: +$$[3],
    int: +$$[4],

    strGrowth: fixNumber($$[5]),
    agiGrowth: fixNumber($$[6]),
    intGrowth: fixNumber($$[7]),
  };


  const general: IToonGeneral = {
    health: +$$[8],
    protection: +$$[9],
    speed: +$$[10],
    criticalDamagePerc: parsePercent100($$[11]),
    potencyPerc: parsePercent100($$[12]),
    tenacityPerc: parsePercent100($$[13]),
    healthStealPerc: parsePercent100($$[14]),
  };


  const physicalOffense: IToonPhysicalOffence = {
    physicalDamage: +$$[15],
    physicalCriticalChancePerc: parsePercent100($$[16]),
    armorPenetration: +$$[17],
    physicalAccuracyPerc: parsePercent100($$[18]),
  };

  const physicalSurvivability: IToonPhysicalSurvivability = {
    armorPerc: parsePercent100($$[19]),
    dodgeChangePerc: parsePercent100($$[20]),
    physicalCriticalAvoidancePerc: parsePercent100($$[21]),
  };

  const specialOffense: IToonSpecialOffence = {
    specialDamage: +$$[22],
    specialCriticalChancePerc: parsePercent100($$[23]),
    resistancePenetration: +$$[24],
    specialAccuracyPerc: parsePercent100($$[25]),
  };

  const specialSurvivability: IToonSpecialSurvivability = {
    resistancePerc: parsePercent100($$[26]),
    deflectionChangePerc: parsePercent100($$[27]),
    specialCriticalAvoidancePerc: parsePercent100($$[28]),
  };



  return {
    ...power,

    primary,
    general,
    physicalOffense,
    physicalSurvivability,
    specialOffense,
    specialSurvivability
  };

};


export const parseUserToon = ($: CheerioStatic) => {

  //
  // const c = $("#characters").find("tbody > tr")
  //   .map(function (x): CharacterStats {
  //
  //
  //   });


  return null;


};




