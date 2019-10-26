let user = {
	name: 'phuocnguyen',
	age: 22,
	location: 'us'
};

console.log("Creating a property");
function test1(){
	Object.defineProperty(user, "detail",{
		value: user.name + " " + user.age + " " + user.location
	});
	console.log(user.detail);
}

test1();

console.log('Modifying a property');
function test2(){
	let object1 = {};
	Object.defineProperty(object1, 'thisValueOfObject1', {
		value: 22,
		writable: false
	});

	console.log("Before: " + object1.thisValueOfObject1);

	object1.thisValueOfObject1 = 23;
	console.log("After: " + object1.thisValueOfObject1);

}
test2();

function test3(){
	'use strict';
	let object1 = {};
	Object.defineProperty(object1, 'thisValueOfObject1', {
		value: 22,
		writable: false
	});

	console.log("Before: " + object1.thisValueOfObject1);

	object1.thisValueOfObject1 = 23; // / throws TypeError: "thisValueOfObject1" is read-only
	console.log("After: " + object1.thisValueOfObject1);
}

test3();





