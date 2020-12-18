# @datastructures-js/set

[![build:?](https://travis-ci.org/datastructures-js/set.svg?branch=master)](https://travis-ci.org/datastructures-js/set) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/set)

extends javascript ES6 Set class and implements new functions in it.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [javascript Set class](#javascript-set-class)
  * [Construction](#construction)
  * [.union(set)](#unionset)
  * [.intersect(set)](#intersectset)
  * [.complement(set)](#complementset)
  * [.isSubsetOf(set)](#issubsetofset)
  * [.isSupersetOf(set)](#issupersetofset)
  * [.product(set, separator)](#productset-separator)
  * [.power(m, separator)](#powerm-separator)
  * [.permutations(m, separator)](#permutationsm-separator)
  * [.equals(set)](#equalsset)
  * [.filter(cb)](#filtercb)
  * [.toArray()](#toarray)
  * [.clone()](#clone)
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

### Construction
constructor accepts an optional array of elements same like Set.

#### Example

```js
const set1 = new EnhancedSet(['A', 'B', 'C', 'D']);
const set2 = new EnhancedSet(['C', 'D', 'E', 'F']);
```

### .union(set) 
applies union with another set and returns a set with all elements of the two.

https://en.wikipedia.org/wiki/Union_(set_theory)

<img width="209" alt="union" src="https://user-images.githubusercontent.com/6517308/76688727-04320000-65f5-11ea-8c71-9f8b0ab9660e.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
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
    n = number of elements of the first set<br><br>m = number of elements of the second set
  </td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
console.log(set1.union(set2)); // EnhancedSet { 'A', 'B', 'C', 'D', 'E', 'F' }
```

### .intersect(set)
intersects the set with another set and returns a set with existing elements in both sets.

https://en.wikipedia.org/wiki/Intersection_(set_theory)

<img width="226" alt="intersect" src="https://user-images.githubusercontent.com/6517308/76688730-06945a00-65f5-11ea-9c46-4d332bc073b6.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements of the set</td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
console.log(set1.intersect(set2)); // EnhancedSet { 'C', 'D' }
```

### .complement(set)
returns elements in a set and not in the other set relative to their union.

https://en.wikipedia.org/wiki/Complement_(set_theory)

<img width="515" alt="complement" src="https://user-images.githubusercontent.com/6517308/76688734-0bf1a480-65f5-11ea-8e90-7d5c9ba2af66.png">

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
console.log(set1.complement(set2)); // EnhancedSet { 'A', 'B' }
console.log(set2.complement(set1)); // EnhancedSet { 'E', 'F' }
```

### .isSubsetOf(set)
checks if the set is a subset of another set and returns true if all elements of the set exist in the other set.

https://en.wikipedia.org/wiki/Subset

<img width="159" alt="subset" src="https://user-images.githubusercontent.com/6517308/76688736-0f852b80-65f5-11ea-9a17-f9ad84e72d47.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements of the set</td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>boolean</td>
 </tr>
</table>

#### Example

```js
console.log(set1.isSubsetOf(new Set(['A', 'B', 'C', 'D', 'E']))); // true
console.log(set1.isSubsetOf(set2)); // false
```

### .isSupersetOf(set)
checks if the set is a superset of another set and returns true if all elements of the other set exist in the set.

https://en.wikipedia.org/wiki/Subset

<img width="159" alt="subset" src="https://user-images.githubusercontent.com/6517308/76688736-0f852b80-65f5-11ea-9a17-f9ad84e72d47.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements of the set</td>
 </tr>
</table>

#### Example

```js
console.log(set1.isSupersetOf(new Set(['A', 'B']))); // true
console.log(set1.isSupersetOf(set2)); // false
```

### .product(set, separator)
applies cartesian product between two sets. Default separator is empty string ''. 

https://en.wikipedia.org/wiki/Cartesian_product

<img width="228" alt="product" src="https://user-images.githubusercontent.com/6517308/76688737-12801c00-65f5-11ea-81ff-eea4d5fcb0ab.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>set</td><td>Set</td></tr>
  <tr><td>separator</td><td>string</td></tr>
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
    n = number of elements of the first set<br><br>m = number of elements of the second set
  </td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
console.log(set1.product(set2));
/*
EnhancedSet {
  'AC',
  'AD',
  'AE',
  'AF',
  'BC',
  'BD',
  'BE',
  'BF',
  'CC',
  'CD',
  'CE',
  'CF',
  'DC',
  'DD', 
  'DE',
  'DF'
}
*/

console.log(set1.product(set2, ','));
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

### .power(m, separator)
applies cartesian product on the set itself. It projects the power concept on sets and also accepts a separator with default empty string value ''. 

<img width="450" alt="product" src="https://user-images.githubusercontent.com/6517308/101982951-0933e680-3c3d-11eb-88cf-2e99c1767173.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>m</td><td>number</td></tr>
  <tr><td>separator</td><td>string</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n^m)
  </td>
  <td>
    n = number of elements of the set<br><br>m = the multiplication power number
  </td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
const x = new EnhancedSet(['A', 'B']);

const y = x.power(2);
console.log(y);
/*
EnhancedSet(4) [Set] {
  'AA',
  'AB',
  'BA',
  'BB'
}
*/

const z = y.power(2);
console.log(z);
/*
EnhancedSet(16) [Set] {
  'AAAA',
  'AAAB',
  'AABA',
  'AABB',
  'ABAA',
  'ABAB',
  'ABBA',
  'ABBB',
  'BAAA',
  'BAAB',
  'BABA',
  'BABB',
  'BBAA',
  'BBAB',
  'BBBA',
  'BBBB'
}
*/
```

### .permutations(m, separator)
generates m permutations from the set elements. It also accepts a separator with default empty string value ''. 

<img width="400" alt="perms" src="https://user-images.githubusercontent.com/6517308/102668335-f3b64380-418b-11eb-9143-b9c4a72dea85.png">

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>m</td><td>number</td></tr>
  <tr><td>separator</td><td>string</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n^m)
  </td>
  <td>
    n = number of elements of the set<br><br>m = the multiplication power number
  </td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
const x = new EnhancedSet(['A', 'B', 'C', 'D']);

const y = x.permutations(2);
console.log(y);
/*
EnhancedSet(12) [Set] {
  'AB',
  'AC',
  'AD',
  'BA',
  'BC',
  'BD',
  'CA',
  'CB',
  'CD',
  'DA',
  'DB',
  'DC'
}
*/
```

### .equals(set)
checks if two sets are equal.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>set</td><td>Set</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements of the set</td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>boolean</td>
 </tr>
</table>

#### Example

```js
console.log(set1.equals(new Set(['B', 'A', 'D', 'C']))); // true
console.log(set1.equals(new EnhancedSet(['D', 'C']))); // false
```

### .filter(cb)
filters the set based on a callback and returns the filtered set.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
  <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>cb</td><td>function</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
  <th>explanation</th>
 </tr>
 <tr>
  <td>O(n)</td>
  <td>n = number of elements of the set</td>
 </tr>
</table>

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>

#### Example

```js
console.log(set1.filter((el) => el > 'B')); // EnhancedSet { 'C', 'D' }
```

### .toArray()
converts the set into an array.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>array</td>
 </tr>
</table>

#### Example

```js
console.log(set1.toArray()); // [ 'A', 'B', 'C', 'D' ]
```

### .clone()
clones the set.

```js
console.log(set1.clone()); // EnhancedSet { 'A', 'B', 'C', 'D' }
```

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>


## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/set/blob/master/LICENSE)
