# @datastructures-js/set

[![build:?](https://travis-ci.org/datastructures-js/set.svg?branch=master)](https://travis-ci.org/datastructures-js/set) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/set)

extends javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">ES6 global Set</a> class and implements new functions in it.

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
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

### require

```js
const { EnhancedSet } = require('@datastructures-js/set');
```

### import

```js
import { EnhancedSet } from '@datastructures-js/set';
```

## API

### Construction
constructor accepts an optional array of elements same like Set.

```js
const set1 = new EnhancedSet(['A', 'B', 'C', 'D']);
const set2 = new EnhancedSet(['C', 'D', 'E', 'F']);
```

### .union(set) 
applies <a href="https://en.wikipedia.org/wiki/Union_(set_theory)">union</a> with another set and returns a set with all elements of the two.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">set: Set</td>
    <td align="center">EnhancedSet</td>
    <td>
      O(n+m)
      <br />
      n = number of elements of the current set
      <br />
      m = number of elements of the input set
    </td>
  </tr>
</table>

```js
console.log(set1.union(set2)); // EnhancedSet { 'A', 'B', 'C', 'D', 'E', 'F' }
```

### .intersect(set)
applies <a href="https://en.wikipedia.org/wiki/Intersection_(set_theory)">intersection</a> between the set and another set and returns the existing elements in both.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">set: Set</td>
    <td align="center">EnhancedSet</td>
    <td align="center">
      O(n)
      <br />
      n = number of elements of the current set
    </td>
  </tr>
</table>

```js
console.log(set1.intersect(set2)); // EnhancedSet { 'C', 'D' }
```

### .complement(set)
finds the <a href="https://en.wikipedia.org/wiki/Complement_(set_theory)">complement</a> of a set from the set elements.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">set: Set</td>
    <td align="center">EnhancedSet</td>
    <td align="center">
      O(n)
      <br />
      n = number of elements of the current set
    </td>
  </tr>
</table>

```js
console.log(set1.complement(set2)); // EnhancedSet { 'A', 'B' }
console.log(set2.complement(set1)); // EnhancedSet { 'E', 'F' }
```

### .isSubsetOf(set)
checks if the set is a <a href="https://en.wikipedia.org/wiki/Subset">subset</a> of another set and returns true if all elements of the set exist in the other set.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">set: Set</td>
    <td align="center">boolean</td>
    <td align="center">
      O(n)
      <br />
      n = number of elements of current set
    </td>
  </tr>
</table>

```js
console.log(set1.isSubsetOf(new Set(['A', 'B', 'C', 'D', 'E']))); // true
console.log(set1.isSubsetOf(set2)); // false
```

### .isSupersetOf(set)
checks if the set is a <a href="https://en.wikipedia.org/wiki/Subset">superset</a> of another set and returns true if all elements of the other set exist in the set.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">set: Set</td>
    <td align="center">boolean</td>
    <td align="center">
      O(n)
      <br />
      n = number of elements of current set
    </td>
  </tr>
</table>

```js
console.log(set1.isSupersetOf(new Set(['A', 'B']))); // true
console.log(set1.isSupersetOf(set2)); // false
```

### .product(set[, separator])
applies <a href="https://en.wikipedia.org/wiki/Cartesian_product">cartesian product</a> between two sets. Default separator is empty string ''. 

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      set: Set
      <br />
      <i>separator: string</i>
    </td>
    <td align="center">EnhancedSet</td>
    <td>
      O(n*m)
      <br />
      n = number of elements of the current set
      <br />
      m = number of elements of the input set
    </td>
  </tr>
</table>

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

### .power(m[, separator])
applies cartesian product on the set itself. It projects the power concept on sets and also accepts a separator with default empty string value ''. 

<img width="450" alt="product" src="https://user-images.githubusercontent.com/6517308/101982951-0933e680-3c3d-11eb-88cf-2e99c1767173.png">

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      m: number
      <br />
      <i>separator: string</i>
    </td>
    <td align="center">EnhancedSet</td>
    <td>
      O(n^m)
      <br />
      n = number of elements of the current set
      <br />
      m = the multiplication power number
    </td>
  </tr>
</table>

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

### .permutations(m[, separator])
generates m permutations from the set elements. It also accepts a separator with default empty string value ''. 

<img width="400" alt="perms" src="https://user-images.githubusercontent.com/6517308/102668335-f3b64380-418b-11eb-9143-b9c4a72dea85.png">

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      m: number
      <br />
      <i>separator: string</i>
    </td>
    <td align="center">EnhancedSet</td>
    <td>
      O(n^m)
      <br />
      n = number of elements of the current set
      <br />
      m = number of permutations
    </td>
  </tr>
</table>

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
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      set: Set
    </td>
    <td align="center">boolean</td>
    <td align="center">
      O(n)
      <br />
      n = number of elements of the current set
    </td>
  </tr>
</table>

```js
console.log(set1.equals(new Set(['B', 'A', 'D', 'C']))); // true
console.log(set1.equals(new EnhancedSet(['D', 'C']))); // false
```

### .filter(cb)
filters the set based on a callback and returns the filtered set.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">
      cb: function
    </td>
    <td align="center">
      O(n)
      <br />
      n = number of elements of the current set
    </td>
  </tr>
</table>

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

```js
console.log(set1.toArray()); // [ 'A', 'B', 'C', 'D' ]
```

### .clone()
clones the set.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>EnhancedSet</td>
 </tr>
</table>


```js
console.log(set1.clone()); // EnhancedSet { 'A', 'B', 'C', 'D' }
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/set/blob/master/LICENSE)
