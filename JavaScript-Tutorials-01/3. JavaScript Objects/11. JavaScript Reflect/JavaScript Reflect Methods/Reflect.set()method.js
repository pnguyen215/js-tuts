/**
 * The static Reflect.set() method is used to set the value of an object 's property
 * It returns true if the property was successfully set.Otherwise, it returns false.
 * Syntax: Reflect.set(obj, Key, value[, receiver])
 * Parameters
 * Obj: It is the target object on which to set the property.
 * Key: It is the name of the property to set
 * value: It is the value to set.
 * Receiver: It is the value of this provided for the call to target if a setter is encountered
 * Return: This method returns a Boolean which indicates whether or not setting the property was successful.
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
Reflect.set(object1, 'name', 'phuocnguyen')
Reflect.set(object1, 'age', 23)
console.log(object1.name) // phuocnguyen
console.log(object1) // { name: 'phuocnguyen', age: 23 }