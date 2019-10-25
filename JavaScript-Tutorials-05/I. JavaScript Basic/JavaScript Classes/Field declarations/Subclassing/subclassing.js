/*
Subclassing is a way you can implement inheritance in Javascript classes, keyword extends is used to create a child class of a class.

*/

class Animal{
	constructor(name){
		this.name  = name;
	}

	get speak(){
		return 	`${this.name} makes a noise!`;
	}
}

class Cat extends Animal{
	constructor(name){
		super(name);
	}

	get speak(){
		return `${this.name} barks.`;
	}
}

let cat1 = new Cat("Lulu");
console.log(cat1.speak);

