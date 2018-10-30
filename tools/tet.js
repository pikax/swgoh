// import {swgoh} from '../dist'

const swgoh = require('../dist/index.cjs').swgoh;

const process = async (profile)=>{
    return swgoh.collectionAlly(profile)
};


const start = new Date();


process('495616697')
.then(console.log)
    .then(p=>{
        var end = new Date() - start;
        console.info("Execution time: %dms", end);
    })
