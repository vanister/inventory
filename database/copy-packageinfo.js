import { resolve } from 'path';
import { writeFileSync } from 'fs';
import packagejson from './package.json';

const log = (...msg) => console.log('>>', ...msg);

const distdir = resolve('.', 'dist');
const packagepath = resolve(distdir, 'package.json');
const excludedFields = ['directories', 'devDependencies', 'scripts'];

log('package.json destination:', `'${distdir}'`);
log('excluded fields:', excludedFields);

const distpackagejson = {};

Object.getOwnPropertyNames(packagejson)
  .filter((f) => !excludedFields.includes(f))
  .forEach((f) => {
    distpackagejson[f] = packagejson[f];
  });

log(`writing package.json to '${distdir}' folder...`);

writeFileSync(packagepath, JSON.stringify(distpackagejson, null, 2));

log('done!');
