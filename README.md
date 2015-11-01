##Hashmap implementation
KPCB fellows challenge problem for application.  Implements a fixed fixed-size hash map that associates string keys with arbitrary data object references

Uses open addressing and linear probing to resolve collisions.

##Run testing
>mocha

##Using hash map
>in another file you must use
```
var hashmap = require('/hashmap');
```
>Use hashmap
```
myHashmap = new map(size);
myHashmap.set('key', value); //return boolean indicating success/failure
myHashmap.get('key'); //return value associated with key, or null if no value is set
myHashmap.del('key'); // return value deleted on success or no if key has no value
myHashmap.load(); //return load value
myHashmap.print();
