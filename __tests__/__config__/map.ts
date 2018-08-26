//TODO better name

interface MapValue {
  r: RegExp,
  p: string,
}

const map: MapValue[] = [
  {r: /u\/[^\/]*\/collection\/\d+\/.*$/, p: "user_darth-maul.html"}, //user toon info
  {r: /characters\/stats/, p: "stats.html"},
  {r: /ships\/stats/, p: "shipStats.html"},
  {r: /collection\/$/, p: 'collection.html'},
  {r: /u\/pikax\/$/, p: 'user.html'},
  {r: /u\/gattsu\/$/, p: 'no_allyCode.html'},
  {r: /u\/pikax\/ships/, p: 'ships.html'},
  {r: /u\/taggar91\/ships/, p: 'ships.html'},
  {r: /u\/[^\/]*\/mods\/$/, p: 'mods.html'},
  {r: /mods\/\?page/, p: 'mods_last.html'},
  {r: /g\/\d+\//, p: 'guild.html'},
  {r: /api\/guilds\/\d+\//, p: 'units.json'},

  {r: /g\/232\/requiem\//, p: 'requiem.html'},

];


export function getMatch(uri: string): MapValue {
  const r = map.filter(x => x.r.test(uri));
  if (r.length > 1) {
    throw {message: "to many matches for: " + uri, matches: r};
  }
  if (r.length === 0) {
    console.log('no match found for ' + uri);
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