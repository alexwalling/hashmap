function map(){
	this.arr = [];

	function node(val){
		this.value = val;
		this.next = null;
		this.prev = null;
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

		tempNode = new node(newEntry);
		if(this.arr[index] == undefined || this.arr[index] == 'closed'){
			this.arr[index] = tempNode;
			return true;
		}
		headNode = this.arr[index];
		endNode = headNode;
		while(endNode.next != null){
			endNode = endNode.next;
		}
		while(this.arr[index] != undefined){
			if(index == this.arr.length - 1){
				index = 0;
			} else {
				index++;
			}
			if(this.arr[index] == undefined || this.arr[index] == 'closed'){
				endNode.next = tempNode;
				tempNode.prev = endNode;
				this.arr[index] = tempNode;
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
			if(typeof this.arr[index] == 'object' && Object.keys(this.arr[index].value) == key){
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
			//console.log('i: ', i);
			//console.log('value: ', this.arr[i]);

			if( this.arr[i] == undefined || this.arr[i] == 'closed'){
				console.log('value: ', this.arr[i]);
			} else {
				console.log('value: ', this.arr[i].value);
			}
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
//hashmap.del('a');
hashmap.print();
//hashmap.del('a');
hashmap.print();

hashmap.set('hello',34);
hashmap.set('a',19);
hashmap.print();
hashmap.del('hello');
hashmap.print();
//hashmap.set('a',41);
hashmap.print();
//console.log(hashmap.hash('g') % 10);

hashmap.set('g',19);
hashmap.print();
hashmap.set('g',15);
hashmap.set('g',34);
hashmap.print();
