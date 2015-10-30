module.exports = {
map: function (size){
	this.arr = new Array(size);

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
			if(this.arr[index] == undefined || this.arr[index] == 'closed'){
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
		var ret = 0;
		for(i = 0; i < this.arr.length; i++){
			if(this.arr[i] != undefined && this.arr[i] != 'closed'){
				ret ++;
			}
		}
		return ret / this.arr.length;
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
				console.log('value: ', this.arr[i]);
			}
		}
		console.log();
	};
}
};
/*
love = new map(10);
love.set('gabrielle', 15);
love.set('alex', 17);
love.set('gabby leigh', 34);
love.set('G', 41);
love.set('Gabrielle', 31);
love.set('Gabby Leigh', 19);
love.set('Alex', 19);
love.print();
love.del('Gabby Leigh');
love.print();
console.log(love.get('Gabrielle'));

console.log(love.hash('gabrielle') % 10);
console.log(love.hash('alex') % 10);
console.log(love.hash('gabby leigh') % 10);
console.log(love.hash('G') % 10);
console.log(love.hash('Gabrielle') % 10);
console.log(love.hash('Gabby Leigh') % 10);
console.log(love.hash('Alex') % 10);

console.log(love.get('Alex'));
console.log(love.load());
*/
