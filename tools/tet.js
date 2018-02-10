// import {swgoh} from '../dist'

const swgoh = require('../dist').swgoh;

const process = async (profile)=>{
    return swgoh.mods(profile);
};


const start = new Date();


process('pikax')
    .then(p=>{
        var end = new Date() - start;
        console.info("Execution time: %dms", end);
    })
