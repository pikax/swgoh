// jest.setMock('../src/queue', require("./__mocks__/queue").default)

import {getCharacters, getShips, swgoh} from '../src'
import {ConcurrentQueue, QueueConfig} from '../src/queue'
import {parseCharacterStats, parseShipStats} from '../src/parser'
import * as cheerio from 'cheerio'

const queue = new ConcurrentQueue(QueueConfig);



describe('test base', () => {

  it('character stats',  async () => {
    const characters = await queue.queue("https://swgoh.gg/characters/stats/")
      .then(x=>x.body)
      .then(x=>cheerio.load(x))
      .then(parseCharacterStats);

    expect(characters).toMatchSnapshot()
  });

  it('ships stats',  async () => {
    const ships = await queue.queue("https://swgoh.gg/ships/stats/")
      .then(x=>x.body)
      .then(x=>cheerio.load(x))
      .then(parseShipStats);

    expect(ships).toMatchSnapshot()
  });



  it('cache character stats',  async () => {
    const c = await getCharacters(true);
    const cc = await queue.queue("https://swgoh.gg/characters/stats/")
      .then(x=>x.body)
      .then(x=>cheerio.load(x))
      .then(parseCharacterStats);
    expect(c).toMatchObject(cc);
  });

  it('cache ships stats',  async () => {
    const s = await getShips(true);

    const cs = await queue.queue("https://swgoh.gg/ships/stats/")
      .then(x=>x.body)
      .then(x=>cheerio.load(x))
      .then(parseShipStats);


    expect(s).toMatchObject(cs);
  });
});