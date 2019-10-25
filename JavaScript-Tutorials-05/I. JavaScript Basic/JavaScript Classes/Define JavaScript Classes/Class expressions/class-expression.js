/*
A class expression is another way to define a class
Class expressions can be named or unnamed
The name given to a named class expression is local to the class's body. (it can be retrieved through the classes (not an instance's) name property, though).

*/

let student = class { // unnamed
	constructor(name, id){
		this.id = id;
		this.name = name;
	}

	getDetail(){
		return this.id + this.name;
	}
}

console.log(student.name); // student : get name of class

// example 2
let person = class Person{
	constructor(name, address){
		this.name = name;
		this.address = address;
	}

	getInfo(){
		return this.name + " " + this.address;
	}
}

console.log(person.name);// Person