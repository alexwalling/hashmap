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
//size being the size you want your hashmap
myHashmap.set('key', value);
//stores the give key value pair and returns true if successful and false if failure
myHashmap.get('key');
//return value associated with given key, or null if no value is set
myHashmap.del('key');
//delete value associated with key and return value deleted or null if no value associated to key
myHashmap.load();
//return float value representing load factor
myHashmap.print();
//print out your hashmap
