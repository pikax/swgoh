const pkg = require( './package.json' );
import typescript from 'rollup-plugin-typescript2';

module.exports =  {
  input: 'index.ts',

  plugins:[
    typescript({clean:false}),
  ],

    output: [
        {
            format: "cjs",
            file: pkg.main,
            sourcemap: true,
            banner: "/* eslint-disable */",
        },
        {
            format: "es",
            file: pkg.module,
            sourcemap: true,
            banner: "/* eslint-disable */",
        },

    ],
  external: [ 'cheerio', 'request', 'lodash', 'debug', 'url', 'path', 'vm', 'util']
};