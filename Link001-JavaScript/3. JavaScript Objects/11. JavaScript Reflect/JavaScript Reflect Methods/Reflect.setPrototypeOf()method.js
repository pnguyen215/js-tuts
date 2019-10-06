/**
 * The static Reflect.setPrototypeOf() method is used to set the prototype of a specified object to another object
 * The first argument is the object reference and the second argument can be either null or an object.
 * This method is same as Object.setPrototypeOf() method.
 * Syntax: Reflect.setPrototypeOf(obj, prototype)
 * Parameters: 
 * Obj: It is the target object of which to set the prototype
 * Prototype: It is the object 's new prototype.
 * Return: This method returns a Boolean which indicates whether or not the prototype was successfully set.
 * Exceptions: A TypeError, if the target is not an Object
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
const object1 = {}
console.log(Reflect.setPrototypeOf(Object.freeze(object1), null)) // false

// example 2
var human = {
    speak: function () {
        console.log(this.name + ' make everyone fun!')
        console.log('say hi or something')
    }
}

class create {
    constructor(name) {
        this.name = name
    }
}

Reflect.setPrototypeOf(create.prototype, human)
var person = new create('phuocnguyen')
person.speak()

// example 3
let car = {
    drive: function () {
        return 'yes or no ?'
    }
}

let person2 = {
    license: function () {
        return 'you have a drive license?'
    }
}

Object.setPrototypeOf(person2, car)
console.dir(person2)
console.log(person2.license())
console.log(person2.drive())