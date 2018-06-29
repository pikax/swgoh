//updated 02-12-2017

import {Collection, Profile, ShipCollection, IToonStats} from "../../src/interface";


export const pikax = {
  galacticPower: 1806596,
  charactersGalacticPower: 1154876,
  shipsGalacticPower: 651720,
  pVEBattlesWon: 46785,
  pVEHardBattlesWon: 11510,
  galacticWarBattlesWon: 4248,
  arenaBattlesWon: 1706,
  guildCurrencyEarned: 317582,
  raidsWon: 258,
  shipBattlesWon: 191,
  collectionScore: 44.77,
  characters: 132,
  characters7: 78,
  characters6: 8,
  gearXII: 2,
  gearXI: 14,
  gearX: 6,
  gearIX: 6,
  gearVIII: 39,
  username: 'pikax',
  playername: 'pikax',
  userId: 17421,
  arenaRank: 87,
  level: 85,
  allyCode: '495-616-697',
  joined: 'Aug 09, 2016',
  guild: 'Requiem',
  guildUrl: '/g/232/requiem/'
};

export const guildUrl = {
  uri: pikax.guildUrl,
  opts: {id: 232, name: "requiem"},
  invalid: "pikax",
};


export const darthMaul: IToonStats = {
  power: 19509,
  statPower: 9278,

  primary: {
    str: 880,
    agi:1018,
    int: 474,

    strGrowth: 5.5,
    agiGrowth:8.3,
    intGrowth: 4.6
  },

  general: {
    health: 22078,
    protection: 13719,
    speed: 207,
    criticalDamagePerc: 1.5,
    potencyPerc: 0.1223,
    tenacityPerc: 0.5656,
    healthStealPerc: 0.2,
  },

  physicalOffense: {
    physicalDamage: 2953,
    physicalCriticalChancePerc: 0.5549,
    armorPenetration: 89,
    physicalAccuracyPerc: 0,
  },

  physicalSurvivability: {
    armorPerc: 0.3418,
    dodgeChangePerc: 0.02,
    physicalCriticalAvoidancePerc: 0,
  },

  specialOffense: {
    specialDamage: 1229,
    specialCriticalChancePerc: 0.1666,
    resistancePenetration: 0,
    specialAccuracyPerc: 0,
    },

  specialSurvivability: {
    resistancePerc: 0.1853,
    deflectionChangePerc: 0.02,
    specialCriticalAvoidancePerc: 0,
  },
};


export const collection: Collection = [{
  "code": "darth-maul",
  "description": "Darth Maul",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_maul.png",
  "star": 7,
  "gearLevel": 12,
  "level": 85,
  "galacticPower": 19509,
  "maxGalacticPower": 19929
}, {
  "code": "r2-d2",
  "description": "R2-D2",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_astromech_r2d2.png",
  "star": 7,
  "gearLevel": 12,
  "level": 85,
  "galacticPower": 19393,
  "maxGalacticPower": 22909
}, {
  "code": "darth-nihilus",
  "description": "Darth Nihilus",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nihilus.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 19147,
  "maxGalacticPower": 22909
}, {
  "code": "savage-opress",
  "description": "Savage Opress",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_savageopress.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 18903,
  "maxGalacticPower": 19929
}, {
  "code": "han-solo",
  "description": "Han Solo",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_han.png",
  "star": 7,
  "gearLevel": 10,
  "level": 85,
  "galacticPower": 17449,
  "maxGalacticPower": 19929
}, {
  "code": "darth-vader",
  "description": "Darth Vader",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_vader.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 16695,
  "maxGalacticPower": 19929
}, {
  "code": "emperor-palpatine",
  "description": "Emperor Palpatine",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_palpatineemperor.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 16675,
  "maxGalacticPower": 18097
}, {
  "code": "grand-moff-tarkin",
  "description": "Grand Moff Tarkin",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tarkinadmiral.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 16609,
  "maxGalacticPower": 22909
}, {
  "code": "stormtrooper-han",
  "description": "Stormtrooper Han",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperstorm_han.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 16419,
  "maxGalacticPower": 19719
}, {
  "code": "ct-7567-rex",
  "description": "CT-7567 \"Rex\"",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclone_rex.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 16216,
  "maxGalacticPower": 17523
}, {
  "code": "wedge-antilles",
  "description": "Wedge Antilles",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebelpilot_wedge.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 15789,
  "maxGalacticPower": 17523
}, {
  "code": "lando-calrissian",
  "description": "Lando Calrissian",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_landobespin.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 15747,
  "maxGalacticPower": 17313
}, {
  "code": "qui-gon-jinn",
  "description": "Qui-Gon Jinn",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_quigon.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 15657,
  "maxGalacticPower": 19929
}, {
  "code": "finn",
  "description": "Finn",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_finnjakku.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 15408,
  "maxGalacticPower": 19929
}, {
  "code": "royal-guard",
  "description": "Royal Guard",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_royalguard.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 15328,
  "maxGalacticPower": 16948
}, {
  "code": "rey-scavenger",
  "description": "Rey (Scavenger)",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_reyjakku.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 15205,
  "maxGalacticPower": 19929
}, {
  "code": "tie-fighter-pilot",
  "description": "TIE Fighter Pilot",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tiepilot.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 15139,
  "maxGalacticPower": 16948
}, {
  "code": "biggs-darklighter",
  "description": "Biggs Darklighter",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebelpilot_biggs.png",
  "star": 7,
  "gearLevel": 11,
  "level": 85,
  "galacticPower": 14980,
  "maxGalacticPower": 16948
}, {
  "code": "count-dooku",
  "description": "Count Dooku",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_dooku.png",
  "star": 7,
  "gearLevel": 10,
  "level": 85,
  "galacticPower": 14794,
  "maxGalacticPower": 19929
}, {
  "code": "ezra-bridger",
  "description": "Ezra Bridger",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ezra_s3.png",
  "star": 7,
  "gearLevel": 10,
  "level": 85,
  "galacticPower": 14751,
  "maxGalacticPower": 19929
}, {
  "code": "luminara-unduli",
  "description": "Luminara Unduli",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_luminara.png",
  "star": 7,
  "gearLevel": 10,
  "level": 85,
  "galacticPower": 14544,
  "maxGalacticPower": 19929
}, {
  "code": "teebo",
  "description": "Teebo",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_teebo.png",
  "star": 7,
  "gearLevel": 10,
  "level": 85,
  "galacticPower": 14281,
  "maxGalacticPower": 17733
}, {
  "code": "dathcha",
  "description": "Dathcha",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jawa_dathcha.png",
  "star": 7,
  "gearLevel": 10,
  "level": 85,
  "galacticPower": 13764,
  "maxGalacticPower": 17523
}, {
  "code": "baze-malbus",
  "description": "Baze Malbus",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bazemalbus.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 13737,
  "maxGalacticPower": 18097
}, {
  "code": "boba-fett",
  "description": "Boba Fett",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bobafett.png",
  "star": 7,
  "gearLevel": 9,
  "level": 85,
  "galacticPower": 13710,
  "maxGalacticPower": 20713
}, {
  "code": "captain-phasma",
  "description": "Captain Phasma",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_phasma.png",
  "star": 7,
  "gearLevel": 9,
  "level": 85,
  "galacticPower": 13429,
  "maxGalacticPower": 19929
}, {
  "code": "ig-88",
  "description": "IG-88",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ig88.png",
  "star": 7,
  "gearLevel": 9,
  "level": 85,
  "galacticPower": 13420,
  "maxGalacticPower": 17523
}, {
  "code": "hera-syndulla",
  "description": "Hera Syndulla",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_hera_s3.png",
  "star": 7,
  "gearLevel": 9,
  "level": 85,
  "galacticPower": 13315,
  "maxGalacticPower": 19929
}, {
  "code": "chirrut-imwe",
  "description": "Chirrut Îmwe",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_chirrut.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 13209,
  "maxGalacticPower": 18097
}, {
  "code": "poe-dameron",
  "description": "Poe Dameron",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_poe.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 13188,
  "maxGalacticPower": 17523
}, {
  "code": "grand-admiral-thrawn",
  "description": "Grand Admiral Thrawn",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_thrawn.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 13039,
  "maxGalacticPower": 22909
}, {
  "code": "princess-leia",
  "description": "Princess Leia",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_leia_princess.png",
  "star": 7,
  "gearLevel": 9,
  "level": 85,
  "galacticPower": 13009,
  "maxGalacticPower": 19929
}, {
  "code": "asajj-ventress",
  "description": "Asajj Ventress",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ventress.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12946,
  "maxGalacticPower": 22909
}, {
  "code": "admiral-ackbar",
  "description": "Admiral Ackbar",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ackbaradmiral.png",
  "star": 7,
  "gearLevel": 9,
  "level": 85,
  "galacticPower": 12822,
  "maxGalacticPower": 17523
}, {
  "code": "darth-sidious",
  "description": "Darth Sidious",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_sidious.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12795,
  "maxGalacticPower": 19929
}, {
  "code": "ewok-elder",
  "description": "Ewok Elder",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_chief.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12735,
  "maxGalacticPower": 16948
}, {
  "code": "chief-chirpa",
  "description": "Chief Chirpa",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_chirpa.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12589,
  "maxGalacticPower": 19929
}, {
  "code": "hk-47",
  "description": "HK-47",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_hk47.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12586,
  "maxGalacticPower": 17523
}, {
  "code": "jyn-erso",
  "description": "Jyn Erso",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jyn.png",
  "star": 7,
  "gearLevel": 7,
  "level": 85,
  "galacticPower": 12498,
  "maxGalacticPower": 22909
}, {
  "code": "jedi-knight-anakin",
  "description": "Jedi Knight Anakin",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_anakinknight.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12465,
  "maxGalacticPower": 17523
}, {
  "code": "grand-master-yoda",
  "description": "Grand Master Yoda",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_yodagrandmaster.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12409,
  "maxGalacticPower": 22909
}, {
  "code": "sabine-wren",
  "description": "Sabine Wren",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_sabine_s3.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12391,
  "maxGalacticPower": 19929
}, {
  "code": "kanan-jarrus",
  "description": "Kanan Jarrus",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kanan_s3.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12343,
  "maxGalacticPower": 19929
}, {
  "code": "luke-skywalker-farmboy",
  "description": "Luke Skywalker (Farmboy)",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_luke_ep4.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12267,
  "maxGalacticPower": 22125
}, {
  "code": "captain-han-solo",
  "description": "Captain Han Solo",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_hoth_han.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12222,
  "maxGalacticPower": 19929
}, {
  "code": "jawa-engineer",
  "description": "Jawa Engineer",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jawa_engineer.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12045,
  "maxGalacticPower": 17523
}, {
  "code": "ewok-scout",
  "description": "Ewok Scout",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_scout.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 12012,
  "maxGalacticPower": 16948
}, {
  "code": "garazeb-zeb-orrelios",
  "description": "Garazeb \"Zeb\" Orrelios",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_zeb_s3.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11928,
  "maxGalacticPower": 19929
}, {
  "code": "resistance-trooper",
  "description": "Resistance Trooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_resistancetrooper.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11920,
  "maxGalacticPower": 16738
}, {
  "code": "chief-nebit",
  "description": "Chief Nebit",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jawa_nebit.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11851,
  "maxGalacticPower": 17523
}, {
  "code": "k-2so",
  "description": "K-2SO",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_k2so.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11835,
  "maxGalacticPower": 19929
}, {
  "code": "ct-5555-fives",
  "description": "CT-5555 \"Fives\"",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclone_fives.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11802,
  "maxGalacticPower": 19929
}, {
  "code": "ig-86-sentinel-droid",
  "description": "IG-86 Sentinel Droid",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ig86.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11769,
  "maxGalacticPower": 16948
}, {
  "code": "death-trooper",
  "description": "Death Trooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperdeath.png",
  "star": 7,
  "gearLevel": 7,
  "level": 85,
  "galacticPower": 11754,
  "maxGalacticPower": 19929
}, {
  "code": "resistance-pilot",
  "description": "Resistance Pilot",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_resistancepilot.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11559,
  "maxGalacticPower": 16738
}, {
  "code": "chopper",
  "description": "Chopper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_chopper.png",
  "star": 7,
  "gearLevel": 7,
  "level": 85,
  "galacticPower": 11544,
  "maxGalacticPower": 17733
}, {
  "code": "sun-fac",
  "description": "Sun Fac",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_sunfac.png",
  "star": 7,
  "gearLevel": 7,
  "level": 85,
  "galacticPower": 11490,
  "maxGalacticPower": 17523
}, {
  "code": "mace-windu",
  "description": "Mace Windu",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_macewindu.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 11479,
  "maxGalacticPower": 17523
}, {
  "code": "dengar",
  "description": "Dengar",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_dengar.png",
  "star": 7,
  "gearLevel": 8,
  "level": 76,
  "galacticPower": 11203,
  "maxGalacticPower": 17523
}, {
  "code": "ahsoka-tano",
  "description": "Ahsoka Tano",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ahsoka.png",
  "star": 7,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 10762,
  "maxGalacticPower": 17523
}, {
  "code": "kylo-ren",
  "description": "Kylo Ren",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kyloren.png",
  "star": 7,
  "gearLevel": 8,
  "level": 70,
  "galacticPower": 10611,
  "maxGalacticPower": 19929
}, {
  "code": "obi-wan-kenobi-old-ben",
  "description": "Obi-Wan Kenobi (Old Ben)",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_obiwanep4.png",
  "star": 7,
  "gearLevel": 8,
  "level": 70,
  "galacticPower": 10599,
  "maxGalacticPower": 22909
}, {
  "code": "first-order-tie-pilot",
  "description": "First Order TIE Pilot",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstordertiepilot.png",
  "star": 7,
  "gearLevel": 8,
  "level": 70,
  "galacticPower": 10158,
  "maxGalacticPower": 19144
}, {
  "code": "rebel-officer-leia-organa",
  "description": "Rebel Officer Leia Organa",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_leiahoth.png",
  "star": 6,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 10105,
  "maxGalacticPower": 19929
}, {
  "code": "director-krennic",
  "description": "Director Krennic",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_krennic.png",
  "star": 6,
  "gearLevel": 7,
  "level": 85,
  "galacticPower": 9631,
  "maxGalacticPower": 20503
}, {
  "code": "first-order-officer",
  "description": "First Order Officer",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstorderofficer.png",
  "star": 7,
  "gearLevel": 7,
  "level": 70,
  "galacticPower": 9615,
  "maxGalacticPower": 16948
}, {
  "code": "first-order-stormtrooper",
  "description": "First Order Stormtrooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstordertrooper.png",
  "star": 7,
  "gearLevel": 8,
  "level": 70,
  "galacticPower": 9550,
  "maxGalacticPower": 19144
}, {
  "code": "cassian-andor",
  "description": "Cassian Andor",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_cassian.png",
  "star": 7,
  "gearLevel": 7,
  "level": 65,
  "galacticPower": 9187,
  "maxGalacticPower": 19929
}, {
  "code": "talia",
  "description": "Talia",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nightsister_talia.png",
  "star": 7,
  "gearLevel": 7,
  "level": 70,
  "galacticPower": 9181,
  "maxGalacticPower": 17523
}, {
  "code": "hoth-rebel-scout",
  "description": "Hoth Rebel Scout",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebelhothscout.png",
  "star": 7,
  "gearLevel": 7,
  "level": 65,
  "galacticPower": 8881,
  "maxGalacticPower": 16948
}, {
  "code": "hoth-rebel-soldier",
  "description": "Hoth Rebel Soldier",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebelhoth.png",
  "star": 7,
  "gearLevel": 7,
  "level": 65,
  "galacticPower": 8881,
  "maxGalacticPower": 16948
}, {
  "code": "shoretrooper",
  "description": "Shoretrooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_troopershore.png",
  "star": 5,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 8811,
  "maxGalacticPower": 16948
}, {
  "code": "wicket",
  "description": "Wicket",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_wicket.png",
  "star": 4,
  "gearLevel": 8,
  "level": 85,
  "galacticPower": 8734,
  "maxGalacticPower": 19929
}, {
  "code": "jawa-scavenger",
  "description": "Jawa Scavenger",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jawa_scavenger.png",
  "star": 7,
  "gearLevel": 7,
  "level": 70,
  "galacticPower": 8554,
  "maxGalacticPower": 17523
}, {
  "code": "jawa",
  "description": "Jawa",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jawa_jawa.png",
  "star": 6,
  "gearLevel": 8,
  "level": 74,
  "galacticPower": 8547,
  "maxGalacticPower": 16948
}, {
  "code": "bodhi-rook",
  "description": "Bodhi Rook",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bodhi.png",
  "star": 7,
  "gearLevel": 7,
  "level": 52,
  "galacticPower": 8320,
  "maxGalacticPower": 19929
}, {
  "code": "old-daka",
  "description": "Old Daka",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_daka.png",
  "star": 7,
  "gearLevel": 6,
  "level": 70,
  "galacticPower": 7731,
  "maxGalacticPower": 19929
}, {
  "code": "barriss-offee",
  "description": "Barriss Offee",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_barriss_light.png",
  "star": 6,
  "gearLevel": 8,
  "level": 63,
  "galacticPower": 7452,
  "maxGalacticPower": 19929
}, {
  "code": "cc-2224-cody",
  "description": "CC-2224 \"Cody\"",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclone_cody.png",
  "star": 7,
  "gearLevel": 7,
  "level": 51,
  "galacticPower": 7362,
  "maxGalacticPower": 19929
}, {
  "code": "pao",
  "description": "Pao",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_pao.png",
  "star": 7,
  "gearLevel": 6,
  "level": 53,
  "galacticPower": 7092,
  "maxGalacticPower": 19929
}, {
  "code": "general-veers",
  "description": "General Veers",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_veers.png",
  "star": 4,
  "gearLevel": 8,
  "level": 70,
  "galacticPower": 7090,
  "maxGalacticPower": 19929
}, {
  "code": "b2-super-battle-droid",
  "description": "B2 Super Battle Droid",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_b2.png",
  "star": 5,
  "gearLevel": 7,
  "level": 85,
  "galacticPower": 6996,
  "maxGalacticPower": 16948
}, {
  "code": "jedi-consular",
  "description": "Jedi Consular",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jedi_consular_03.png",
  "star": 6,
  "gearLevel": 8,
  "level": 54,
  "galacticPower": 6331,
  "maxGalacticPower": 16948
}, {
  "code": "bistan",
  "description": "Bistan",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bistan.png",
  "star": 7,
  "gearLevel": 4,
  "level": 50,
  "galacticPower": 6108,
  "maxGalacticPower": 17523
}, {
  "code": "tusken-raider",
  "description": "Tusken Raider",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tuskenraider.png",
  "star": 7,
  "gearLevel": 5,
  "level": 35,
  "galacticPower": 6067,
  "maxGalacticPower": 16948
}, {
  "code": "nightsister-initiate",
  "description": "Nightsister Initiate",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nightsister_initiate.png",
  "star": 5,
  "gearLevel": 7,
  "level": 70,
  "galacticPower": 6046,
  "maxGalacticPower": 19929
}, {
  "code": "snowtrooper",
  "description": "Snowtrooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_troopersnow.png",
  "star": 6,
  "gearLevel": 7,
  "level": 53,
  "galacticPower": 5956,
  "maxGalacticPower": 16948
}, {
  "code": "ahsoka-tano-fulcrum",
  "description": "Ahsoka Tano (Fulcrum)",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ahsokaadult.png",
  "star": 6,
  "gearLevel": 6,
  "level": 55,
  "galacticPower": 5883,
  "maxGalacticPower": 19929
}, {
  "code": "bb-8",
  "description": "BB-8",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bb8.png",
  "star": 5,
  "gearLevel": 5,
  "level": 70,
  "galacticPower": 5679,
  "maxGalacticPower": 22909
}, {
  "code": "magmatrooper",
  "description": "Magmatrooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperstorm_magma.png",
  "star": 7,
  "gearLevel": 3,
  "level": 37,
  "galacticPower": 5644,
  "maxGalacticPower": 16948
}, {
  "code": "eeth-koth",
  "description": "Eeth Koth",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_eethkoth.png",
  "star": 7,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 5302,
  "maxGalacticPower": 17523
}, {
  "code": "general-kenobi",
  "description": "General Kenobi",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_obiwangeneral.png",
  "star": 5,
  "gearLevel": 6,
  "level": 55,
  "galacticPower": 4990,
  "maxGalacticPower": 18097
}, {
  "code": "clone-wars-chewbacca",
  "description": "Clone Wars Chewbacca",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_chewbacca.png",
  "star": 5,
  "gearLevel": 6,
  "level": 60,
  "galacticPower": 4972,
  "maxGalacticPower": 19929
}, {
  "code": "nightsister-acolyte",
  "description": "Nightsister Acolyte",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nightsister_acolyte.png",
  "star": 5,
  "gearLevel": 4,
  "level": 70,
  "galacticPower": 4851,
  "maxGalacticPower": 16948
}, {
  "code": "scarif-rebel-pathfinder",
  "description": "Scarif Rebel Pathfinder",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebel_scarif.png",
  "star": 6,
  "gearLevel": 4,
  "level": 50,
  "galacticPower": 3793,
  "maxGalacticPower": 16948
}, {
  "code": "nute-gunray",
  "description": "Nute Gunray",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nutegunray.png",
  "star": 4,
  "gearLevel": 5,
  "level": 52,
  "galacticPower": 3358,
  "maxGalacticPower": 17523
}, {
  "code": "hermit-yoda",
  "description": "Hermit Yoda",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_yodahermit.png",
  "star": 5,
  "gearLevel": 5,
  "level": 50,
  "galacticPower": 3024,
  "maxGalacticPower": 22909
}, {
  "code": "ct-21-0408-echo",
  "description": "CT-21-0408 \"Echo\"",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclone_echo.png",
  "star": 5,
  "gearLevel": 5,
  "level": 40,
  "galacticPower": 2946,
  "maxGalacticPower": 17523
}, {
  "code": "ima-gun-di",
  "description": "Ima-Gun Di",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_imagundi.png",
  "star": 5,
  "gearLevel": 4,
  "level": 40,
  "galacticPower": 2835,
  "maxGalacticPower": 17523
}, {
  "code": "clone-sergeant-phase-i",
  "description": "Clone Sergeant - Phase I",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclonegreen.png",
  "star": 4,
  "gearLevel": 5,
  "level": 44,
  "galacticPower": 2719,
  "maxGalacticPower": 16948
}, {
  "code": "geonosian-soldier",
  "description": "Geonosian Soldier",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_soldier.png",
  "star": 3,
  "gearLevel": 5,
  "level": 53,
  "galacticPower": 2529,
  "maxGalacticPower": 16948
}, {
  "code": "tusken-shaman",
  "description": "Tusken Shaman",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tuskenshaman.png",
  "star": 5,
  "gearLevel": 3,
  "level": 40,
  "galacticPower": 2197,
  "maxGalacticPower": 16948
}, {
  "code": "kylo-ren-unmasked",
  "description": "Kylo Ren (Unmasked)",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kylo_unmasked.png",
  "star": 3,
  "gearLevel": 5,
  "level": 42,
  "galacticPower": 2064,
  "maxGalacticPower": 22909
}, {
  "code": "jedi-knight-guardian",
  "description": "Jedi Knight Guardian",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jedi_guardian_01.png",
  "star": 4,
  "gearLevel": 3,
  "level": 33,
  "galacticPower": 1902,
  "maxGalacticPower": 16948
}, {
  "code": "logray",
  "description": "Logray",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_logray.png",
  "star": 5,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1891,
  "maxGalacticPower": 19929
}, {
  "code": "sith-assassin",
  "description": "Sith Assassin",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_sithassassin.png",
  "star": 4,
  "gearLevel": 3,
  "level": 40,
  "galacticPower": 1723,
  "maxGalacticPower": 16948
}, {
  "code": "aayla-secura",
  "description": "Aayla Secura",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_aaylasecura.png",
  "star": 3,
  "gearLevel": 3,
  "level": 40,
  "galacticPower": 1629,
  "maxGalacticPower": 17523
}, {
  "code": "coruscant-underworld-police",
  "description": "Coruscant Underworld Police",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_coruscantpolice.png",
  "star": 4,
  "gearLevel": 3,
  "level": 21,
  "galacticPower": 1623,
  "maxGalacticPower": 16948
}, {
  "code": "veteran-smuggler-chewbacca",
  "description": "Veteran Smuggler Chewbacca",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tfa_chewbacca.png",
  "star": 4,
  "gearLevel": 3,
  "level": 50,
  "galacticPower": 1602,
  "maxGalacticPower": 19929
}, {
  "code": "veteran-smuggler-han-solo",
  "description": "Veteran Smuggler Han Solo",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tfa_han.png",
  "star": 4,
  "gearLevel": 3,
  "level": 50,
  "galacticPower": 1569,
  "maxGalacticPower": 19929
}, {
  "code": "general-grievous",
  "description": "General Grievous",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_grievous.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1492,
  "maxGalacticPower": 18097
}, {
  "code": "poggle-the-lesser",
  "description": "Poggle the Lesser",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_poggle.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1417,
  "maxGalacticPower": 17523
}, {
  "code": "stormtrooper",
  "description": "Stormtrooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperstorm.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1408,
  "maxGalacticPower": 19144
}, {
  "code": "ig-100-magnaguard",
  "description": "IG-100 MagnaGuard",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_magnaguard.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1384,
  "maxGalacticPower": 16948
}, {
  "code": "sith-trooper",
  "description": "Sith Trooper",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_sithtrooper.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1384,
  "maxGalacticPower": 16948
}, {
  "code": "cad-bane",
  "description": "Cad Bane",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_cadbane.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1384,
  "maxGalacticPower": 17523
}, {
  "code": "zam-wesell",
  "description": "Zam Wesell",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_zamwesell.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1384,
  "maxGalacticPower": 17523
}, {
  "code": "ugnaught",
  "description": "Ugnaught",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ugnaught.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1375,
  "maxGalacticPower": 16738
}, {
  "code": "nightsister-zombie",
  "description": "Nightsister Zombie",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nightsisters_zombie.png",
  "star": 2,
  "gearLevel": 3,
  "level": 46,
  "galacticPower": 1368,
  "maxGalacticPower": 16948
}, {
  "code": "greedo",
  "description": "Greedo",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_greedo.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1351,
  "maxGalacticPower": 17523
}, {
  "code": "mother-talzin",
  "description": "Mother Talzin",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nightsisters_talzin.png",
  "star": 4,
  "gearLevel": 1,
  "level": 50,
  "galacticPower": 1341,
  "maxGalacticPower": 22909
}, {
  "code": "gamorrean-guard",
  "description": "Gamorrean Guard",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_gamorreanguard.png",
  "star": 4,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1252,
  "maxGalacticPower": 16948
}, {
  "code": "geonosian-spy",
  "description": "Geonosian Spy",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_spy.png",
  "star": 4,
  "gearLevel": 1,
  "level": 40,
  "galacticPower": 1203,
  "maxGalacticPower": 16948
}, {
  "code": "lobot",
  "description": "Lobot",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_lobot.png",
  "star": 3,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1080,
  "maxGalacticPower": 17523
}, {
  "code": "plo-koon",
  "description": "Plo Koon",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_plokoon.png",
  "star": 3,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1080,
  "maxGalacticPower": 17523
}, {
  "code": "kit-fisto",
  "description": "Kit Fisto",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kitfisto.png",
  "star": 3,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1080,
  "maxGalacticPower": 17523
}, {
  "code": "gar-saxon",
  "description": "Gar Saxon",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_gar_saxon.png",
  "star": 3,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1047,
  "maxGalacticPower": 19929
}, {
  "code": "imperial-super-commando",
  "description": "Imperial Super Commando",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_imperial_super_commando.png",
  "star": 3,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1014,
  "maxGalacticPower": 16948
}, {
  "code": "paploo",
  "description": "Paploo",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ewok_paploo.png",
  "star": 3,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 1014,
  "maxGalacticPower": 19929
}, {
  "code": "mob-enforcer",
  "description": "Mob Enforcer",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_thug_female_01.png",
  "star": 2,
  "gearLevel": 3,
  "level": 20,
  "galacticPower": 789,
  "maxGalacticPower": 16948
}, {
  "code": "first-order-sf-tie-pilot",
  "description": "First Order SF TIE Pilot",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstorder_pilot.png",
  "star": 2,
  "gearLevel": 1,
  "level": 50,
  "galacticPower": 778,
  "maxGalacticPower": 16948
}, {
  "code": "nightsister-spirit",
  "description": "Nightsister Spirit",
  "imageSrc": "swgoh.gg/static/img/assets/tex.charui_nightsisters_wraith.png",
  "star": 2,
  "gearLevel": 1,
  "level": 1,
  "galacticPower": 451,
  "maxGalacticPower": 16948
}];
export const ships = [{
  "code": "scimitar",
  "description": "Scimitar",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_sithinfiltrator.png",
  "star": 7,
  "level": 85,
  "crew": [{
    "code": "darth-maul",
    "description": "Darth Maul",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_maul.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 47240,
  "maxGalacticPower": 48185
}, {
  "code": "tie-advanced-x1",
  "description": "TIE Advanced x1",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_tieadvanced.png",
  "star": 7,
  "level": 85,
  "crew": [{
    "code": "darth-vader",
    "description": "Darth Vader",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_vader.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 40908,
  "maxGalacticPower": 48185
}, {
  "code": "wedge-antilless-x-wing",
  "description": "Wedge Antilles's X-wing",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_xwing_red2.png",
  "star": 7,
  "level": 85,
  "crew": [{
    "code": "wedge-antilles",
    "description": "Wedge Antilles",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebelpilot_wedge.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 38870,
  "maxGalacticPower": 42771
}, {
  "code": "biggs-darklighters-x-wing",
  "description": "Biggs Darklighter's X-wing",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_xwing_red3.png",
  "star": 7,
  "level": 85,
  "crew": [{
    "code": "biggs-darklighter",
    "description": "Biggs Darklighter",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebelpilot_biggs.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 37050,
  "maxGalacticPower": 41478
}, {
  "code": "rexs-arc-170",
  "description": "Rex's ARC-170",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_arc170_02.png",
  "star": 6,
  "level": 85,
  "crew": [{
    "code": "ct-7567-rex",
    "description": "CT-7567 \"Rex\"",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclone_rex.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 36182,
  "maxGalacticPower": 42771
}, {
  "code": "phantom-ii",
  "description": "Phantom II",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_phantom2.png",
  "star": 6,
  "level": 85,
  "crew": [{
    "code": "chopper",
    "description": "Chopper",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_chopper.png",
    "star": 7,
    "level": 85
  }, {
    "code": "ezra-bridger",
    "description": "Ezra Bridger",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ezra_s3.png",
    "star": 7,
    "level": 85
  }, {
    "code": "sabine-wren",
    "description": "Sabine Wren",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_sabine_s3.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 35241,
  "maxGalacticPower": 55971
}, {
  "code": "slave-i",
  "description": "Slave I",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_slave1.png",
  "star": 7,
  "level": 85,
  "crew": [{
    "code": "boba-fett",
    "description": "Boba Fett",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bobafett.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 34071,
  "maxGalacticPower": 49949
}, {
  "code": "imperial-tie-fighter",
  "description": "Imperial TIE Fighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_tiefighter.png",
  "star": 6,
  "level": 85,
  "crew": [{
    "code": "tie-fighter-pilot",
    "description": "TIE Fighter Pilot",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tiepilot.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 34001,
  "maxGalacticPower": 41478
}, {
  "code": "ghost",
  "description": "Ghost",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_ghost.png",
  "star": 6,
  "level": 85,
  "crew": [{
    "code": "kanan-jarrus",
    "description": "Kanan Jarrus",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kanan_s3.png",
    "star": 7,
    "level": 85
  }, {
    "code": "hera-syndulla",
    "description": "Hera Syndulla",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_hera_s3.png",
    "star": 7,
    "level": 85
  }, {
    "code": "garazeb-zeb-orrelios",
    "description": "Garazeb \"Zeb\" Orrelios",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_zeb_s3.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 33995,
  "maxGalacticPower": 57948
}, {
  "code": "cassians-u-wing",
  "description": "Cassian's U-wing",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_uwing_hero.png",
  "star": 7,
  "level": 85,
  "crew": [{
    "code": "jyn-erso",
    "description": "Jyn Erso",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jyn.png",
    "star": 7,
    "level": 85
  }, {
    "code": "k-2so",
    "description": "K-2SO",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_k2so.png",
    "star": 7,
    "level": 85
  }, {
    "code": "cassian-andor",
    "description": "Cassian Andor",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_cassian.png",
    "star": 7,
    "level": 65
  }],
  "galacticPower": 33474,
  "maxGalacticPower": 60630
}, {
  "code": "kylo-rens-command-shuttle",
  "description": "Kylo Ren's Command Shuttle",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_upsilon_shuttle_kylo.png",
  "star": 4,
  "level": 85,
  "crew": [{
    "code": "captain-phasma",
    "description": "Captain Phasma",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_phasma.png",
    "star": 7,
    "level": 85
  }, {
    "code": "kylo-ren",
    "description": "Kylo Ren",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kyloren.png",
    "star": 7,
    "level": 70
  }, {
    "code": "first-order-stormtrooper",
    "description": "First Order Stormtrooper",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstordertrooper.png",
    "star": 7,
    "level": 70
  }],
  "galacticPower": 26727,
  "maxGalacticPower": 57241
}, {
  "code": "umbaran-starfighter",
  "description": "Umbaran Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_umbaran_star_fighter.png",
  "star": 5,
  "level": 85,
  "crew": [{
    "code": "ct-5555-fives",
    "description": "CT-5555 \"Fives\"",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclone_fives.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 25239,
  "maxGalacticPower": 48185
}, {
  "code": "sun-facs-geonosian-starfighter",
  "description": "Sun Fac's Geonosian Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_geonosis_fighter_sunfac.png",
  "star": 5,
  "level": 85,
  "crew": [{
    "code": "sun-fac",
    "description": "Sun Fac",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_sunfac.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 24168,
  "maxGalacticPower": 42771
}, {
  "code": "ahsoka-tanos-jedi-starfighter",
  "description": "Ahsoka Tano's Jedi Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_jedi_fighter_ahsoka.png",
  "star": 5,
  "level": 85,
  "crew": [{
    "code": "ahsoka-tano",
    "description": "Ahsoka Tano",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ahsoka.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 23289,
  "maxGalacticPower": 42771
}, {
  "code": "resistance-x-wing",
  "description": "Resistance X-wing",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_xwing_resistance.png",
  "star": 3,
  "level": 85,
  "crew": [{
    "code": "resistance-pilot",
    "description": "Resistance Pilot",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_resistancepilot.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 22183,
  "maxGalacticPower": 41005
}, {
  "code": "first-order-tie-fighter",
  "description": "First Order TIE Fighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_firstorder_tiefighter.png",
  "star": 5,
  "level": 85,
  "crew": [{
    "code": "first-order-tie-pilot",
    "description": "First Order TIE Pilot",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstordertiepilot.png",
    "star": 7,
    "level": 70
  }],
  "galacticPower": 22157,
  "maxGalacticPower": 46419
}, {
  "code": "jedi-consulars-starfighter",
  "description": "Jedi Consular's Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_jedi_fighter.png",
  "star": 5,
  "level": 85,
  "crew": [{
    "code": "jedi-consular",
    "description": "Jedi Consular",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_jedi_consular_03.png",
    "star": 6,
    "level": 54
  }],
  "galacticPower": 14981,
  "maxGalacticPower": 41478
}, {
  "code": "bistans-u-wing",
  "description": "Bistan's U-wing",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_uwing.png",
  "star": 3,
  "level": 1,
  "crew": [{
    "code": "scarif-rebel-pathfinder",
    "description": "Scarif Rebel Pathfinder",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_rebel_scarif.png",
    "star": 6,
    "level": 50
  }, {
    "code": "bistan",
    "description": "Bistan",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_bistan.png",
    "star": 7,
    "level": 50
  }],
  "galacticPower": 9803,
  "maxGalacticPower": 50278
}, {
  "code": "geonosian-soldiers-starfighter",
  "description": "Geonosian Soldier's Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_geonosis_fighter_soldier.png",
  "star": 6,
  "level": 75,
  "crew": [{
    "code": "geonosian-soldier",
    "description": "Geonosian Soldier",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_soldier.png",
    "star": 3,
    "level": 53
  }],
  "galacticPower": 6867,
  "maxGalacticPower": 41478
}, {
  "code": "clone-sergeants-arc-170",
  "description": "Clone Sergeant's ARC-170",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_arc170.png",
  "star": 4,
  "level": 1,
  "crew": [{
    "code": "clone-sergeant-phase-i",
    "description": "Clone Sergeant - Phase I",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperclonegreen.png",
    "star": 4,
    "level": 44
  }],
  "galacticPower": 4691,
  "maxGalacticPower": 41478
}, {
  "code": "tie-silencer",
  "description": "TIE Silencer",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_tie_silencer.png",
  "star": 2,
  "level": 1,
  "crew": [{
    "code": "kylo-ren-unmasked",
    "description": "Kylo Ren (Unmasked)",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_kylo_unmasked.png",
    "star": 3,
    "level": 42
  }],
  "galacticPower": 3252,
  "maxGalacticPower": 54890
}, {
  "code": "gauntlet-starfighter",
  "description": "Gauntlet Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_gauntlet.png",
  "star": 5,
  "level": 1,
  "crew": [{
    "code": "imperial-super-commando",
    "description": "Imperial Super Commando",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_imperial_super_commando.png",
    "star": 3,
    "level": 20
  }, {
    "code": "gar-saxon",
    "description": "Gar Saxon",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_gar_saxon.png",
    "star": 3,
    "level": 20
  }],
  "galacticPower": 2320,
  "maxGalacticPower": 53526
}, {
  "code": "geonosian-spys-starfighter",
  "description": "Geonosian Spy's Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_geonosis_fighter_spy.png",
  "star": 1,
  "level": 1,
  "crew": [{
    "code": "geonosian-spy",
    "description": "Geonosian Spy",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_geonosian_spy.png",
    "star": 4,
    "level": 40
  }],
  "galacticPower": 1806,
  "maxGalacticPower": 41478
}, {
  "code": "plo-koons-jedi-starfighter",
  "description": "Plo Koon's Jedi Starfighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_jedi_fighter_bladeofdorin.png",
  "star": 3,
  "level": 1,
  "crew": [{
    "code": "plo-koon",
    "description": "Plo Koon",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_plokoon.png",
    "star": 3,
    "level": 20
  }],
  "galacticPower": 1783,
  "maxGalacticPower": 42771
}, {
  "code": "first-order-sf-tie-fighter",
  "description": "First Order SF TIE Fighter",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_fosf_tie_fighter.png",
  "star": 2,
  "level": 1,
  "crew": [{
    "code": "first-order-sf-tie-pilot",
    "description": "First Order SF TIE Pilot",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_firstorder_pilot.png",
    "star": 2,
    "level": 50
  }],
  "galacticPower": 1226,
  "maxGalacticPower": 41478
}, {
  "code": "executrix",
  "description": "Executrix",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_stardestroyer.png",
  "star": 6,
  "level": 85,
  "crew": [{
    "code": "grand-moff-tarkin",
    "description": "Grand Moff Tarkin",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_tarkinadmiral.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 37408,
  "maxGalacticPower": 55320
}, {
  "code": "home-one",
  "description": "Home One",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_moncalamarilibertycruiser.png",
  "star": 5,
  "level": 85,
  "crew": [{
    "code": "admiral-ackbar",
    "description": "Admiral Ackbar",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_ackbaradmiral.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 27405,
  "maxGalacticPower": 43202
}, {
  "code": "endurance",
  "description": "Endurance",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_venator.png",
  "star": 6,
  "level": 85,
  "crew": [{
    "code": "mace-windu",
    "description": "Mace Windu",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_macewindu.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": 25383,
  "maxGalacticPower": 43202
}, {
  "code": "millennium-falcon-ep-vii",
  "description": "Millennium Falcon (Ep VII)",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_mfalcon_ep7.png",
  "star": 0,
  "level": 0,
  "crew": [{
    "code": "finn",
    "description": "Finn",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_finnjakku.png",
    "star": 7,
    "level": 85
  }, {
    "code": "rey-scavenger",
    "description": "Rey (Scavenger)",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_reyjakku.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": null,
  "maxGalacticPower": null
}, {
  "code": "poe-damerons-x-wing",
  "description": "Poe Dameron's X-wing",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_xwing_blackone.png",
  "star": 0,
  "level": 0,
  "crew": [{
    "code": "poe-dameron",
    "description": "Poe Dameron",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_poe.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": null,
  "maxGalacticPower": null
}, {
  "code": "tie-reaper",
  "description": "TIE Reaper",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_tiereaper.png",
  "star": 0,
  "level": 0,
  "crew": [{
    "code": "shoretrooper",
    "description": "Shoretrooper",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_troopershore.png",
    "star": 5,
    "level": 85
  }, {
    "code": "death-trooper",
    "description": "Death Trooper",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_trooperdeath.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": null,
  "maxGalacticPower": null
}, {
  "code": "chimaera",
  "description": "Chimaera",
  "imageSrc": "//swgoh.gg/static/img/assets/tex.charui_chimaera.png",
  "star": 0,
  "level": 0,
  "crew": [{
    "code": "grand-admiral-thrawn",
    "description": "Grand Admiral Thrawn",
    "imageSrc": "swgoh.gg/static/img/assets/tex.charui_thrawn.png",
    "star": 7,
    "level": 85
  }],
  "galacticPower": null,
  "maxGalacticPower": null
}];
export const mods = [{
  "character": "Stormtrooper Han",
  "tier": 5,
  "description": "Mk V-A Health Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Protection", "value": "+3.09%"}, {"type": "Protection", "value": "+2182"}, {
    "type": "Health",
    "value": "+0.71%"
  }, {"type": "Tenacity", "value": "+1.64%"}]
}, {
  "character": "Darth Maul",
  "tier": 5,
  "description": "Mk V-A Health Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Health", "value": "+690"}, {"type": "Defense", "value": "+22"}, {
    "type": "Speed",
    "value": "+9"
  }, {"type": "Protection", "value": "+594"}]
}, {
  "character": "Qui-Gon Jinn",
  "tier": 5,
  "description": "Mk V-A Health Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Health", "value": "+1.11%"}, {"type": "Health", "value": "+243"}, {
    "type": "Offense",
    "value": "+29"
  }, {"type": "Protection", "value": "+1.7%"}]
}, {
  "character": "Royal Guard",
  "tier": 5,
  "description": "Mk V-A Health Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Defense", "value": "+22"}, {"type": "Defense", "value": "+0.93%"}, {
    "type": "Tenacity",
    "value": "+1.15%"
  }, {"type": "Health", "value": "+0.79%"}]
}, {
  "character": "Emperor Palpatine",
  "tier": 5,
  "description": "Mk V-A Health Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Protection", "value": "+1426"}, {
    "type": "Critical Chance",
    "value": "+1.62%"
  }, {"type": "Health", "value": "+392"}, {"type": "Health", "value": "+1%"}]
}, {
  "character": "Savage Opress",
  "tier": 5,
  "description": "Mk V-A Crit Damage Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Tenacity", "value": "+3.52%"}, {"type": "Speed", "value": "+10"}, {
    "type": "Health",
    "value": "+233"
  }, {"type": "Defense", "value": "+7"}]
}, {
  "character": "Darth Vader",
  "tier": 5,
  "description": "Mk V-A Tenacity Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Speed", "value": "+8"}, {"type": "Critical Chance", "value": "+2.02%"}, {
    "type": "Potency",
    "value": "+1.84%"
  }, {"type": "Protection", "value": "+1.58%"}]
}, {
  "character": "Darth Nihilus",
  "tier": 5,
  "description": "Mk V-A Potency Transmitter",
  "level": "15",
  "slot": "Square",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Speed", "value": "+7"}, {"type": "Defense", "value": "+1.06%"}, {
    "type": "Defense",
    "value": "+9"
  }, {"type": "Tenacity", "value": "+2.09%"}]
}, {
  "character": "Stormtrooper Han",
  "tier": 5,
  "description": "Mk V-A Health Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Health", "value": "+2.22%"}, {"type": "Defense", "value": "+7"}, {
    "type": "Offense",
    "value": "+0.45%"
  }, {"type": "Protection", "value": "+1.54%"}]
}, {
  "character": "Savage Opress",
  "tier": 5,
  "description": "Mk V-A Health Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Offense", "value": "+0.53%"}, {"type": "Health", "value": "+0.86%"}, {
    "type": "Offense",
    "value": "+74"
  }, {"type": "Health", "value": "+1430"}]
}, {
  "character": "Resistance Trooper",
  "tier": 5,
  "description": "Mk V-A Health Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Offense", "value": "+0.35%"}, {
    "type": "Defense",
    "value": "+3.93%"
  }, {"type": "Critical Chance", "value": "+1.74%"}, {"type": "Defense", "value": "+5"}]
}, {
  "character": "Royal Guard",
  "tier": 5,
  "description": "Mk V-A Health Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Health", "value": "+5.88%"},
  "secondary": [{"type": "Protection", "value": "+1.85%"}, {"type": "Potency", "value": "+1.16%"}, {
    "type": "Defense",
    "value": "+1.32%"
  }, {"type": "Health", "value": "+389"}]
}, {
  "character": "Emperor Palpatine",
  "tier": 5,
  "description": "Mk V-A Health Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Health", "value": "+321"}, {"type": "Offense", "value": "+0.47%"}, {
    "type": "Defense",
    "value": "+8"
  }, {"type": "Tenacity", "value": "+1.63%"}]
}, {
  "character": "Grand Moff Tarkin",
  "tier": 5,
  "description": "Mk V-A Defense Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Defense", "value": "+7"}, {"type": "Potency", "value": "+1.17%"}, {
    "type": "Critical Chance",
    "value": "+1.98%"
  }, {"type": "Health", "value": "+324"}]
}, {
  "character": "Baze Malbus",
  "tier": 5,
  "description": "Mk V-A Defense Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Protection", "value": "+23.5%"},
  "secondary": [{"type": "Speed", "value": "+6"}, {"type": "Offense", "value": "+32"}, {
    "type": "Offense",
    "value": "+0.45%"
  }, {"type": "Tenacity", "value": "+1.83%"}]
}, {
  "character": "CT-7567 \"Rex\"",
  "tier": 5,
  "description": "Mk V-A Crit Chance Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Health", "value": "+5.88%"},
  "secondary": [{"type": "Speed", "value": "+4"}, {"type": "Critical Chance", "value": "+5.74%"}, {
    "type": "Protection",
    "value": "+449"
  }, {"type": "Defense", "value": "+1.1%"}]
}, {
  "character": "Han Solo",
  "tier": 5,
  "description": "Mk V-A Tenacity Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Critical Avoidance", "value": "+24%"},
  "secondary": [{"type": "Defense", "value": "+25"}, {"type": "Offense", "value": "+35"}, {
    "type": "Offense",
    "value": "+0.84%"
  }, {"type": "Speed", "value": "+11"}]
}, {
  "character": "Finn",
  "tier": 5,
  "description": "Mk V-A Tenacity Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Defense", "value": "+2.66%"}, {"type": "Protection", "value": "+1.75%"}, {
    "type": "Health",
    "value": "+0.89%"
  }, {"type": "Protection", "value": "+827"}]
}, {
  "character": "TIE Fighter Pilot",
  "tier": 5,
  "description": "Mk V-A Tenacity Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Defense", "value": "+7"}, {"type": "Critical Chance", "value": "+1.43%"}, {
    "type": "Defense",
    "value": "+1.16%"
  }, {"type": "Offense", "value": "+0.32%"}]
}, {
  "character": "Darth Vader",
  "tier": 5,
  "description": "Mk V-A Potency Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Offense", "value": "+42"}, {"type": "Defense", "value": "+13"}, {
    "type": "Critical Chance",
    "value": "+5.91%"
  }, {"type": "Potency", "value": "+3.58%"}]
}, {
  "character": "R2-D2",
  "tier": 5,
  "description": "Mk V-A Potency Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Protection", "value": "+1371"}, {"type": "Offense", "value": "+0.93%"}, {
    "type": "Defense",
    "value": "+6"
  }, {"type": "Health", "value": "+0.96%"}]
}, {
  "character": "Darth Nihilus",
  "tier": 5,
  "description": "Mk V-A Potency Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Tenacity", "value": "+1.23%"}, {"type": "Health", "value": "+0.62%"}, {
    "type": "Offense",
    "value": "+0.5%"
  }, {"type": "Offense", "value": "+41"}]
}, {
  "character": "Princess Leia",
  "tier": 5,
  "description": "Mk V-A Potency Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Critical Avoidance", "value": "+24%"},
  "secondary": [{"type": "Offense", "value": "+28"}, {"type": "Speed", "value": "+12"}, {
    "type": "Critical Chance",
    "value": "+1.59%"
  }, {"type": "Protection", "value": "+558"}]
}, {
  "character": "Darth Maul",
  "tier": 5,
  "description": "Mk V-A Potency Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Critical Chance", "value": "+1.22%"}, {
    "type": "Protection",
    "value": "+1.46%"
  }, {"type": "Offense", "value": "+1.23%"}, {"type": "Tenacity", "value": "+5.61%"}]
}, {
  "character": "Poe Dameron",
  "tier": 5,
  "description": "Mk V-A Potency Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Speed", "value": "+30"},
  "secondary": [{"type": "Health", "value": "+348"}, {"type": "Tenacity", "value": "+5.11%"}, {
    "type": "Defense",
    "value": "+1.55%"
  }, {"type": "Potency", "value": "+1.64%"}]
}, {
  "character": "Rey (Scavenger)",
  "tier": 5,
  "description": "Mk V-A Speed Receiver",
  "level": "15",
  "slot": "Arrow",
  "primary": {"type": "Offense", "value": "+5.88%"},
  "secondary": [{"type": "Protection", "value": "+4.88%"}, {"type": "Speed", "value": "+5"}, {
    "type": "Critical Chance",
    "value": "+2.05%"
  }, {"type": "Defense", "value": "+1.64%"}]
}, {
  "character": "Savage Opress",
  "tier": 5,
  "description": "Mk V-A Health Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Defense", "value": "+13"}, {"type": "Critical Chance", "value": "+3.52%"}, {
    "type": "Health",
    "value": "+1.09%"
  }, {"type": "Offense", "value": "+38"}]
}, {
  "character": "Ewok Elder",
  "tier": 5,
  "description": "Mk V-A Health Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Protection", "value": "+1182"}, {"type": "Potency", "value": "+1.32%"}, {
    "type": "Health",
    "value": "+215"
  }, {"type": "Tenacity", "value": "+1.38%"}]
}, {
  "character": "Royal Guard",
  "tier": 5,
  "description": "Mk V-A Health Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Protection", "value": "+1601"}, {
    "type": "Critical Chance",
    "value": "+2.22%"
  }, {"type": "Potency", "value": "+1.18%"}, {"type": "Health", "value": "+389"}]
}, {
  "character": "Wedge Antilles",
  "tier": 5,
  "description": "Mk V-A Health Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Speed", "value": "+7"}, {"type": "Offense", "value": "+37"}, {
    "type": "Health",
    "value": "+0.9%"
  }, {"type": "Protection", "value": "+1.9%"}]
}, {
  "character": "CT-7567 \"Rex\"",
  "tier": 5,
  "description": "Mk V-A Health Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Potency", "value": "+2.35%"}, {"type": "Speed", "value": "+4"}, {
    "type": "Offense",
    "value": "+0.53%"
  }, {"type": "Protection", "value": "+624"}]
}, {
  "character": "Emperor Palpatine",
  "tier": 5,
  "description": "Mk V-A Health Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Speed", "value": "+9"}, {"type": "Offense", "value": "+25"}, {
    "type": "Protection",
    "value": "+1.57%"
  }, {"type": "Offense", "value": "+0.28%"}]
}, {
  "character": "Han Solo",
  "tier": 5,
  "description": "Mk V-A Crit Chance Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Potency", "value": "+3.16%"}, {
    "type": "Offense",
    "value": "+0.52%"
  }, {"type": "Critical Chance", "value": "+2.11%"}, {"type": "Health", "value": "+254"}]
}, {
  "character": "Poe Dameron",
  "tier": 5,
  "description": "Mk V-A Crit Chance Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Protection", "value": "+4.69%"}, {"type": "Protection", "value": "+1061"}, {
    "type": "Offense",
    "value": "+0.42%"
  }, {"type": "Speed", "value": "+9"}]
}, {
  "character": "Darth Vader",
  "tier": 5,
  "description": "Mk V-A Potency Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Potency", "value": "+3.91%"}, {"type": "Speed", "value": "+8"}, {
    "type": "Protection",
    "value": "+3.5%"
  }, {"type": "Tenacity", "value": "+1.92%"}]
}, {
  "character": "Darth Maul",
  "tier": 5,
  "description": "Mk V-A Potency Processor",
  "level": "15",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+11.75%"},
  "secondary": [{"type": "Health", "value": "+264"}, {"type": "Speed", "value": "+19"}, {
    "type": "Critical Chance",
    "value": "+1.81%"
  }, {"type": "Offense", "value": "+0.66%"}]
}, {
  "character": "Captain Phasma",
  "tier": 1,
  "description": "Mk I-E Potency Processor",
  "level": "1",
  "slot": "Diamond",
  "primary": {"type": "Defense", "value": "+0.25%"},
  "secondary": []
}];

export const guildAllies = [{"username": "azerus", "description": "Azerus"}, {
  "username": "skuddy",
  "description": "skuddy"
}, {"username": "thymo", "description": "Brk Tmcn"}, {"username": "t1m0", "description": "t1m0"}, {
  "username": "oldben",
  "description": "KyIo Ben"
}, {"username": "kingken", "description": "KingKen"}, {
  "username": "ilekkund",
  "description": "ilekkund"
}, {"username": "pikax", "description": "pikax"}, {
  "username": "saznetro",
  "description": "Abasc Sai"
}, {"username": "padda1", "description": "Padda1"}, {
  "username": "mrv",
  "description": "Mr V"
}, {"username": "johnnyudes", "description": "Johnnyudes"}, {
  "username": "offsky",
  "description": "Offsky"
}, {"username": "admiralenzo", "description": "AdmiralEnzo"}, {
  "username": "warblade1022",
  "description": "WarBlade1022"
}, {"username": "edric0", "description": "Edric0"}, {
  "username": "gavsky",
  "description": "Gav Skykiller"
}, {"username": "jonnyt", "description": "Jonnyt"}, {
  "username": "kingcobra",
  "description": "kingcobra"
}, {"username": "sk8mat5", "description": "Mat"}, {
  "username": "chev%20alier",
  "description": "Chev Alier"
}, {"username": "patsymax", "description": "Patsymax"}, {
  "username": "bluerolodex",
  "description": "BlueRolodex"
}, {"username": "bigwilly", "description": "BigWilly"}, {
  "username": "skitzo24",
  "description": "Skitzo24"
}, {"username": "hammer123", "description": "Hammer"}, {
  "username": "gatrilian",
  "description": "Gatrilian"
}, {"username": "etothejwn", "description": "etothejwn"}, {
  "username": "sormajonny",
  "description": "Sormajonny"
}, {"username": "themy", "description": "Themy"}, {
  "username": "sanholo14",
  "description": "San Holo"
}, {"username": "darthtrojan", "description": "DarthTrojan"}, {
  "username": "valdahur",
  "description": "Scorn"
}, {"username": "taggar91", "description": "Taggar91"}, {
  "username": "asherr",
  "description": "Asherr"
}, {"username": "tarragashur", "description": "Tarragashur"}, {
  "username": "muad",
  "description": "Muad"
}, {"username": "cal-naughton-jnr", "description": "Cal Naughton Jnr"}, {
  "username": "reinking",
  "description": "Reinking"
}, {"username": "polkjio", "description": "Jonty"}, {
  "username": "armil",
  "description": "Armil"
}, {"username": "anzhey", "description": "Anzhey"}, {
  "username": "msk5400",
  "description": "Gordane Lightstorm"
}, {"username": "meraxes1", "description": "Meraxes"}, {
  "username": "zsazsa",
  "description": "Zsazsa"
}, {"username": "snowyguide", "description": "SnowyGuide"}, {
  "username": "turin7",
  "description": "Turin"
}, {"username": "toomjg", "description": "TooM"}, {
  "username": "yellamo",
  "description": "Yellamo"
}, {"username": "sprock", "description": "Sprock"}];


export const gattsu = {
  "galacticPower": 2313805,
  "charactersGalacticPower": 1427941,
  "shipsGalacticPower": 885864,
  "pVEBattlesWon": 58475,
  "pVEHardBattlesWon": 9418,
  "galacticWarBattlesWon": 7141,
  "arenaBattlesWon": 2027,
  "guildCurrencyEarned": 408650,
  "raidsWon": 348,
  "shipBattlesWon": 446,
  "collectionScore": 55.35,
  "characters": 132,
  "characters7": 101,
  "characters6": 4,
  "gearXII": 2,
  "gearXI": 19,
  "gearX": 13,
  "gearIX": 7,
  "gearVIII": 35,
  "username": "Gattsu",
  "userId": 30776,
  "arenaRank": 74,
  "level": 85,
  "joined": "Oct 31, 2016",
  "guild": "Lightsaber Order",
  "guildUrl": "/g/1044/lightsaber-order/"
};