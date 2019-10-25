/*
ECMAScript 6 introduced the class keyword to create classes in JavaScript.
Now you can use the class attribute to create a class in JavaScript instead of a function constructor, 
and use the new operator to create an instance.
*/

class Student{
	constructor(name, age, gender){
		this.name = name;
		this.age = age; 
		this.gender = gender;
	}
	getFullDetail(){
		return this.name + this.age + this.gender;
	}

}

let student1 = new Student("phuocnguyen" ,23, true);
console.log(student1.getFullDetail());


// example 2
class Rectangle{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	// getter
	get area(){
		return this.calculateArea();
	}

	calculateArea(){
		return this.width*this.height;
	}
}

let rectangle1 = new Rectangle(10, 10);
console.log(rectangle1.area); // 100