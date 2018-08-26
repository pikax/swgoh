//import './__config__/init_mocks';


import {swgoh, Swgoh} from "../index";
import {ConcurrentQueue, QueueConfig} from '../src/queue'
import {pikax, collection, ships, mods, guildUrl, gattsu, ledia} from "./__config__/results";


jest.setTimeout(30000);

describe('swgoh', () => {

    it('should create new intance', async () => {

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
        expect(profile.playername).toBe(pikax.playername);
        expect(profile.userId).toBe(pikax.userId);
        expect(profile.allyCode).toBe(pikax.allyCode);
        expect(profile.joined).toBe(pikax.joined);
        expect(profile.lastUpdatedUTC).toBeDefined();
        expect(profile.lastUpdatedUTC.slice(-1)).toBe("Z"); //should be UTC



        expect(profile.characters6).toBeGreaterThanOrEqual(0);
        expect(profile.gearXII).toBeGreaterThanOrEqual(2);
        expect(profile.gearXI).toBeGreaterThanOrEqual(0);
        expect(profile.gearX).toBeGreaterThanOrEqual(0);
        expect(profile.gearIX).toBeGreaterThanOrEqual(0);
        expect(profile.gearVIII).toBeGreaterThanOrEqual(0);
        expect(profile.arenaRank).toBeGreaterThanOrEqual(1);
        expect(profile.level).toBeGreaterThanOrEqual(pikax.level);


        expect(profile.guild).not.toBeNull();
        expect(profile.guildUrl).not.toBeNull();
    });



    it('should get profile "gattsu" #2', async () => {
        const profile = await swgoh.profile("gattsu");

        expect(profile.galacticPower).toBeGreaterThanOrEqual(gattsu.galacticPower);
        expect(profile.charactersGalacticPower).toBeGreaterThanOrEqual(gattsu.charactersGalacticPower);
        expect(profile.shipsGalacticPower).toBeGreaterThanOrEqual(gattsu.shipsGalacticPower);
        expect(profile.pVEBattlesWon).toBeGreaterThanOrEqual(gattsu.pVEBattlesWon);
        expect(profile.pVEHardBattlesWon).toBeGreaterThanOrEqual(gattsu.pVEHardBattlesWon);
        expect(profile.galacticWarBattlesWon).toBeGreaterThanOrEqual(gattsu.galacticWarBattlesWon);
        expect(profile.arenaBattlesWon).toBeGreaterThanOrEqual(gattsu.arenaBattlesWon);
        expect(profile.guildCurrencyEarned).toBeGreaterThanOrEqual(gattsu.guildCurrencyEarned);
        expect(profile.raidsWon).toBeGreaterThanOrEqual(gattsu.raidsWon);
        expect(profile.shipBattlesWon).toBeGreaterThanOrEqual(gattsu.shipBattlesWon);
        expect(profile.collectionScore).toBeGreaterThanOrEqual(gattsu.collectionScore);
        expect(profile.characters).toBeGreaterThanOrEqual(gattsu.characters);
        expect(profile.characters7).toBeGreaterThanOrEqual(gattsu.characters7);
        expect(profile.username).toBe(gattsu.username);
        expect(profile.userId).toBe(gattsu.userId);
        expect(profile.allyCode).toBeNull();
        expect(profile.joined).toBe(gattsu.joined);
        expect(profile.lastUpdatedUTC).toBeDefined();

        expect(profile.characters6).toBeGreaterThanOrEqual(0);
        expect(profile.gearXII).toBeGreaterThanOrEqual(0);
        expect(profile.gearXI).toBeGreaterThanOrEqual(0);
        expect(profile.gearX).toBeGreaterThanOrEqual(0);
        expect(profile.gearIX).toBeGreaterThanOrEqual(0);
        expect(profile.gearVIII).toBeGreaterThanOrEqual(0);
        expect(profile.arenaRank).toBeGreaterThanOrEqual(1);
        expect(profile.level).toBeGreaterThanOrEqual(gattsu.level);
    });


    it('should get profile "ledia" #13', async () => {
        const profile = await swgoh.profile("ledia");

        expect(profile.galacticPower).toBeGreaterThanOrEqual(ledia.galacticPower);
        expect(profile.charactersGalacticPower).toBeGreaterThanOrEqual(ledia.charactersGalacticPower);
        expect(profile.shipsGalacticPower).toBeGreaterThanOrEqual(ledia.shipsGalacticPower);
        expect(profile.pVEBattlesWon).toBeGreaterThanOrEqual(ledia.pVEBattlesWon);
        expect(profile.pVEHardBattlesWon).toBeGreaterThanOrEqual(ledia.pVEHardBattlesWon);
        expect(profile.galacticWarBattlesWon).toBeGreaterThanOrEqual(ledia.galacticWarBattlesWon);
        expect(profile.arenaBattlesWon).toBeGreaterThanOrEqual(ledia.arenaBattlesWon);
        expect(profile.guildCurrencyEarned).toBeGreaterThanOrEqual(ledia.guildCurrencyEarned);
        expect(profile.raidsWon).toBeGreaterThanOrEqual(ledia.raidsWon);
        expect(profile.shipBattlesWon).toBeGreaterThanOrEqual(ledia.shipBattlesWon);
        expect(profile.collectionScore).toBeGreaterThanOrEqual(ledia.collectionScore);
        expect(profile.characters).toBeGreaterThanOrEqual(ledia.characters);
        expect(profile.characters7).toBeGreaterThanOrEqual(ledia.characters7);
        expect(profile.username).toBe(ledia.username);
        expect(profile.userId).toBe(ledia.userId);
        expect(profile.allyCode).toBeDefined();
        expect(profile.joined).toBe(ledia.joined);
        expect(profile.lastUpdatedUTC).toBeDefined();

        expect(profile.characters6).toBeGreaterThanOrEqual(0);
        expect(profile.gearXII).toBeGreaterThanOrEqual(0);
        expect(profile.gearXI).toBeGreaterThanOrEqual(0);
        expect(profile.gearX).toBeGreaterThanOrEqual(0);
        expect(profile.gearIX).toBeGreaterThanOrEqual(0);
        expect(profile.gearVIII).toBeGreaterThanOrEqual(0);
        expect(profile.level).toBeGreaterThanOrEqual(ledia.level);
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


    it('should get ship with missing crew members', async () => {
        const fleet = await swgoh.ship("taggar91");
        expect(fleet).not.toBeNull();
    });

    it('should get mods', async () => {
        const m = await swgoh.mods(pikax.username);
        expect(m).not.toBeNull();

        expect(m.length).toBeGreaterThanOrEqual(mods.length);
    });

    it('should get guild info: uri', async () => {
        const g = await swgoh.guild(guildUrl.uri);
        expect(g).not.toBeNull();

        expect(g.users.length).toBeGreaterThanOrEqual(20);
    });

    it('should get guild info: opts', async () => {
        const g = await swgoh.guild({id: 232, name: "requiem"})
        expect(g).not.toBeNull();
        expect(g.users.length).toBeGreaterThanOrEqual(20);
    });


    it('invalid guid', async () => {
        expect.assertions(1);
        try {
            await swgoh.guild(guildUrl.invalid);
        } catch (e) {
            expect(e.message).toContain("Error");
        }
    });

    it('error parsing id guid', async () => {
        expect.assertions(1);
        try {
            await swgoh.guild({id: undefined, name: "requiem"});
        } catch (e) {
            expect(e.message).toContain("Error");
        }
    });


    it('error parsing name guid', async () => {
        expect.assertions(1);
        try {
            await swgoh.guild({id: 232, name: ''});
        } catch (e) {
            expect(e.message).toContain("Error");
        }
    });

    it('error parsing name is undefined guid', async () => {
        expect.assertions(1);
        try {
            await swgoh.guild({id: 232, name: undefined});
        } catch (e) {
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

    it('invalid guid units', async () => {
        expect.assertions(1);
        try {
            await swgoh.units({id: undefined, name: "requiem"});
        } catch (e) {
            expect(e.message).toContain("Error");
        }
    });

    it('invalid guid units: std', async () => {
        expect.assertions(1);
        try {
            await swgoh.units(pikax.username);
        } catch (e) {
            expect(e.message).toContain("Error");
        }
    });



    it('should parse swgoh.gg username and in game name: xajx', async ()=>{
        const profile = await swgoh.profile("xajx");

        const playername= "AJ";
        const username = "xAJx";

        expect(profile.username).toBe(username);
        expect(profile.playername).toBe(playername);

    });

    /*
    it('should try to get logged in only info', async ()=>{

        swgoh.


    })*/

});