import './__config__/init_mocks';


import {swgoh, Swgoh} from "../src";
import {ConcurrentQueue, QueueConfig} from '../src/queue'
import {pikax, collection, ships, mods, guildUrl} from "./__config__/results";


describe('swgoh', () => {

  it('should create new intance', async ()=>{

    const config: QueueConfig = {
      maxQueueSize: 2,
      safeQueueSize: 1,
      simultaneousRequests: 1,
      tick: 20
    };
    const s = new Swgoh(new ConcurrentQueue(config));
    const p = await s.profile(pikax.username);

    expect(p).not.toBeNull();
    expect(p.username).toBe(pikax.username);
  });


  it('should get profile info', async () => {
    const profile = await swgoh.profile(pikax.username);

    expect(profile).not.toBeNull();

    expect(profile.galacticPower).toBeGreaterThanOrEqual(pikax.galacticPower);
    expect(profile.charactersGalacticPower).toBeGreaterThanOrEqual(pikax.charactersGalacticPower);
    expect(profile.shipsGalacticPower).toBeGreaterThanOrEqual(pikax.shipsGalacticPower);
    expect(profile.pVEBattlesWon).toBeGreaterThanOrEqual(pikax.pVEBattlesWon);
    expect(profile.pVEHardBattlesWon).toBeGreaterThanOrEqual(pikax.pVEHardBattlesWon);
    expect(profile.galacticWarBattlesWon).toBeGreaterThanOrEqual(pikax.galacticWarBattlesWon);
    expect(profile.arenaBattlesWon).toBeGreaterThanOrEqual(pikax.arenaBattlesWon);
    expect(profile.guildCurrencyEarned).toBeGreaterThanOrEqual(pikax.guildCurrencyEarned);
    expect(profile.raidsWon).toBeGreaterThanOrEqual(pikax.raidsWon);
    expect(profile.shipBattlesWon).toBeGreaterThanOrEqual(pikax.shipBattlesWon);
    expect(profile.collectionScore).toBeGreaterThanOrEqual(pikax.collectionScore);
    expect(profile.characters).toBeGreaterThanOrEqual(pikax.characters);
    expect(profile.characters7).toBeGreaterThanOrEqual(pikax.characters7);
    expect(profile.username).toBe(pikax.username);
    expect(profile.userId).toBe(pikax.userId);
    expect(profile.allyCode).toBe(pikax.allyCode);
    expect(profile.joined).toBe(pikax.joined);

    expect(pikax.characters6).toBeGreaterThanOrEqual(0);
    expect(pikax.gearXII).toBeGreaterThanOrEqual(2);
    expect(pikax.gearXI).toBeGreaterThanOrEqual(0);
    expect(pikax.gearX).toBeGreaterThanOrEqual(0);
    expect(pikax.gearIX).toBeGreaterThanOrEqual(0);
    expect(pikax.gearVIII).toBeGreaterThanOrEqual(0);
    expect(pikax.arenaRank).toBeGreaterThanOrEqual(1);
    expect(pikax.level).toBeGreaterThanOrEqual(pikax.level);


    expect(profile.guild).not.toBeNull();
    expect(profile.guildUrl).not.toBeNull();
  });

  it('should get collection', async () => {
    const toons = await swgoh.collection(pikax.username);
    expect(toons).not.toBeNull();

    expect(toons.length).toBeGreaterThanOrEqual(collection.length);

    //todo add toon check to validate data
  });

  it('should get ship', async () => {
    const fleet = await swgoh.ship(pikax.username);
    expect(fleet).not.toBeNull();

    expect(fleet.length).toBeGreaterThanOrEqual(ships.length)

    //todo add ship check to validate data
  });

  it('should get mods', async () => {
    const m = await swgoh.mods(pikax.username);
    expect(m).not.toBeNull();

    expect(m.length).toBeGreaterThanOrEqual(mods.length);
  });

  it('should get guild info: uri', async () => {
    const g = await swgoh.guild(guildUrl.uri);
    expect(g).not.toBeNull();

    expect(g.length).toBeGreaterThanOrEqual(20);
  });

  it('should get guild info: opts', async () => {
    const g = await swgoh.guild({id: 232, name: "requiem"})
    expect(g).not.toBeNull();

    expect(g.length).toBeGreaterThanOrEqual(20);
  });


  it('invalid guid', async () => {
    expect.assertions(1);
    try{
      await swgoh.guild(guildUrl.invalid);
    }catch(e) {
      expect(e.message).toContain("Error");
    }
  });

  it('error parsing id guid', async () => {
    expect.assertions(1);
    try{
      await swgoh.guild({id: undefined, name:"requiem"});
    }catch(e) {
      expect(e.message).toContain("Error");
    }
  });



  it('error parsing name guid', async () => {
    expect.assertions(1);
    try{
      await swgoh.guild({id: 232, name: ''});
    }catch(e) {
      expect(e.message).toContain("Error");
    }
  });

  it('error parsing name is undefined guid', async () => {
    expect.assertions(1);
    try{
      await swgoh.guild({id: 232, name: undefined});
    }catch(e) {
      expect(e.message).toContain("Error");
    }
  });


  it('should get units: str', async () => {
    const u = await swgoh.units(pikax.guildUrl);
    expect(u).not.toBeNull();

    expect(u["GRIEVOUS"]).not.toBeNull();
  });


  it('should get units: opts', async () => {
    const u = await swgoh.units({id: 232, name: "requiem"});
    expect(u).not.toBeNull();

    expect(u["GRIEVOUS"]).not.toBeNull();
  });

  it('invalid guid units', async() => {
    expect.assertions(1);
    try{
      await swgoh.units({id: undefined, name: "requiem"});
    }catch(e) {
      expect(e.message).toContain("Error");
    }
  });

  it('invalid guid units: std',async () => {
    expect.assertions(1);
    try{
      await swgoh.units(pikax.username);
    }catch(e) {
      expect(e.message).toContain("Error");
    }
  });
});