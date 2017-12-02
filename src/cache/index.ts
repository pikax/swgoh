import {CharacterStats, ShipStats} from "../interface";
import * as url from "url";
import {parseCharacterStats, parseShipStats} from "../parser";
import {swgohgg} from "../config";
import * as cheerio from "cheerio";

const requestretry = require("requestretry");


const getCheerio = (uri) => requestretry(uri).then(x => cheerio.load(x.body));
export function baseCharacterStats(): Promise<CharacterStats[]> {
  const uri = url.resolve(swgohgg, '/characters/stats');

  return getCheerio(uri).then(parseCharacterStats);
}

export function baseShipStats(): Promise<ShipStats[]> {
  const uri = url.resolve(swgohgg, '/ships/stats');
  return getCheerio(uri).then(parseShipStats);
}


export const characters = require('./characters.json');
export const ships = require('./ships.json');