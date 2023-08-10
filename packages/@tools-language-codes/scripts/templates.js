const { transformToEnum, transformCultureNames, transformToTypeDefinitions } = require('./transforms');

const lenguasCodesTemplate = (input) => {
  return `
/**
 * Define all language types
 *
 */
export enum LanguageTypes ${transformToEnum(input)}

export interface LanguageCodes {
  /**
   * Defines the combination of a specific language and a geographic location.
   *
   * @Type string
   *
   */
  culture: string;
  /**
   * IANA/Unicode language-tag-extension.
   *
   * @Type string
   *
   */
  langCode: string;
  /**
   * A human-readable name for the language, including the region.
   * if applicable (e.g., 'English (United States)').
   *
   * ref: English name of language
   *
   * @Type string
   *
   */
  displayName: string;
}

export const languageCodes: Record<LanguageTypes, LanguageCodes> = ${transformCultureNames(input)} as const;

export default languageCodes;
  `;
};

const lenguasCodesTemplateV2 = (input) => {
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
  lenguasCodesTemplate,
  lenguasCodesTemplateV2,
  typesTemplate,
};
