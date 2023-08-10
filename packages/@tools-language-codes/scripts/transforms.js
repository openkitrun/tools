function transformToEnum(input) {
  const enumLanguageTypes = input.language_codes_list
    .map((item) => {
      const key = item.culture.replace(/[\s-]/g, '_').toUpperCase();
      return `  ${key} = '${key}',`;
    })
    .join('\n');

  return `{\n${enumLanguageTypes}\n}`;
}

function transformCultureNames(input) {
  const languageCodes = input.language_codes_list.reduce((acc, item) => {
    const key = item.culture.replace(/[\s-]/g, '_').toUpperCase();
    acc[key] = item;

    return acc;
  }, {});

  return JSON.stringify(languageCodes, null, 2);
}

function transformToTypeDefinitions(data) {
  let enums = 'export enum LanguageTypes {\n';
  let types = '';
  let interfaceBody = 'export interface LanguageCodes {\n';

  data.language_codes_list.forEach((item) => {
    //culture.replace(/[\s-]/g, '_').toUpperCase();
    let enumKey = item.culture.replace(/[\s-]/g, '_').toUpperCase();
    let key = item.culture
      .split(/[-\s]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    enums += `  ${enumKey} = '${enumKey}',\n`;

    types += `export type ${key} = {
  /**
   * Defines the combination of a specific language and a geographic location.
   *
   * @Type ${item.culture}
   *
   */
  culture: '${item.culture}';
  /**
   * IANA/Unicode language-tag-extension.
   *
   * @Type ${item.langCode}
   *
   */
  langCode: '${item.langCode}';
  /**
   * A human-readable name for the language, including the region.
   * if applicable (e.g., '${item.displayName}').
   *
   * ref: English name of language
   *
   * @Type string
   *
   */
  displayName: string;
}\n\n`;

    interfaceBody += `  [LanguageTypes.${enumKey}]: ${key},\n`;
  });

  enums += '}\n\n';
  interfaceBody += '}\n\n';

  return enums + types + interfaceBody;
}

module.exports = {
  transformCultureNames,
  transformToTypeDefinitions,
};
