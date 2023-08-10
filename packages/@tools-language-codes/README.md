# @openkit/language-codes

## Super quick start

```sh
// with pnpm
pnpm add  @openkit/language-codes

// with yarn
yarn add @openkit/language-codes

// with npm
npm add  @openkit/language-codes
```

## Import and use it

```ts
import languageCodes from '@openkit/language-codes';

console.log(languageCodes.ES_MX.langCode);
// {
//   culture: 'es-MX',
//   langCode: 'es-MX',
//   displayName: 'Spanish (Mexico)'
// }

console.log(languageCodes.ES_MX.culture);
// 'es-MX'

console.log(languageCodes.ES_MX.displayName);
// 'Spanish (Mexico)'

console.log(languageCodes.ES_MX.langCode);
// 'es-MX'
```
