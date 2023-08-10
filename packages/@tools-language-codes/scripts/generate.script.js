const path = require('path');
const fs = require('fs');
const fsPromise = require('fs/promises');

const language_codes = require('../_data/language-codes.json');
const { languageCodesTemplate, typesTemplate } = require('./templates');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const cultureNamesFilePath = path.join(rootDir, `/src`, `/language-codes.ts`);
const typesFilePath = path.join(rootDir, `/src`, `/types.ts`);

Promise.all([
  fsPromise.writeFile(typesFilePath, typesTemplate(language_codes), formatFile),
  fsPromise.writeFile(cultureNamesFilePath, languageCodesTemplate(language_codes), formatFile),
]).then(() => {
  console.info('Write src/types.ts');
  console.info('Write src/language-codes.ts');
});
