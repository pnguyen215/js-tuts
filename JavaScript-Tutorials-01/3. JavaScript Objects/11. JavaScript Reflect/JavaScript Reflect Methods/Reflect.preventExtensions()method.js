/**
 * The static Reflect.preventExtensions() method is used prevent future extensions to the object
 * This method is same as Object.preventExtensions() method.
 * Syntax: Reflect.preventExtensions(obj)
 * Parameters: Obj: It is the object on which to prevent extensions.
 * Return: This method returns true if the target was successfully set to prevent extensions.Otherwise, this method returns false
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
 * 
 */

// example 1
const object1 = {}

console.log(Reflect.isExtensible(object1)) // true

Reflect.preventExtensions(object1)

console.log(Reflect.isExtensible(object1)) // false

object1.location = "vn"
console.log(object1.hasOwnProperty('location')) // false

// example 2
const object2 = {
    name: "phuocnguyen",
    age: 23,
    location: "vn"
}
Reflect.preventExtensions(object2) // protection
console.log(object2.hasOwnProperty('name')) // true
delete object2.name
console.log(object2.hasOwnProperty('name')) // false

// example 3
var object3 = {

}
Reflect.preventExtensions(object3)
console.log(Reflect.isExtensible(object3)) // false