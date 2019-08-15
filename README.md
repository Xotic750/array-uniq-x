<a
  href="https://travis-ci.org/Xotic750/array-uniq-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/array-uniq-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/array-uniq-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-uniq-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/array-uniq-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-uniq-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/array-uniq-x"
  title="npm version">
<img src="https://badge.fury.io/js/array-uniq-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/array-uniq-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/array-uniq-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/array-uniq-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/array-uniq-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/array-uniq-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/array-uniq-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_array-uniq-x"></a>

## array-uniq-x

Creates a duplicate-free version of an array, using SameValueZero for equality comparisons,
in which only the first occurrence of each element is kept. The order of result values is
determined by the order they occur in the array.

<a name="exp_module_array-uniq-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

This method is just a placeholder.

**Kind**: Exported member  
**Returns**: <code>Array</code> - Returns the new duplicate free array.

| Param          | Type                 | Description             |
| -------------- | -------------------- | ----------------------- |
| array          | <code>Array</code>   | The array to inspect.   |
| [useSameValue] | <code>Boolean</code> | Alternative comparison. |

**Example**

```js
import uniq from 'array-uniq-x';

console.log(uniq([2, 1, 2])); // [2, 1]
console.log(uniq([-0, 0])); // [0]
console.log(uniq([-0, 0], true)); // [-0, 0]
```
