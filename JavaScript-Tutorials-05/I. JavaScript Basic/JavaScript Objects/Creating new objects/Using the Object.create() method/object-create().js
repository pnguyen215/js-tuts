/*
Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, 
without having to define a constructor function.

*/

let user = {
	name: 'phuocnguyen',
	age: 23,
	location: 'vn',
	gender: true,
	getDetail: function(){
		return this.name + this.age + this.gender;
	}
}

let currentUser =Object.create(user); // using Object.create() to create new Object

console.log(currentUser.name);
console.log(currentUser.getDetail());

currentUser.gender = false; // change type of gender
console.log(currentUser.getDetail());


