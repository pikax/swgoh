/* istanbul ignore next */
if(process.env.mock) {
  jest.setMock('../../src/queue', require('./../__mocks__/queue').default);
}else{
  jest.setTimeout(30000);
}