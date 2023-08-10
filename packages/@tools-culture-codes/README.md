# @openkit/culture-codes

## Super quick start

```sh
// with pnpm
pnpm add  @openkit/culture-codes

// with yarn
yarn add @openkit/culture-codes

// with npm
npm add  @openkit/culture-codes
```

## Import and use it

```ts
import cultureCodes from '@openkit/culture-codes';

console.log(cultureCodes.ES_MX.langCode);
// {
//   culture: 'es-MX',
//   langCode: 'es-MX',
//   displayName: 'Spanish (Mexico)'
// }

console.log(cultureCodes.ES_MX.culture);
// 'es-MX'

console.log(cultureCodes.ES_MX.displayName);
// 'Spanish (Mexico)'

console.log(cultureCodes.ES_MX.langCode);
// 'es-MX'
```
