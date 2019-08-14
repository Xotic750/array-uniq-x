<a
  href="https://travis-ci.org/Xotic750/array-unique-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/array-unique-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/array-unique-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-unique-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/array-unique-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-unique-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/array-unique-x"
  title="npm version">
<img src="https://badge.fury.io/js/array-unique-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/array-unique-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/array-unique-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/array-unique-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/array-unique-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/array-unique-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/array-unique-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_array-unique-x"></a>

## array-unique-x

Creates a duplicate-free version of an array, using SameValue for equality comparisons,
in which only the first occurrence of each element is kept. The order of result values is
determined by the order they occur in the array.

<a name="exp_module_array-unique-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

This method is just a placeholder.

**Kind**: Exported member  
**Returns**: <code>Array</code> - Returns the new duplicate free array.

| Param | Type               | Description           |
| ----- | ------------------ | --------------------- |
| array | <code>Array</code> | The array to inspect. |

**Example**

```js
import uniq from 'array-unique-x';

console.log(uniq([2, 1, 2])); // [2, 1]
```
