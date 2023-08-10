const { transformCultureNames, transformToTypeDefinitions } = require('./transforms');

const cultureCodesTemplate = (input) => {
  return `
import { CultureCodes } from './types';

export const cultureCodes: CultureCodes = ${transformCultureNames(input)} as const;

export default cultureCodes;
  `;
};

const typesTemplate = (input) => {
  return `
${transformToTypeDefinitions(input)}
  `;
};

module.exports = {
  cultureCodesTemplate,
  typesTemplate,
};
