var user = {
	firstname : 'phuoc',
	lastname: 'nguyen',
	email: 'nguyenhuuphuocit97@gmail.com',
	age: 23
};


// traversing element
//The for...in statement iterates over all non-Symbol, enumerable properties of an object.
for(let value in user){
	console.log(user[value]); // 1sr way
	console.log(value); // 2nd way
}


// The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
const object1 = {
	name: 'phuocnguyen',
	age: 23,
	location: 'vn'
};

console.log(Object.keys(object1)); //[ 'name', 'age', 'location' ]

// The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
console.log(Object.getOwnPropertyNames(object1)) // [ 'name', 'age', 'location' ]

