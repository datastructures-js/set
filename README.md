# @datastructures-js/set

[![build:?](https://travis-ci.org/datastructures-js/set.svg?branch=master)](https://travis-ci.org/datastructures-js/set) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/set)

extends javascript Set class and implements main operations between two sets.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [javascript Set class](#javascript-set-class)
  * [union](#unionset)
  * [intersect](#intersectset)
  * [complement](#complementset)
  * [isSubSetOf](#issubsetofset)
  * [isSuperSetOf](#issupersetofset)
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
It extends the Set class in javascript so it already has all the Set functionality.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

## .union(set) 
applies union with another set and returns a set with all elements of the two.

```js
const set1 = new EnhancedSet(['A', 'B', 'C', 'D']);
const set2 = new EnhancedSet(['C', 'D', 'E', 'F']);

const union = set1.union(set2); // {A, B, C, D, E, F}
```

## .intersect(set)
intersects the set with another set and returns a set with existing elements in both sets.

```js
const intersect = set1.intersect(set2); // {C, D}
```

## .complement(set)
returns elements in a set and not in the other set relative to their union.

```js
const set2Complement = set1.complement(set2); // {A, B}
const set1Complement = set2.complement(set1); // {E, F}
```

## .isSubsetOf(set)

checks if the set is a subset of another set and returns true if all elements of the set exist in the other set.

```js
console.log(s1.isSubsetOf(new Set['A', 'B', 'C', 'D', 'E'])); // true
console.log(s1.isSubsetOf(s2)); // true
```

## .isSupersetOf(set) 

checks if the set is a superset of another set and returns true if all elements of the other set exist in the set.

```js
console.log(s1.isSupersetOf(new Set['A', 'B'])); // true
console.log(s1.isSupersetOf(s2)); // false
```

## .product(set)
applies cartesian product between two sets.

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
