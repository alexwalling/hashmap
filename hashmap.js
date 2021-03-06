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
			return (h >>> 0) % this.arr.length;
		};

		//link string key to arbitrary value
		this.set = function (key, value){
			if(key == null){
				return false;
			}

			var newEntry = {};
			var index = this.hash(key);
			newEntry[key] = value;

			if(this.arr[index] == undefined || this.arr[index] == 'closed'){
				this.arr[index] = newEntry;
				return true;
			}
			var i = 0;
			while(this.arr[index] != undefined && i <= this.arr.length){
				if(index == this.arr.length - 1){
					index = 0;
				} else {
					index++;
				}
				if(this.arr[index] == undefined || this.arr[index] == 'closed'){
					this.arr[index] = newEntry;
					return true;
				}
				i++;
			}
			return false;
		};

		this.get = function (key){
			var index = this.hash(key);
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
			return null;
		};

		this.del = function (key){
			var index = this.hash(key);
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
			return null;
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
			console.log('----------------------------------------------------');
			for(i = 0; i < this.arr.length; i++){
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
