//TODO better name

interface MapValue {
  r: RegExp,
  p: string,
  e: any,
}
import {stats} from "./results";


const map: MapValue[] = [
  {r: /u\/[^\/]*\/collection\/\d+\/.*$/, p: "user_darth-maul.html", e: {}}, //user toon info
  {r: /characters\/stats/, p: "stats.html", e: stats},
  {r: /ships\/stats/, p: "shipStats.html", e: {}},
];


export function getMatch(uri: string): MapValue {
  const r = map.filter(x => x.r.test(uri));
  if (r.length > 1) {
    throw {message: "to many matches for: " + uri, matches: r};
  }
  if(r.length === 0){
    console.log('no match found for '+uri);
    return;
  }
  return r[0];
}


export function getFp(uri: string) {
  return getMatch(uri).p;
}


export function expectedResult(uri: string) {
  return getMatch(uri).r;
}