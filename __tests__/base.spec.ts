// jest.setMock('../src/queue', require("./__mocks__/queue").default)

import {swgoh} from '../src'
import {getShips, getCharacters} from "../src/static";

describe('test base', () => {

  it('character stats',  async () => {
    const characters = await getCharacters(false);
    expect(characters).toMatchSnapshot()
  });

  it('ships stats',  async () => {
    const characters = await getShips(false);
    expect(characters).toMatchSnapshot()
  });



  it('cache character stats',  async () => {
    const c = await getCharacters(true);
    const cc = require('../static/characters.json');
    expect(c).toMatchObject(cc);
  });

  it('cache ships stats',  async () => {
    const s = await getShips(true);
    const cs = require('../static/ships.json');

    expect(s).toMatchObject(cs);
  });
});