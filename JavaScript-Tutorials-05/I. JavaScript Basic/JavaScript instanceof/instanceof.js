// case 1
class Person{

}

class Student extends Person{

}

class Manager extends Person{

}

function testInstanceOf(){
	let student = new Student();
	let manager = new Manager();

	console.log(student instanceof Object);
	console.log(manager instanceof Object);
	console.log(student instanceof Person);
	console.log(manager instanceof Person);
	console.log(manager instanceof Manager);
	console.log(student instanceof Student);


	console.log(manager instanceof Student); // false
	console.log(student instanceof Manager); // false 
}

testInstanceOf();

console.log();
// case 2
//Demonstrating that String and Date are of type Object and exceptional cases

let string1 = "phuocnguyenit97";
let string2 = new String("String was created by phuocnguyenit97");
let string3 = new String();
let date = new Date();
let object = {};
let nonObject = Object.create(null);

function testInstanceOf2(){
	console.log(string1 instanceof String);
	console.log(string2 instanceof String);
	console.log(string3 instanceof String);
	console.log(date instanceof Date);
	console.log(date instanceof Object);
	console.log(string1 instanceof Object);
	console.log(string2 instanceof Object);
	console.log(object instanceof Object); // true
	console.log(nonObject instanceof Object); // false
	

}

testInstanceOf2();

