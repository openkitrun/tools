const path = require('path');
const fs = require('fs');
const fsPromise = require('fs/promises');

const language_codes = require('../_data/language-codes.json');
const { lenguasCodesTemplate } = require('./templates');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const cultureNamesFilePath = path.join(rootDir, `/src`, `/lenguas-codes.ts`);

Promise.all([fsPromise.writeFile(cultureNamesFilePath, lenguasCodesTemplate(language_codes), formatFile)]).then(() => {
  console.info('Write src/lenguas-codes.ts');
});
