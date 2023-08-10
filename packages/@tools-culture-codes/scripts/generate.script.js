const path = require('path');
const fs = require('fs');
const fsPromise = require('fs/promises');

const cultureCodesList = require('../_data/culture-codes.json');
const { cultureCodesTemplate, typesTemplate } = require('./templates');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const cultureNamesFilePath = path.join(rootDir, `/src`, `/culture-codes.ts`);
const typesFilePath = path.join(rootDir, `/src`, `/types.ts`);

Promise.all([
  fsPromise.writeFile(typesFilePath, typesTemplate(cultureCodesList), formatFile),
  fsPromise.writeFile(cultureNamesFilePath, cultureCodesTemplate(cultureCodesList), formatFile),
]).then(() => {
  console.info('Write src/types.ts');
  console.info('Write src/culture-codes.ts');
});
