/**
 * We can express the class with the particular name
 * Here, the scope of the class name is up to the class body
 * The class is retrieved using class.name property.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var person = class Person {
    construtor(id, name) {
        this.id = id
        this.name = name
    }
}

console.log(person.name)