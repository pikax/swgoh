import {CharacterStats, ShipStats} from "./interface";
import * as url from "url";

const requestretry = require("requestretry");

const baseurl = "https://raw.githubusercontent.com/pikax/swgoh/master/static/";


export function getCharacters(cached = true): Promise<CharacterStats[]> {
  if (cached) {
    return require("../static/characters.json");
  }

  return requestretry(url.resolve(baseurl, "characters.json"))
    .then(x => x.body);
}

export function getShips(cached = true): Promise<ShipStats[]> {
  if (cached) {
    return require("../static/ships.json");
  }

  return requestretry(url.resolve(baseurl, "ships.json"))
    .then(x => x.body);
}
