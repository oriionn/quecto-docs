import * as OpenAPI from 'fumadocs-openapi';
import { readdirSync, rmSync } from "fs";
import {join} from "path";
const out = './content/docs/api';

// Clean the output directory
readdirSync(out).forEach(file => {
  if (file.endsWith('.mdx') && !file.startsWith('index')) {
    rmSync(join(out, file));
  }
});

void OpenAPI.generateFiles({
  // input files
  input: ['./openapi.json'],
  output: out,
  per: "operation"
});
