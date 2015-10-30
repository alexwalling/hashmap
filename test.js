var hashmap = require('./hashmap');

myHashmap = new hashmap.map(10);
myHashmap.set('hello', 31);
console.log(myHashmap.load());
