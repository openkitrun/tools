function transformToEnum(input) {
  const enumLanguageTypes = input.language_codes
    .map((item) => {
      const key = item.culture.replace(/[\s-]/g, '_').toUpperCase();
      return `  ${key} = '${key}',`;
    })
    .join('\n');

  return `{\n${enumLanguageTypes}\n}`;
}

function transformCultureNames(input) {
  const languageCodes = input.language_codes.reduce((acc, item) => {
    const key = item.culture.replace(/[\s-]/g, '_').toUpperCase();
    acc[key] = item;

    return acc;
  }, {});

  return JSON.stringify(languageCodes, null, 2);
}

module.exports = {
  transformCultureNames,
  transformToEnum,
};
