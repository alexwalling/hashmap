# Node.js Hashmap 
Implementation of a Hashmap with Node.

Also happened to be the KPCB fellows challenge problem for application for the Engineering Fellows class of 2016.  Implements a fixed fixed-size hash map that associates string keys with arbitrary data object references.

Uses open addressing and linear probing to resolve collisions.

<br>

## Install
```shell
$ npm install alexwalling/hashmap
```

<br>

## Usage
```js
var hashmap = require('hashmap');

myHashmap = new map(size);
myHashmap.set('key', value); //return boolean indicating success/failure
myHashmap.get('key'); //return value associated with key, or null if no value is set
myHashmap.del('key'); // return value deleted on success or no if key has no value
myHashmap.load(); //return load value
myHashmap.print();
```

<br>

## Test
```
$ npm test
```

