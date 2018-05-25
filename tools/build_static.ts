import * as cheerio from 'cheerio';

const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;

const writeFile = promisify(fs.writeFile);


// const parser = require('../src/parser');
// const ConcurrentQueue = require('../src/queue').ConcurrentQueue;

import {parseCharacterStats, parseShipStats} from '../src/parser';
import {ConcurrentQueue} from '../src/queue';
import * as request from "request";


const queue = new ConcurrentQueue();


const charactersUrl = "https://swgoh.gg/characters/stats";
const shipsUrl = "https://swgoh.gg/ships/stats/";
const allchar = "https://swgoh.gg/";


const getCheerio = (uri) => {
    return queue.queue(uri).then(x => cheerio.load(x.body));
};

const download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        // console.log('content-type:', res.headers['content-type']);
        // console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

const saveImage = (uri) => {
    return new Promise((resolve, reject) => download("https:"+uri, path.resolve("static/img/", path.basename(uri)), (err, result)=>{
        if(err){
            return reject(err);
        }
        resolve(result);
    }));
}

const a = [];

let p: any = getCheerio(charactersUrl)
    .then(parseCharacterStats)
    .then(x => {
        return writeFile(path.resolve(__dirname, './../static/characters.json'), JSON.stringify(x))
            .then(x);
    })
    .then(x => {
        //todo add each character full info

    });

a.push(p);


p = getCheerio(shipsUrl)
    .then(parseShipStats)
    .then(x => {
        return writeFile(path.resolve(__dirname, './../static/ships.json'), JSON.stringify(x))
            .then(x);
    })
    .then(x => {
        //todo add each character full info
    });


a.push(p);


p = getCheerio(allchar)
    .then($ => $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list.homepage-list.char-search > ul > li > a > div.char-portrait > div > img').toArray())
    .then(x => x.map(t => t.attribs['data-src']))
    // .then(x => x.slice(0, 5))
    // .then(console.log)
    .then(x=>x.map(saveImage))
    .then(x=>Promise.all(x));

a.push(p)


Promise.all(a);













