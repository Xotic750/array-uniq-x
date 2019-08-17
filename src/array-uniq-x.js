import reduce from 'array-reduce-x';
import indexOf from 'index-of-x';
import toBoolean from 'to-boolean-x';
import methodize from 'simple-methodize-x';

const push = methodize([].push);

/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons,
 * in which only the first occurrence of each element is kept. The order of result values is
 * determined by the order they occur in the array.
 *
 * @param {Array} array - The array to inspect.
 * @param {boolean} [useSameValue] - If true the use SameValue instead of SameValueZero.
 * @returns {*} Returns the new duplicate free array.
 */
const uniq = function uniq(array, useSameValue) {
  const isSameValue = toBoolean(useSameValue);
  const type = isSameValue ? 'SameValue' : 'SameValueZero';

  return reduce(
    array,
    function iteratee(accumulator, currentValue) {
      if (indexOf(accumulator, currentValue, type) === -1) {
        push(accumulator, isSameValue === false && currentValue === 0 ? 0 : currentValue);
      }

      return accumulator;
    },
    [],
  );
};

export default uniq;
