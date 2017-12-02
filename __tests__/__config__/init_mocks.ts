if(process.env.mock) {
  jest.setMock('../../src/queue', require('./../__mocks__/queue').default);
}