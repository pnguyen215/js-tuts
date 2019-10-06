/**
 * The Reflect.deleteProperty() method allows to delete a property on an object
 * If the method returns true, that means deleting the property is successful.Otherwise, it returns false.
 * Syntax: Reflect.deleteProperty(target, propertyKey)
 * Parameters:
 * target: It is the target object on which to delete the property
 * propertyKey: It is the name of the property to be deleted
 * Return: A Boolean represents that the property was successfully deleted or not
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
 * 
 * 
 * 
 * 
 */

// example 1
var array1 = [1, 3, 4, 6, 8]
Reflect.deleteProperty(array1, '4')
console.log(array1)

// example 2
const object = {
    name: "phuocnguyen",
    age: 23
}
Object.freeze(object) // protect object, do not allowed handle
console.log(Reflect.deleteProperty(object, 'age')) // false
console.log(object)