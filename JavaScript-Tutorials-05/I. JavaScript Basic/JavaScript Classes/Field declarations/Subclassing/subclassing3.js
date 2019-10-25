/*
Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, 
you can instead use "Object.setPrototypeOf()"
*/

const Animal = {
	speak(){
		return this.name + ' makes a noise!';
	}
};

class Cat {
	constructor(name){
		this.name = name;
	}
}


Object.setPrototypeOf(Cat.prototype, Animal); // If you do not do this you will get a TypeError when you invoke speak

let cat1 = new Cat("LuLu");
console.log(cat1.speak());