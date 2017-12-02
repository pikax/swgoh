const pkg = require( './package.json' );
import typescript from 'rollup-plugin-typescript2';

module.exports =  {
  input: './src/index.ts',

  plugins:[
    typescript({clean:true}),
  ],

  output:{
    file: pkg.main,

    format:'cjs' //probably changing to es when node supports it
  },
  external: [ 'cheerio', 'lodash', 'debug', 'url', 'vm', 'util']
};