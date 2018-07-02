# Set

[![build:?](https://travis-ci.org/eyas-ranjous/datatructures-js/set.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datatructures-js/set) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/set.svg)](https://www.npmjs.com/package/@datastructures-js/set) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/set)

elements data type: number, string, boolean, null, undefined.

## Usage
```js
const setFn = require('@datastructures-js/set');
const set = setFn();
```

## API

**.add(element)** 

adds an element to the set.
```javascript
set.add('A');
set.add('B');
set.add('C');
set.add('D');
```
**.isEmpty()** 

checks if the set is empty.
```javascript
console.log(set.isEmpty()); // false
```

**.contains(element)** 

checks if the set contains an element
```javascript
console.log(set.contains('C')); // true
```

**.remove(element)** 

removes an element from the set.
```javascript
set.remove('C');
console.log(set.contains('C')); // false
```

**.size()** 

returns the number of elements in the set.
```javascript
console.log(set.size()); // 3
```

**.union(set)** 

unions the set with another set and returns the resulting set.
```javascript
const set2 = ds.set();
set2.add('A');
set2.add('E');
set2.add('F');
const unionSet = set.union(set2); // unionSet contains A, B, D, E, F
```

**.intersect(set)** 

intersects the set with another set and returns the resulting set.
```javascript
const set2 = ds.set();
set2.add('A');
set2.add('E');
set2.add('F');
// set contains A, B, D
const intersectSet = set.intersect(set2); // intersectSet contains A
```

**.diff(set)** 

returns the diff set between the set and another set.
```javascript
const set2 = ds.set();
set2.add('A');
set2.add('E');
set2.add('F');
// set contains A, B, D
const diffSet = set.diff(set2); // diffSet contains B, D
```

**.isSubsetOf(set)** 

checks if the set is a subset of another set
```javascript
const s1 = ds.set();
s1.add('B');
s1.add('G');
s1.add('D');

const s2 = ds.set();
s2.add('A');
s2.add('G');
s2.add('B');
s2.add('G');
s2.add('D');

console.log(s2.isSubsetOf(s1)); // false
console.log(s1.isSubsetOf(s2)); // true
```

**.isSupersetOf(set)** 

checks if the set is a subset of another set
```javascript
const s1 = ds.set();
s1.add('B');
s1.add('G');
s1.add('D');

const s2 = ds.set();
s2.add('A');
s2.add('G');
s2.add('B');
s2.add('G');
s2.add('D');

console.log(s2.isSupersetOf(s1)); // true
console.log(s1.isSupersetOf(s2)); // true
```

**.toArray()** 

converts the set to an array.
```javascript
console.log(set.toArray()); // ['A', 'B', 'D']
```

**.clear()** 

clears the set
```javascript
set.clear(); // set is empty
console.log(set.size()); // 0  
```


## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/set/blob/master/LICENSE)
