/**
 * 
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

// creating objects
var person1 = new Person(1, "phuocnguyen")
var person2 = new Person(2, "david")

person1.getInfo()
person2.getInfo()