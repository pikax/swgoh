// jest.setMock('../src/queue', require("./__mocks__/queue").default)

import {swgoh, ships, characters} from '../src'
import {baseCharacterStats, baseShipStats} from "../src/cache";

describe('test base', () => {

  it('character stats',  async () => {
    const characters = await baseCharacterStats();
    expect(characters).toMatchSnapshot()
  });

  it('ships stats',  async () => {
    const characters = await baseShipStats();
    expect(characters).toMatchSnapshot()
  });



  it('cache character stats',  async () => {
    const c = await baseCharacterStats();
    expect(characters).toMatchObject(c);
  });

  it('cache ships stats',  async () => {
    const s = await baseShipStats();
    expect(ships).toMatchObject(s);
  });
});