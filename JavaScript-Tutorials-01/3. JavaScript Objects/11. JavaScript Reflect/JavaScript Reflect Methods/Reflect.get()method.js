/**
 * The static Reflect.get() method is used to retrieve the property from an object as afunction
 * The first argument is the object and the second argument is the property name.
 * Syntax: Reflect.get(target, propertyKey[, receiver])
 * Parameters: 
 * target: It is the target object on which to get the property
 * propertyKey: It is the name of the key to get
 * receiver: It is the value of this provided for the call to object if a getter is encountered
 * Return: It returns the value of the property.
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
 * 
 */

// example 1
const data = {
    name: "phuocnguyen",
    age: 23
}
console.log(Reflect.get(data, "age")) // 23
console.log(Reflect.get(data, "name") === "phuocnguyen") // true
console.log(Reflect.get(data, "age") === 23) // true
console.log(Reflect.get(data, "location") === "vn") // false
console.log(Reflect.get(data, "gender") === undefined) // true


// example 2
const subData = Object.create(data) // data is root, parent of subData
console.log(Reflect.get(subData, "name") === "phuocnguyen") // true, Reflect.get will traverse the prototype chain to find property  

// example 3
var array = [2019, 9, 26] // 0: 2019, 1: 9, 3: 26
console.log(Reflect.get(array, 1)) // 9