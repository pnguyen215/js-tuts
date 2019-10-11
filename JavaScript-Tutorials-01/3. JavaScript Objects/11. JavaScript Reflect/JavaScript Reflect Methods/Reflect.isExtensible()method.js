/**
 * The static Reflect.isExtensible() method is used to check if an object is extended or not.
 * This method is similar to Object.isExtensible() but with some difference.
 * Syntax: Reflect.isExtensible(obj)
 * Parameters: Obj: It is the target object which to check if it is extensible.
 * Return: This method returns a Boolean which indicates whether or not the target is extensible
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
console.log(Reflect.isExtensible(object1)) // true
Reflect.preventExtensions(object1)
console.log(Reflect.isExtensible(object1)) // false

// example 2
const object2 = Object.seal({})
console.log(Reflect.isExtensible(object2)) // false