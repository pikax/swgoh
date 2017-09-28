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
    [x: number]: string;
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
export declare type SwgohggUnits = {
    [id: string]: SwgohggUnit[];
};
export declare type Profile = User & UserStats & UserInfo;
export declare type Collection = Character[];
export declare type ShipCollection = Ship[];
export declare type ModCollection = Mod[];
