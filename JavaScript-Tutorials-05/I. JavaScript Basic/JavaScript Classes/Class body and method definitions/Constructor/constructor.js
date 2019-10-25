/*
The constructor method is a special method for creating and initializing an object created with a class. 
There can only be one special method with the name "constructor" in a class. 
A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

*/

class Student{
	constructor(name, id){ // this is called constructor
		this.id = id;
		this.name = name;
	}
}

//A constructor can use the super keyword to call the constructor of the superclass