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


export interface Guild {

	users: {
		username: string,
		description: string,
	}
}

export interface User {
	username: string;
	userId: number;
	arenaRank: number;
	level: number;
	guild: string;
	guildUrl: string;
	allyCode: string;
	joined: Date
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


export type Profile = User & UserStats & UserInfo;


export type Collection = Character[];
export type ShipCollection = Ship[];
