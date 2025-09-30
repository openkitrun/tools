import { transformCultureNames, transformToTypeDefinitions } from "./transforms";

interface LanguageCodeItem {
  culture: string;
  langCode: string;
  displayName: string;
  folderName?: string;
}

interface LanguageCodesData {
  language_codes_list: LanguageCodeItem[];
}

export const languageCodesTemplate = (input: LanguageCodesData): string => {
  return `
import type { LanguageCodes } from './types';

export const languageCodes: LanguageCodes = ${transformCultureNames(input)} as const;

export default languageCodes;
  `;
};

export const typesTemplate = (input: LanguageCodesData): string => {
  return `
${transformToTypeDefinitions(input)}
  `;
};
