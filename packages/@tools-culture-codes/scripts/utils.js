const format = require('prettier-eslint');

module.exports = {
  outputFileFormat: (element) =>
    format({
      text: element,
      eslintConfig: {
        extends: ['plugin:prettier/recommended', '@typescript-eslint/eslint-plugin'],
      },
      prettierOptions: {
        bracketSpacing: true,
        jsxSingleQuote: true,
        printWidth: 120,
        proseWrap: 'always',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    }),
};
