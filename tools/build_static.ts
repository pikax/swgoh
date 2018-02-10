import * as cheerio from 'cheerio';

const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;

const writeFile = promisify(fs.writeFile);


// const parser = require('../src/parser');
// const ConcurrentQueue = require('../src/queue').ConcurrentQueue;

import {parseCharacterStats, parseShipStats} from '../src/parser';
import {ConcurrentQueue} from '../src/queue';


const queue = new ConcurrentQueue();



const charactersUrl = "https://swgoh.gg/characters/stats";
const shipsUrl = "https://swgoh.gg/ships/stats/";


const getCheerio = (uri)=> {
	return queue.queue(uri).then(x => cheerio.load(x.body));
};

const a = [];

let p:any = getCheerio(charactersUrl)
	.then(parseCharacterStats)
	.then(x=>{
			return writeFile(path.resolve(__dirname, './../static/characters.json'), JSON.stringify(x))
				.then(x);
	})
	.then(x=>{
		//todo add each character full info

	});

a.push(p);


p = getCheerio(shipsUrl)
	.then(parseShipStats)
	.then(x=>{
		return writeFile(path.resolve(__dirname, './../static/ships.json'), JSON.stringify(x))
			.then(x);
	})
	.then(x=>{
		//todo add each character full info
	});


a.push(p);


Promise.all(a);













