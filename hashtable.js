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
//link key to value
function set(key, value){
	return ifItWorked;
}

function get(){

}

function del(key){

}

function load(){
	return float;
}

var hashmap = constructor(10);
console.log(hashmap.length);

console.log(hashmap[1]);
hashmap[1] = 10;
console.log(hashmap[1]);
