// TODO mode refactor this and prefix interfaces with I


import It = jest.It;

export enum GearLevel {
    I = 1,
    II = 3,
    III = 3,
    IV = 4,
    V = 5,
    VI = 6,
    VII = 7,
    VIII = 8,
    IX = 9,
    X = 10,
    XI = 11,
    XII = 12,
}

/* User base */
export interface CharacterCore {
    code: string;
    description: string;

    imageSrc: string;

    star: number;
    gearLevel: GearLevel;
    level: number;
}


export interface Character extends CharacterCore {
    galacticPower: number;

    maxGalacticPower: number;
}


export interface Ship {
    code: string;
    description: string;

    imageSrc: string;

    star: number;
    level: number;
    galacticPower: number;


    crew: CharacterCore[],

    maxGalacticPower: number;
}


/*
export interface Guild {

    users: {
        username: string,
        description: string,
    }
}
*/

export type Guild = {username:string, description: string}[];

export interface User {
    username: string;
    playername: string;
    userId: number;
    arenaRank: number;
    level: number;
    guild: string;
    guildUrl: string;
    allyCode: string;
    joined: string,

    lastUpdatedUTC?: string;
}

export interface UserStats {
    collectionScore: number;
    characters: number;
    characters7: number;
    characters6: number;
    gearXII: number;
    gearXI: number;
    gearX: number;
    gearIX: number;
    gearVIII: number;
}

export interface UserInfo {
    galacticPower: number;
    charactersGalacticPower: number;
    shipsGalacticPower: number;
    pVEBattlesWon: number;
    pVEHardBattlesWon: number;
    galacticWarBattlesWon: number;
    arenaBattlesWon: number;
    guildCurrencyEarned: number;
    raidsWon: number;
    shipBattlesWon: number;
}


export interface SwgohggUnit {
    player: string;
    character_stars: number;
    character_level: number;
    power: number;
}

/* end user base*/


/*Mod*/

export enum ModSlot {
    Transmitter,
    Receiver,
    Processor,
    HoloArray,
    DataBus,
    Multiplexer
}

export enum ModSet {
    Health,
    Defense,
    CriticalDamage,
    CriticalChance,
    Tenacity,
    Offense,
    Potency,
    Speed,
}


// todo probably replace this names on the enum
export const TranslatedModName = {
    [ModSlot.Transmitter]: "Square",
    [ModSlot.Receiver]: "Arrow",
    [ModSlot.Processor]: "Diamond",
    [ModSlot.HoloArray]: "Triangle",
    [ModSlot.DataBus]: "Circle",
    [ModSlot.Multiplexer]: "Cross",
};


export enum ModPrimary {
    Speed = "Speed",
    CriticalChance = "Critical Chance",
    CriticalDamage = "Critical Damage",
    Potency = "Potency",
    Tenacity = "Tenacity",
    Accuracy = "Accuracy",
    CriticalAvoidance = "Critical Avoidance",
    Offense = "Offense",
    Defense = "Defense",
    Health = "Health",
    Protection = "Protection",
}


export enum ModSecondary {
    Speed = "Speed",
    CriticalChance = "Critical Chance",
    Potency = "Potency",
    Tenacity = "Tenacity",
    Offense = "Offense",
    Defense = "Defense",
    Health = "Health",
    Protection = "Protection",
    Offense100 = "Offense %",
    Defense100 = "Defense %",
    Health100 = "Health %",
    Protection100 = "Protection %",
}


export type ModPrimaryValue = { type: ModPrimary, value: string };
export type ModSecondaryValue = { type: ModSecondary, value: string };

export interface Mod {
    description: string;

    tier: number;

    level: number;
    slot: ModSlot;

    primary: ModPrimaryValue,
    secondary: [ModSecondaryValue, ModPrimaryValue, ModSecondaryValue, ModSecondaryValue]

    character: string; // TODO move this to other place
}

/*End Mod*/


/* Info */

// TODO change to CharacterCore
export interface CharacterCoreStats {
    code: string;
    description: string;
}


export interface CharacterBaseStats {
    power: number;
    speed: number;
    health: number;
    maxAbility: number;
}


export interface CharacterBaseOffensive {
    physicalDmg: number;
    physicalCrit: number;
    specialDmg: number;
    specialCrit: number;
    armorPen: number;
    resistancePen: number;
    potency: number;
}

export interface CharacterBaseDefensive {
    protection: number;
    armor: number;
    resistance: number;
    tenacity: number; // %
    healthSteal: number; // %

}

/*Note I don't know what are those*/
export interface CharacterBaseAbilities {
    maxDamageAbility?: number; // can be null ** Hermit Yoda / Jawa Engineer **
    baseAbility?: number; // can be null ** Hermit Yoda / Jawa Engineer **
    aoeAbility: number;
}

export interface CharacterBaseGear {
    tier: GearLevel;
    credits: number;
    raid: number;
    gold: number;
    purple: number;
    blue: number;
    green: number;
    white: number;
}

//from /character/stats
export type CharacterStats = CharacterCoreStats
    & CharacterBaseStats
    & CharacterBaseOffensive
    & CharacterBaseDefensive
    & CharacterBaseAbilities
    & CharacterBaseGear;

/* end info */


/* Ship stats */

export interface ShipType {
    isCapital: boolean;
}


export interface ShipBaseStats {
    power: number;
    speed: number;
    health: number;
    protection: number;
}

export interface ShipBaseOffensive {
    physicalDmg: number;
    physicalCrit: number;
    specialDmg: number;
    specialCrit: number;
    potency: number;
}

export interface ShipBaseDefensive {
    armor: number;
    resistance: number;
    tenacity: number; // %
}


export type ShipStats = CharacterCoreStats
    & ShipType
    & ShipBaseStats
    & ShipBaseOffensive
    & ShipBaseDefensive
    ;
/* end ship stats*/


/* toon info*/


export interface IToonGalacticPower {
    current: number;
    max: number;
}

export interface IToonGalacticPowerBreakdown {
    overall: IToonGalacticPower;
    level: IToonGalacticPower;
    stars: IToonGalacticPower;
    abilityLevels: IToonGalacticPower;
    gearPieces: IToonGalacticPower;
    mods: IToonGalacticPower;
}


export interface IToonPower {
    power: number;
    statPower: number;
}

export interface IToonPrimaryAttributes {
    str: number;
    agi: number;
    int: number;
}

export interface IToonPrimaryAttributesGrowth {
    strGrowth: number;
    agiGrowth: number;
    intGrowth: number;
}


export interface IToonGeneral {
    health: number;
    protection: number;
    speed: number;
    criticalDamagePerc: number;
    potencyPerc: number;
    tenacityPerc: number;
    healthStealPerc: number;
}

export interface IToonPhysicalOffence {
    physicalDamage: number;
    physicalCriticalChancePerc: number;
    armorPenetration: number;
    physicalAccuracyPerc: number;
}

export interface IToonSpecialOffence {
    specialDamage: number;
    specialCriticalChancePerc: number;
    resistancePenetration: number;
    specialAccuracyPerc: number;
}


export interface IToonPhysicalSurvivability {
    armorPerc: number;
    dodgeChangePerc: number;
    physicalCriticalAvoidancePerc: number;
}

export interface IToonSpecialSurvivability {
    resistancePerc: number;
    deflectionChangePerc: number;
    specialCriticalAvoidancePerc: number;
}


export interface IToonMods {
    Square: Mod;
    Arrow: Mod;
    Diamond: Mod;
    Triangle: Mod;
    Circle: Mod;
    Cross: Mod;
}

//TODO/Note probably merge the percentages together
export interface IToonModCombinedStats {
    tenacityPerc: number;
    defencePerc: number;
    speed: number;
    offence: number;
    criticalChangePerc: number;
    healthPerc: number;
    protectionPerc: number;
    potencyPerc: number;
    health: number;
    protection: number;
    defense: number;
}


export interface IToonSkill {
    code: string;
    description: string;

    imageSrc: string;

    level: string;
    maxLevel: string;
}


export interface IToonGearPiece {
    code: string;
}


export interface IToonGear {
    pieces: IToonGearPiece[]
}


export interface IToonCurrentGear {
    requiredGear: IToonGear,

    missingPieces: IToonGearPiece[]
}


//TODO change to enum
export interface AbilityClass {
    code: string,
    description: string;
}

export interface IToonAbilityClasses {
    abilities: AbilityClass[]
}


//TODO implement name/side/type/faction
export interface IToonDescription {
    code: string;
    description: string;

    imageSrc: string;

    star: number;
    level: number;

    categories: string[]; //todo change this....
}


export interface IToonStats extends IToonPower {
    primary: IToonPrimaryAttributes & IToonPrimaryAttributesGrowth;

    general: IToonGeneral;

    physicalOffense: IToonPhysicalOffence;

    physicalSurvivability: IToonPhysicalSurvivability;

    specialOffense: IToonSpecialOffence;

    specialSurvivability: IToonSpecialSurvivability;
}


/* end toon info*/


export type SwgohggUnits = { [id: string]: SwgohggUnit[] };

export type Profile = User & UserStats & UserInfo;

export type Collection = Character[];
export type ShipCollection = Ship[];

export type ModCollection = Mod[];


export type UserToonInfo = IToonDescription & IToonAbilityClasses
    & IToonCurrentGear & IToonSkill & IToonModCombinedStats & IToonMods
    & IToonStats
    & IToonGalacticPowerBreakdown;
