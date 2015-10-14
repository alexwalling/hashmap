function map(){
	this.arr = [];

	function LinkedList(val){
		this.head = val;

		this.add = function (val){

		}
		this.remove = function (val){

		}
	}

	//hash function from darkskyapp
	//find original hash function at https://github.com/darkskyapp/string-hash
	this.hash = function (str) {
		var h = 5381, i = str.length;

		while(i){
			h = (h * 33) ^ str.charCodeAt(--i);
		}
		/* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
		* integers. Since we want the results to be always positive, convert the
		* signed int to an unsigned by doing an unsigned bitshift. */
		return h >>> 0;
	};

	this.constructor = function (size){
		this.arr = new Array(size);
	};
	//link string key to arbitrary value
	this.set = function (key, value){
		if(key == null){
			return false;
		}

		var newEntry = {};
		var index = this.hash(key) % this.arr.length;
		newEntry[key] = value;

		if(this.arr[index] == undefined || this.arr[index] == 'closed'){
			this.arr[index] = newEntry;
			return true;
		}
		while(this.arr[index] != undefined){
			if(index == this.arr.length - 1){
				index = 0;
			} else {
				index++;
			}
			if(this.arr[index] == undefined){
				this.arr[index] = newEntry;
				return true;
			}
		}
		return false;
	};

	this.get = function (key){
		var index = this.hash(key) % this.arr.length;
		if(this.arr[index] == undefined){
			return null;
		}
		while(this.arr[index] != undefined){
			if(typeof this.arr[index] == 'object' && Object.keys(this.arr[index]) == key){
				return this.arr[index][key];
			}
			if(index == this.arr.length - 1){
				index = 0;
			} else {
				index++;
			}
		}
	};

	this.del = function (key){
		var index = this.hash(key) % this.arr.length;
		if(this.arr[index] == undefined){
			return null;
		}
		while(this.arr[index] != undefined){
			if(typeof this.arr[index] == 'object' && Object.keys(this.arr[index]) == key){
				var r = this.arr[index][key];
				this.arr[index] = 'closed';
				return r;
			}
			if(index == this.arr.length - 1){
				index = 0;
			} else {
				index++;
			}
		}
	};

	this.load = function (){
		return float;
	};

	this.print = function (){
		console.log('printing array:');
		console.log('----------------------------------------------------');
		for(i = 0; i < this.arr.length; i++){
			console.log('i: ', i);
			console.log('val: ', this.arr[i]);
		}
		console.log();
	};
}
hashmap = new map();
hashmap.constructor(10);
console.log('length: ',hashmap.length);

console.log();

hashmap.set('a',10); //hash of a == 4
hashmap.set('a',11);
hashmap.set('a',12);

console.log(hashmap[4]);

console.log();

hashmap.print();
hashmap.del('a');
hashmap.print();
hashmap.del('a');
hashmap.print();

hashmap.set('a',34);
hashmap.print();
