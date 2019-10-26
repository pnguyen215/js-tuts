function assgin1() {
	console.log('Cloning an object');
	const original = {
		name: 'Fiesta',
		car: {
			color: 'blue'
		}
	}
	const copied = Object.assign({}, original)

	original.name = 'Focus'
	original.car.color = 'yellow'

	console.log(copied.name); //Fiesta
	console.log(copied.car.color); //yellow
}

function assign2() {
	console.log('Warning for Deep Clone');
	'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
  
  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
  
  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
  
  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}
  
  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

function assign3() {
	console.log('Merging objects');
	var o1 = { a: 1 };
	var o2 = { b: 2 };
	var o3 = { c: 3 };

	var obj = Object.assign(o1, o2, o3);
	console.log(obj); // { a: 1, b: 2, c: 3 }
	console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
}

assgin1();
assign2();
assign3();
