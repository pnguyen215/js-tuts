/**
 * The static Reflect.getPrototypeOf() method is used to return the prototype of the specified object
 * It is same as the method Object.getProtptypeOf().
 * Syntax: Reflect.getPrototypeOf(obj)
 * Parameters: Obj: It is the target object of which to get the prototype.
 * Return value: This method returns the prototype of the given object.
 * Exceptions: A TypeError, if you give it an invalid target such as a Number or String literal, null or undefined
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
 * 
 */

// example 1
const object1 = Object.create(null) // create new object without parent
console.log(Reflect.getPrototypeOf(object1) === null) // true

// example 2
const object2 = {
    property1: 23
}

const value1 = Reflect.getPrototypeOf(object2)
console.log(value1) // {}