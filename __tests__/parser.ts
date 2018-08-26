import './__config__/init_mocks';

import { parseToonStats } from "../src/parser/toon";
import * as cheerio from "cheerio";
import { parseGuild } from '../src/parser/guild';
import { ConcurrentQueue } from '../src/queue'


const queue = new ConcurrentQueue();

describe("parser", () => {


  describe("toon", () => {


    /* it('should parse stats', async () => {
       const cs = await queue.queue("https://swgoh.gg/u/pikax/collection/82/darth")
         .then(x => x.body)
         .then(x => cheerio.load(x))
         .then(parseToonStats);
 
       expect(cs).not.toBeUndefined();
 
       expect(cs.power).toBe(darthMaul.power);
       expect(cs.statPower).toBe(darthMaul.statPower);
 
       expect(cs.primary.str).toBe(darthMaul.primary.str);
       expect(cs.primary.agi).toBe(darthMaul.primary.agi);
       expect(cs.primary.int).toBe(darthMaul.primary.int);
 
       expect(cs.primary.strGrowth).toBe(darthMaul.primary.strGrowth);
       expect(cs.primary.agiGrowth).toBe(darthMaul.primary.agiGrowth);
       expect(cs.primary.intGrowth).toBe(darthMaul.primary.intGrowth);
 
 
       expect(cs.general.health).toBe(darthMaul.general.health);
       expect(cs.general.protection).toBe(darthMaul.general.protection);
       expect(cs.general.speed).toBe(darthMaul.general.speed);
       expect(cs.general.criticalDamagePerc).toBeCloseTo(darthMaul.general.criticalDamagePerc, 5);
       expect(cs.general.potencyPerc).toBeCloseTo(darthMaul.general.potencyPerc, 5);
       expect(cs.general.tenacityPerc).toBeCloseTo(darthMaul.general.tenacityPerc, 5);
       expect(cs.general.healthStealPerc).toBeCloseTo(darthMaul.general.healthStealPerc, 5);
 
 
       expect(cs.physicalOffense.physicalDamage).toBe(darthMaul.physicalOffense.physicalDamage);
       expect(cs.physicalOffense.physicalCriticalChancePerc).toBeCloseTo(darthMaul.physicalOffense.physicalCriticalChancePerc, 5);
       expect(cs.physicalOffense.armorPenetration).toBe(darthMaul.physicalOffense.armorPenetration);
       expect(cs.physicalOffense.physicalAccuracyPerc).toBeCloseTo(darthMaul.physicalOffense.physicalAccuracyPerc, 5);
 
       expect(cs.physicalSurvivability.armorPerc).toBeCloseTo(darthMaul.physicalSurvivability.armorPerc, 5);
       expect(cs.physicalSurvivability.dodgeChangePerc).toBeCloseTo(darthMaul.physicalSurvivability.dodgeChangePerc, 5);
       expect(cs.physicalSurvivability.physicalCriticalAvoidancePerc).toBeCloseTo(darthMaul.physicalSurvivability.physicalCriticalAvoidancePerc, 5);
 
       expect(cs.specialOffense.specialDamage).toBe(darthMaul.specialOffense.specialDamage);
       expect(cs.specialOffense.specialCriticalChancePerc).toBeCloseTo(darthMaul.specialOffense.specialCriticalChancePerc, 5);
       expect(cs.specialOffense.resistancePenetration).toBe(darthMaul.specialOffense.resistancePenetration);
       expect(cs.specialOffense.specialAccuracyPerc).toBeCloseTo(darthMaul.specialOffense.specialAccuracyPerc, 5);
 
       expect(cs.specialSurvivability.resistancePerc).toBeCloseTo(darthMaul.specialSurvivability.resistancePerc, 5);
       expect(cs.specialSurvivability.deflectionChangePerc).toBeCloseTo(darthMaul.specialSurvivability.deflectionChangePerc, 5);
       expect(cs.specialSurvivability.specialCriticalAvoidancePerc).toBeCloseTo(darthMaul.specialSurvivability.specialCriticalAvoidancePerc, 5);
     })
 */

    it('should parse galactic power breakdown', () => {

    })

  })






  describe("Guild", () => {


    it('should parse guild: requiem', async () => {
      const $ = await queue.queue("https://swgoh.gg/g/232/requiem/")
        .then(x => x.body)
        .then(x => cheerio.load(x))

      const g = parseGuild($);


      expect(g).toBeTruthy();

      expect(g.name).toBe("Requiem");
      expect(g.imageSrc).toBe("//swgoh.gg/static/img/assets/tex.guild_icon_oldrepublic.png");
      expect(g.description).toContain("KingKen#");

      expect(g.galacticPower).toBeGreaterThan(2);
      expect(g.averageGalacticPower).toBeGreaterThan(2);



      expect(g.rank).toBe("NR");
      expect(g.raidPoints).toBeGreaterThan(1);
      expect(g.arenaRank).toBeGreaterThan(1);


      expect(g.memberCount).toBeGreaterThan(1);
      expect(g.profileCount).toBeGreaterThan(1);


      expect(g.lastUpdated).toBeInstanceOf(Date);



      for (const u of g.users) {
        expect(u.username).toBeTruthy();
        expect(u.description).toBeTruthy();

        expect(u.galacticPower).toBeGreaterThanOrEqual(1);
        expect(u.collectionScore).toBeGreaterThanOrEqual(1);
        expect(u.arenaAverage).toBeGreaterThanOrEqual(1);

        u.arenaRank
          ? expect(u.arenaRank).toBeGreaterThanOrEqual(1)
          : expect(u.arenaRank).toBeUndefined(); // arena rank can be undefined
      }


    })

  })


});