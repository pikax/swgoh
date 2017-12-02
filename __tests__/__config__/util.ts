import {resolve} from 'path';
import * as fs from "fs";


export function readFileSync(directory: string, filename: string){
  const f = resolve(__dirname, directory, filename);

  return fs.readFileSync(f);
}

