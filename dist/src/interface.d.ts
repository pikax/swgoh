export declare enum GearLevel {
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
    crew: CharacterCore[];
    maxGalacticPower: number;
}
export interface Guild {
    users: {
        username: string;
        description: string;
    };
}
export interface User {
    username: string;
    userId: number;
    arenaRank: number;
    level: number;
    guild: string;
    guildUrl: string;
    allyCode: string;
    joined: Date;
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
export declare enum ModSlot {
    Transmitter = 0,
    Receiver = 1,
    Processor = 2,
    HoloArray = 3,
    DataBus = 4,
    Multiplexer = 5,
}
export declare enum ModSet {
    Health = 0,
    Defense = 1,
    CriticalDamage = 2,
    CriticalChance = 3,
    Tenacity = 4,
    Offense = 5,
    Potency = 6,
    Speed = 7,
}
export declare const TranslatedModName: {
    [ModSlot.Transmitter]: string;
    [ModSlot.Receiver]: string;
    [ModSlot.Processor]: string;
    [ModSlot.HoloArray]: string;
    [ModSlot.DataBus]: string;
    [ModSlot.Multiplexer]: string;
};
export declare enum ModPrimary {
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
export declare enum ModSecondary {
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
export declare type ModPrimaryValue = {
    type: ModPrimary;
    value: string;
};
export declare type ModSecondaryValue = {
    type: ModSecondary;
    value: string;
};
export interface Mod {
    description: string;
    tier: number;
    level: number;
    slot: ModSlot;
    primary: ModPrimaryValue;
    secondary: [ModSecondaryValue, ModPrimaryValue, ModSecondaryValue, ModSecondaryValue];
    character: string;
}
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
    tenacity: number;
    healthSteal: number;
}
export interface CharacterBaseAbilities {
    maxDamageAbility?: number;
    baseAbility?: number;
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
export declare type CharacterStats = CharacterCoreStats & CharacterBaseStats & CharacterBaseOffensive & CharacterBaseDefensive & CharacterBaseAbilities & CharacterBaseGear;
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
    tenacity: number;
}
export declare type ShipStats = CharacterCoreStats & ShipType & ShipBaseStats & ShipBaseOffensive & ShipBaseDefensive;
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
    pieces: IToonGearPiece[];
}
export interface IToonCurrentGear {
    requiredGear: IToonGear;
    missingPieces: IToonGearPiece[];
}
export interface AbilityClass {
    code: string;
    description: string;
}
export interface IToonAbilityClasses {
    abilities: AbilityClass[];
}
export interface IToonDescription {
    code: string;
    description: string;
    imageSrc: string;
    star: number;
    level: number;
    categories: string[];
}
export interface IToonStats extends IToonPower {
    primary: IToonPrimaryAttributes & IToonPrimaryAttributesGrowth;
    general: IToonGeneral;
    physicalOffense: IToonPhysicalOffence;
    physicalSurvivability: IToonPhysicalSurvivability;
    specialOffense: IToonSpecialOffence;
    specialSurvivability: IToonSpecialSurvivability;
}
export declare type SwgohggUnits = {
    [id: string]: SwgohggUnit[];
};
export declare type Profile = User & UserStats & UserInfo;
export declare type Collection = Character[];
export declare type ShipCollection = Ship[];
export declare type ModCollection = Mod[];
export declare type UserToonInfo = IToonDescription & IToonAbilityClasses & IToonCurrentGear & IToonSkill & IToonModCombinedStats & IToonMods & IToonStats & IToonGalacticPowerBreakdown;
