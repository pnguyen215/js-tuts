/**
 * The static Reflect.getOwnPropertyDescriptor() method is used to retrieve the descriptor of an object 's property
 * It is same as the Object.getOwnPropertyDescriptor method.
 * Syntax: Reflect.getOwnPropertyDescriptor(obj, Key)
 * Parameters: 
 * Obj: It is the target object in which to look for the property
 * Key: It is the name of the property to get an own property descriptor for
 * Return: It returns the property descriptor object if the property exists in the given target object.Otherwise, it returns undefined.
 * Exceptions: A TypeError, if the target is not an Object.
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
const object1 = {
    property1: 2019,
    enumerable: true,
    writable: true,
    property2: {
        name: "phuocnguyen",
        age: 23,
        location: "vn",
    }
}

console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1'))
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property2'))
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').writable) // true
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').value) // 2019
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property2').value) // { name: 'phuocnguyen', age: 23, location: 'vn' }
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property3') === undefined) // true
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property3')) // undefined