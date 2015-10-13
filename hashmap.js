var hashmap;

//hash function from darkskyapp
//find original hash function at https://github.com/darkskyapp/string-hash
function hash(str) {
  var h = 5381,
      i = str.length;

  while(i){
    h = (h * 33) ^ str.charCodeAt(--i);
  }
  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return h >>> 0;
}

function constructor(size){
	var tempHashMap = new Array(size);
	return tempHashMap;
}
//link string key to arbitrary value
function set(key, value){
	if(key == null){
		return false;
	}

	var newEntry = {};
	var index = hash(key) % hashmap.length;
	newEntry[key] = value;

	if(hashmap[index] == undefined || hashmap[index] == 'closed'){
		hashmap[index] = newEntry;
		return true;
	}
	while(hashmap[index] != undefined){
		if(index == hashmap.length - 1){
			index = 0;
		} else {
			index++;
		}
		if(hashmap[index] == undefined){
			hashmap[index] = newEntry;
			return true;
		}
	}
	return false;
}

function get(key){
	var index = hash(key) % hashmap.length;

}

function del(key){
	var index = hash(key) % hashmap.length;
	if(hashmap[index] == undefined){
		return null;
	}
	while(hashmap[index] != undefined){
		if(typeof hashmap[index] == 'object' && Object.keys(hashmap[index]) == key){
			var r = hashmap[index][key];
			hashmap[index] = 'closed';
			return r;
		}
		if(index == hashmap.length - 1){
			index = 0;
		} else {
			index++;
		}
	}
}

function load(){
	return float;
}

function print(){
	console.log('printing array:');
	for(i = 0; i < hashmap.length; i++){
		console.log('i: ', i);
		console.log('val: ', hashmap[i]);
	}
	console.log();
}

hashmap = constructor(10);
console.log('length: ',hashmap.length);

console.log('test: ', hash('a') % hashmap.length);

console.log();

set('a',10); //hash of a == 4
set('a',11);
set('a',12);

console.log(hashmap[4]);

console.log();

print();
del('a');
print();
del('a');
print();

set('a',34);
print();
