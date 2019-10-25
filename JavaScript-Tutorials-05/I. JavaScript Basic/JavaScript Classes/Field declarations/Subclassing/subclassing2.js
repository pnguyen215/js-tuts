// One may also extend traditional function-based "classes"

function Animal(name){
	this.name = name;
}

Animal.prototype.speak = function(){
	return this.name + ' makes a noise!';
}

class Cat  extends Animal{
	speak(){
		return this.name + ' barks!';
	}
}

// test
let animal = new Animal("dog");
console.log(animal.speak());

let cat1 = new Cat("LuLu");
console.log(cat1.speak());