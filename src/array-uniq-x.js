import reduce from 'array-reduce-x';
import indexOf from 'index-of-x';

const {push} = [];

const callback = function callback(accumulator, currentValue) {
  if (indexOf(accumulator, currentValue, 'SameValue') === -1) {
    push.call(accumulator, currentValue);
  }

  return accumulator;
};

/**
 * Creates a duplicate-free version of an array, using SameValue for equality comparisons,
 * in which only the first occurrence of each element is kept. The order of result values is
 * determined by the order they occur in the array.
 *
 * @param {Array} array - The array to inspect.
 * @returns {*} Returns the new duplicate free array.
 */
const uniq = function uniq(array) {
  return reduce(array, callback, []);
};

export default uniq;
