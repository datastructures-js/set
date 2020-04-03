# @datastructures-js/set

[![build:?](https://travis-ci.org/datastructures-js/set.svg?branch=master)](https://travis-ci.org/datastructures-js/set) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/set)

extends javascript ES6 Set class and implements main operations between two sets.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [javascript Set class](#javascript-set-class)
  * [union](#unionset)
  * [intersect](#intersectset)
  * [complement](#complementset)
  * [isSubsetOf](#issubsetofset)
  * [isSupersetOf](#issupersetofset)
  * [product](#productset)
 * [Build](#build)
 * [License](#license)

## Install
```sh
npm install --save @datastructures-js/set
```

## API

### require

```js
const EnhancedSet = require('@datastructures-js/set');
```

### import

```js
import EnhancedSet from '@datastructures-js/set';
```

### javascript Set class
It extends ES6 **Set** class so it already has all the Set functionality.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

### .union(set) 
applies union with another set and returns a set with all elements of the two.

https://en.wikipedia.org/wiki/Union_(set_theory)

<img width="209" alt="union" src="https://user-images.githubusercontent.com/6517308/76688727-04320000-65f5-11ea-8c71-9f8b0ab9660e.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td>name</td><td>type</td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n+m)
  </td>
  <td>
    n = number of elements in the first set<br><br>m = number of elements of the second set
  </td>
 </tr>
</table>

#### Example

```js
const set1 = new EnhancedSet(['A', 'B', 'C', 'D']);
const set2 = new EnhancedSet(['C', 'D', 'E', 'F']);

const union = set1.union(set2); // {A, B, C, D, E, F}
```

### .intersect(set)
intersects the set with another set and returns a set with existing elements in both sets.

https://en.wikipedia.org/wiki/Intersection_(set_theory)

<img width="226" alt="intersect" src="https://user-images.githubusercontent.com/6517308/76688730-06945a00-65f5-11ea-9c46-4d332bc073b6.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td>name</td><td>type</td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements in the set</td>
 </tr>
</table>

#### Example

```js
const intersect = set1.intersect(set2); // {C, D}
```

### .complement(set)
returns elements in a set and not in the other set relative to their union.

https://en.wikipedia.org/wiki/Complement_(set_theory)

<img width="515" alt="complement" src="https://user-images.githubusercontent.com/6517308/76688734-0bf1a480-65f5-11ea-8e90-7d5c9ba2af66.png">

#### Example

```js
const set2Complement = set1.complement(set2); // {A, B}
const set1Complement = set2.complement(set1); // {E, F}
```

### .isSubsetOf(set)
checks if the set is a subset of another set and returns true if all elements of the set exist in the other set.

https://en.wikipedia.org/wiki/Subset

<img width="159" alt="subset" src="https://user-images.githubusercontent.com/6517308/76688736-0f852b80-65f5-11ea-9a17-f9ad84e72d47.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td>name</td><td>type</td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements in the set</td>
 </tr>
</table>

#### Example

```js
console.log(s1.isSubsetOf(new Set['A', 'B', 'C', 'D', 'E'])); // true
console.log(s1.isSubsetOf(s2)); // false
```

### .isSupersetOf(set)
checks if the set is a superset of another set and returns true if all elements of the other set exist in the set.

https://en.wikipedia.org/wiki/Subset

<img width="159" alt="subset" src="https://user-images.githubusercontent.com/6517308/76688736-0f852b80-65f5-11ea-9a17-f9ad84e72d47.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td>name</td><td>type</td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements in the set</td>
 </tr>
</table>

#### Example

```js
console.log(s1.isSupersetOf(new Set['A', 'B'])); // true
console.log(s1.isSupersetOf(s2)); // false
```

### .product(set)
applies cartesian product between two sets.

https://en.wikipedia.org/wiki/Cartesian_product

<img width="228" alt="product" src="https://user-images.githubusercontent.com/6517308/76688737-12801c00-65f5-11ea-81ff-eea4d5fcb0ab.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td>name</td><td>type</td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n*m)
  </td>
  <td>
    n = number of elements in the first set<br><br>m = number of elements of the second set
  </td>
 </tr>
</table>

#### Example

```js
console.log(set1.product(set2));
/*
EnhancedSet {
  'A,C',
  'A,D',
  'A,E',
  'A,F',
  'B,C',
  'B,D',
  'B,E',
  'B,F',
  'C,C',
  'C,D',
  'C,E',
  'C,F',
  'D,C',
  'D,D', 
  'D,E',
  'D,F'
}
*/
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/set/blob/master/LICENSE)
