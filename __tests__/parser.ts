import './__config__/init_mocks';

import {parseToonStats} from "../src/parser/toon";
import * as cheerio from "cheerio";
import {ConcurrentQueue, QueueConfig} from "../src/queue";
import {darthMaul} from "./__config__/results";

const queue = new ConcurrentQueue(QueueConfig);

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

    it('should parse galactic power breakdown', ()=>{

    })

  })


});