import uniq from '../src/array-uniq-x';

describe('uniq', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(uniq).toBeInstanceOf(Function);
  });

  it('throw for undefined or null', function() {
    expect.assertions(3);
    expect(() => uniq()).toThrowErrorMatchingSnapshot();
    expect(() => uniq(undefined)).toThrowErrorMatchingSnapshot();
    expect(() => uniq(null)).toThrowErrorMatchingSnapshot();
  });

  it('primitives', function() {
    expect.assertions(3);
    expect(uniq(1)).toStrictEqual([]);
    expect(uniq(true)).toStrictEqual([]);
    expect(uniq('')).toStrictEqual([]);
  });

  it('strings', function() {
    expect.assertions(1);
    expect(uniq('123123')).toStrictEqual(['1', '2', '3']);
  });

  it('array like', function() {
    expect.assertions(1);
    expect(uniq({0: 1, 1: 2, 2: 3, 3: 1, 4: 2, 5: 3, length: 6})).toStrictEqual([1, 2, 3]);
  });

  it('zeros', function() {
    expect.assertions(1);
    expect(uniq([-0, 0])).toStrictEqual([-0, 0]);
  });

  it('should perform an unsorted uniq when used as an iteratee for methods like `map`', function() {
    expect.assertions(1);
    const array = [[2, 1, 2], [1, 2, 1]];
    const actual = array.map(uniq);

    expect(actual).toStrictEqual([[2, 1], [1, 2]]);
  });
});
