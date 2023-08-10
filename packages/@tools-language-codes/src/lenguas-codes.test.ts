import { expect, test, describe, expectTypeOf, assertType } from 'vitest';

import languageCodes from './lenguas-codes';
import { LanguageCodes, EsMX } from './types';

describe('languageCodes', () => {
  test('must return an object with the properties of "ES_MX"', () => {
    const expectObject = {
      culture: 'es-MX',
      langCode: 'es-MX',
      displayName: 'Spanish (Mexico)',
    };

    expect(languageCodes.ES_MX).toEqual(expectObject);
  });

  test('must return an prorpety "culture" with value "es-MX"', () => {
    const expectText = 'es-MX';

    expect(languageCodes.ES_MX.culture).toEqual(expectText);
  });

  test('must return an prorpety "langCode" with value "es-MX"', () => {
    const expectText = 'es-MX';

    expect(languageCodes.ES_MX.langCode).toEqual(expectText);
  });

  test('must return an prorpety "displayName" with value "Spanish (Mexico)"', () => {
    const expectText = 'Spanish (Mexico)';

    expect(languageCodes.ES_MX.displayName).toEqual(expectText);
  });

  test('types languageCodes properly', () => {
    expectTypeOf(languageCodes).toMatchTypeOf<LanguageCodes>;
    expectTypeOf(languageCodes).toBeObject;
    assertType(languageCodes);
  });

  test('types languageCodes.ES_MX properly', () => {
    expectTypeOf(languageCodes.ES_MX).toMatchTypeOf<EsMX>;
    expectTypeOf(languageCodes.ES_MX).toMatchTypeOf<{ culture: 'es-MX'; langCode: 'es-MX'; displayName: string }>;
    expectTypeOf(languageCodes.ES_MX).toBeObject;
    expectTypeOf(languageCodes.ES_MX.culture).toBeString;
    expectTypeOf(languageCodes.ES_MX.displayName).toBeString;
    expectTypeOf(languageCodes.ES_MX.langCode).toBeString;
    assertType(languageCodes.ES_MX);
  });
});
