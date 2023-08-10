import { expect, test, describe, expectTypeOf, assertType } from 'vitest';

import cultureCodes from './culture-codes';
import { CultureCodes, EsMX } from './types';

describe('cultureCodes', () => {
  test('must return an object with the properties of "ES_MX"', () => {
    const expectObject = {
      culture: 'es-MX',
      langCode: 'es-MX',
      displayName: 'Spanish (Mexico)',
    };

    expect(cultureCodes.ES_MX).toEqual(expectObject);
  });

  test('must return an prorpety "culture" with value "es-MX"', () => {
    const expectText = 'es-MX';

    expect(cultureCodes.ES_MX.culture).toEqual(expectText);
  });

  test('must return an prorpety "langCode" with value "es-MX"', () => {
    const expectText = 'es-MX';

    expect(cultureCodes.ES_MX.langCode).toEqual(expectText);
  });

  test('must return an prorpety "displayName" with value "Spanish (Mexico)"', () => {
    const expectText = 'Spanish (Mexico)';

    expect(cultureCodes.ES_MX.displayName).toEqual(expectText);
  });

  test('types cultureCodes properly', () => {
    expectTypeOf(cultureCodes).toMatchTypeOf<CultureCodes>;
    expectTypeOf(cultureCodes).toBeObject;
    assertType(cultureCodes);
  });

  test('types cultureCodes.ES_MX properly', () => {
    expectTypeOf(cultureCodes.ES_MX).toMatchTypeOf<EsMX>;
    expectTypeOf(cultureCodes.ES_MX).toMatchTypeOf<{ culture: 'es-MX'; langCode: 'es-MX'; displayName: string }>;
    expectTypeOf(cultureCodes.ES_MX).toBeObject;
    expectTypeOf(cultureCodes.ES_MX.culture).toBeString;
    expectTypeOf(cultureCodes.ES_MX.displayName).toBeString;
    expectTypeOf(cultureCodes.ES_MX.langCode).toBeString;
    assertType(cultureCodes.ES_MX);
  });
});
