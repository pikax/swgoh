/* istanbul ignore next */
if(process.env.mock) {
  jest.setMock('../../src/queue', require('./../__mocks__/queue').default);
}else{
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
}