# @datastructures-js/set

[![build:?](https://travis-ci.org/datastructures-js/set.svg?branch=master)](https://travis-ci.org/datastructures-js/set) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/set)

extends javascript ES6 global Set class and implements new functions in it.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [union](#union)
  * [intersect](#intersect)
  * [complement (diff)](#complement-diff)
  * [isSubsetOf](#issubsetof)
  * [isSupersetOf](#issupersetof)
  * [product](#product)
  * [power](#power)
  * [permutations](#permutations)
  * [equals](#equals)
  * [filter](#filter)
  * [toArray](#toarray)
  * [clone](#clone)
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

### constructor

##### JS
```js
const set1 = new EnhancedSet(['A', 'B', 'C', 'D']);
const set2 = new EnhancedSet(['C', 'D', 'E', 'F']);
```

##### TS
```js
const set1 = new EnhancedSet<string>(['A', 'B', 'C', 'D']);
const set2 = new EnhancedSet<string>(['C', 'D', 'E', 'F']);
```

### union 
applies <a href="https://en.wikipedia.org/wiki/Union_(set_theory)">union</a> with another set and returns a set with all elements of the two.

```js
console.log(set1.union(set2)); // EnhancedSet { 'A', 'B', 'C', 'D', 'E', 'F' }
```

### intersect
applies <a href="https://en.wikipedia.org/wiki/Intersection_(set_theory)">intersection</a> between the set and another set and returns the existing elements in both.

```js
console.log(set1.intersect(set2)); // EnhancedSet { 'C', 'D' }
```

### complement (diff)
finds the <a href="https://en.wikipedia.org/wiki/Complement_(set_theory)">complement</a> of another set from the set elements.

```js
console.log(set1.complement(set2)); // EnhancedSet { 'A', 'B' }
console.log(set2.diff(set1)); // EnhancedSet { 'E', 'F' }
```

### isSubsetOf
checks if the set is a <a href="https://en.wikipedia.org/wiki/Subset">subset</a> of another set and returns true if all elements of the set exist in the other set.

```js
console.log(set1.isSubsetOf(new Set(['A', 'B', 'C', 'D', 'E']))); // true
console.log(set1.isSubsetOf(set2)); // false
```

### isSupersetOf
checks if the set is a <a href="https://en.wikipedia.org/wiki/Subset">superset</a> of another set and returns true if all elements of the other set exist in the set.

```js
console.log(set1.isSupersetOf(new Set(['A', 'B']))); // true
console.log(set1.isSupersetOf(set2)); // false
```

### product
applies <a href="https://en.wikipedia.org/wiki/Cartesian_product">cartesian product</a> between two sets. Default separator is empty string ''. 

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

### power
applies cartesian product on the set itself and accepts a second param as a separator with default as empty string. 

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

### permutations
generates m permutations from the set elements. It also accepts a second param as the separator, default is empty string ''.

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

### equals
checks if two sets are equal.

```js
console.log(set1.equals(new Set(['B', 'A', 'D', 'C']))); // true
console.log(set1.equals(new EnhancedSet(['D', 'C']))); // false
```

### filter
filters the set based on a callback and returns the filtered set.

```js
console.log(set1.filter((el) => el > 'B')); // EnhancedSet { 'C', 'D' }
```

### toArray
converts the set into an array.

```js
console.log(set1.toArray()); // [ 'A', 'B', 'C', 'D' ]
```

### clone
clones the set.

```js
console.log(set1.clone()); // EnhancedSet { 'A', 'B', 'C', 'D' }
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/set/blob/master/LICENSE)
