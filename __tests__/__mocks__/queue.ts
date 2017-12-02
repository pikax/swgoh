// import * as fs from "fs";

//
// class __MOCK_Queue {
//   constructor(config) {
//     console.log('createrd')
//   }
//
//   queue(uri: string) {
//     return fs.readFile('../__mockData__/stats.html');
//   }
//
// }
//
//
// export class Queue extends __MOCK_Queue {
//
// }


import {getFp, getMatch} from './../__config__/map'
import {promisify} from 'util'


const readFile = promisify(require('fs').readFile);

import * as path from "path";


class MOCKEDConcurrentQueue {
  constructor(config) {
    console.log('mocking')
  }

  queue = async (opts) => {
    let uri: string;

    if (typeof opts === 'string') {
      uri = opts;
    } else {
      uri = opts.uri;
    }

    const match = getMatch(uri);

    if (!match) {
      throw new Error('invalid match: ' + uri);
    }

    const fp = path.resolve(__dirname, '..', '__mockData__', match.p);
    const body = await readFile(fp);

    return {
      body
    }
  }
}


const _queue = jest.genMockFromModule('../../src/queue');
_queue.ConcurrentQueue = MOCKEDConcurrentQueue


export default _queue;


