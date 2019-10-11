/**
 * The static Reflect.has() method is used to check if a property exists in an object.It works like the in operator as a function.
 * Syntax: Reflect.has(target, propertyKey)
 * Parameters: 
 * target: It is the object in which to look for the property
 * propertyKey: It is the name of the property to check.
 * Return: It returns a Boolean which indicates whether or not the target has the property
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
const object1 = {
    property1: 2019,
    property2: 23
}

console.log(Reflect.has(object1, 'property1')) // true
console.log(Reflect.has(object1, 'property2')) // true
console.log('property1' in object1) // true
console.log('property3' in object1) // false