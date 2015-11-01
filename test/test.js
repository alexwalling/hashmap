var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var hashmap = require('../hashmap');


length = 10;
myHashmap = new hashmap.map(length);
myHashmap.arr.length;
console.log('-Initializing Hashmap with size 10');
myHashmap.print();
console.log('-Adding key:KPCB value:1');
myHashmap.set('KPCB', 1);
myHashmap.print();
console.log('-Adding key:Summer internship value:2');
myHashmap.set('Summer internship', 2);
myHashmap.print();
console.log('-Adding key:Alex Walling value:3');
myHashmap.set('Alex Walling', 3);
myHashmap.print();
console.log('-Adding key:KPCB2015 value:4');
myHashmap.set('KPCB2015', 4);
myHashmap.print();
console.log('-Adding key:David Walling value:5');
myHashmap.set('David Walling', 5);
myHashmap.print();
console.log('-Adding key:KPCB summer intern value:6');
myHashmap.set('KPCB summer intern', 6);
myHashmap.print();
console.log('-Adding key:KPCB Fellows Summer Internship value:7');
myHashmap.set('KPCB Fellows Summer Internship', 7);
myHashmap.print();
console.log('-Getting value for key:Summer internship');
console.log('  ', myHashmap.get('Summer internship'));
console.log('-Getting value for hello world:');
console.log('  ', myHashmap.get('hello world'));
console.log('-Getting value for Alex Walling:');
console.log('  ', myHashmap.get('Alex Walling'));
console.log('');
console.log('-Adding key:collision value:8');
myHashmap.set('collide', 8);
myHashmap.print();
console.log('-Removing value(KPCB:1) to test ability to find colide');
console.log('  removed KPCB and returned:' ,myHashmap.del('KPCB'));
myHashmap.print();
console.log('-Attempting to remove key:hello. Returns null');
console.log('  removed hello and returned: ', myHashmap.del('hello'));
console.log('-Getting value of key:collide');
console.log('  ', myHashmap.get('collide'));
console.log('-Getting load value of hashmap');
console.log('  ', myHashmap.load());
console.log('');
console.log('-Adding key:value1 value:19');
console.log('-Adding key:value2 value:20');
console.log('-Adding key:value3 value:21');
myHashmap.set('value1', 19);
myHashmap.set('value2', 20);
myHashmap.set('value3', 21);
console.log('-Attempting to Add key:value4 value:22 to full list.  Returns false');
console.log('  ', myHashmap.set('value4', 22));
myHashmap.print();
console.log('-Getting load value of full hashmap');
console.log('  ', myHashmap.load());


describe('Fixed size hashmap', function() {
	describe('Create hashmap', function(){
		it('Initializing Hashmap with size 10', function() {
			length = 10;
			myHashmap = new hashmap.map(length);
			expect(myHashmap.arr.length).to.equal(length);
		});
	});
	describe('Add keys and values pair to hashmap', function() {
		it('Adding key:KPCB value:1', function() {
			var str = 'KPCB';
			var H = myHashmap.hash(str);
			//myHashmap.print();
			expect(myHashmap.set(str, 1)).to.equal(true);
			Object.keys(myHashmap.arr[H])[0].should.equal(str);
			//myHashmap.print();
		});
		it('Adding key:Summer internship value:2', function() {
			var str = 'Summer internship';
			var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 2)).to.equal(true);
			Object.keys(myHashmap.arr[H])[0].should.equal(str);
			//myHashmap.print();
		});
		it('Adding key:Alex Walling value:3', function(){
			var str = 'Alex Walling';
			var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 3)).to.equal(true);
			Object.keys(myHashmap.arr[H])[0].should.equal(str);
			//myHashmap.print();
		});
		it('Adding key:KPCB2015 value:4', function(){
			var str = 'KPCB2015';
			var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 4)).to.equal(true);
			Object.keys(myHashmap.arr[H])[0].should.equal(str);
			//myHashmap.print();
		});
		it('Adding key:David Walling value:5', function(){
            var str = 'David Walling';
            var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 5)).to.equal(true);
            Object.keys(myHashmap.arr[H])[0].should.equal(str);
        });
		it('Adding key:KPCB summer intern value:6', function(){
            var str = 'KPCB summer intern';
            var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 6)).to.equal(true);
            Object.keys(myHashmap.arr[H])[0].should.equal(str);
            //myHashmap.print();
        });
		it('Adding key:KPCB Fellows Summer Internship value:7', function(){
            var str = 'KPCB Fellows Summer Internship';
            var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 7)).to.equal(true);
            Object.keys(myHashmap.arr[H])[0].should.equal(str);
            //myHashmap.print();
        });
		//it('', function(){
		//	myHashmap.print();
		//});
	});
	describe('get value from key or null if key has no value', function() {
		it('Get value for key:Summer internship', function() {
			//console.log('	getting value for Summer internship:');
			//console.log('	  -', myHashmap.get('Summer internship'));
			expect(myHashmap.get('Summer internship')).to.equal(2);
		});
		it('Get value for key:hello world', function() {
			expect(myHashmap.get('hello world')).to.equal(null);
		});
		it('Get value for key:Alex Walling', function() {
			expect(myHashmap.get('Alex Walling')).to.equal(3);
		});
	});
	describe('Create collision in hashmap when adding key and value', function() {
		it('Adding key:collide value:8 with collision', function() {
			var str = 'collide';
			var H = myHashmap.hash(str);
			expect(myHashmap.set(str, 8)).to.equal(true);
            Object.keys(myHashmap.arr[H])[0].should.not.equal(str);
		});
	});
	describe('Remove values based on key', function() {
		it('Removed KPCB and return value of KPCB', function() {
			var str = 'KPCB';
			expect(myHashmap.del(str)).to.equal(1);
			//myHashmap.print();
		});
		it('Removed hello world but return null', function() {
			var str = 'hello';
			expect(myHashmap.del(str)).to.equal(null);
			//myHashmap.print();
		});
	});
	describe('Get value even when collision caused relocation of value', function() {
		it('Get value for key:collide', function() {
			var str = 'collide';
			expect(myHashmap.get(str)).to.equal(8);
			//myHashmap.print();
		});
	});
	describe('Get load value of Hashmap', function() {
		it('Return load value of the Hashmap', function() {
			expect(myHashmap.load()).to.equal(0.7);
			//myHashmap.print();
		});
	});
	describe('Fill up the hashmap', function() {
		it('Filled Hashmap, load will equal 1, return false when adding to full hashmap', function() {
			var str1 = 'value1';
			var str2 = 'value2';
			var str3 = 'value3';
			var str4 = 'value3';
			expect(myHashmap.set(str1, 19)).to.equal(true);
			expect(myHashmap.set(str2, 20)).to.equal(true);
			expect(myHashmap.set(str3, 21)).to.equal(true);
			expect(myHashmap.set(str4, 22)).to.equal(false);
			expect(myHashmap.load()).to.equal(1);
		});
	});
});
