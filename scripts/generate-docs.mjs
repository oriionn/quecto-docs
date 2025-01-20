import * as OpenAPI from 'fumadocs-openapi';
import { readdirSync, rmSync, mkdir, mkdirSync, cpSync, rmdirSync, existsSync } from "fs";
import {join} from "path";
const out = './content/docs/api';

// Clean the output directory
readdirSync(out).forEach(file => {
  if (file.endsWith('.mdx') && !file.startsWith('index')) {
    rmSync(join(out, file));
  }
});

if (existsSync(`${out}/fr`)) rmdirSync(`${out}/fr`);

void OpenAPI.generateFiles({
  // input files
  input: ['./openapi.json'],
  output: out,
  per: "operation"
});

mkdirSync(`${out}/fr`);
void OpenAPI.generateFiles({
  // input files
  input: ['./openapi.fr.json'],
  output: `${out}/fr`,
  per: "operation",
}).then(() => {
  readdirSync(`${out}/fr`).forEach(file => {
    let name = file.slice(0, -4)
    cpSync(`${out}/fr/${file}`, `${out}/${name}.fr.mdx`);
  })

  rmSync(`${out}/fr`, {recursive: true, force: true});
})