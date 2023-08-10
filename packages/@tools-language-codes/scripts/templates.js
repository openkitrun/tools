const { transformCultureNames, transformToTypeDefinitions } = require('./transforms');

const languageCodesTemplate = (input) => {
  return `
import { LanguageCodes } from './types';

export const languageCodes: LanguageCodes = ${transformCultureNames(input)} as const;

export default languageCodes;
  `;
};

const typesTemplate = (input) => {
  return `
${transformToTypeDefinitions(input)}
  `;
};

module.exports = {
  languageCodesTemplate,
  typesTemplate,
};
