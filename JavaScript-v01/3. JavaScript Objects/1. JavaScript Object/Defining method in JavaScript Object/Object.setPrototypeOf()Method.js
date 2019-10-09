/*
The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null
All JavaScript objects inherit properties and methods from a prototype.
It is generally considered the proper way to set the prototype of an object.
*/


// Example 1
let car = {
    banner() {
        return "Audi";
    }
}

let libertyWalk = {
    strengthening() {
        return "Audi Bench";
    }
}

Object.setPrototypeOf(libertyWalk, car); // set car prototype to libertyWalk prototype

console.dir(libertyWalk); // print out libertyWalk object
console.log(libertyWalk.strengthening());
console.log(libertyWalk.banner());


// Example 2
var appearance = {
    shape() {
        console.log(this.name + ' is made!');
    }
};
class Animal {
    constructor(name) {
        this.name = name;
    }
}

Object.setPrototypeOf(Animal.prototype, appearance); // set appearance prototype to animal prototype

var otherAnimal = new Animal("dog");
otherAnimal.shape();