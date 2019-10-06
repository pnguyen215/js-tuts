/**
 * Unlike function declaration, the class declaration is not a part of JavaScript hoisting
 * it is required to declare the class before invoking it.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
// creating objects
var person1 = new Person(1, "phuocnguyen")
var person2 = new Person(2, "david")

person1.getInfo()
person2.getInfo()

// hoisting
class Person {
    constructor(id, name) { // Initializing an object
        this.id = id
        this.name = name
    }
    // Declaring method  
    getInfo() {
        console.log(this.id + " " + this.name)
    }

}

// output: error when has hoisting