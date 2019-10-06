/*
The Object.getOwnPropertyDescriptor method allows to query the full information about a property and returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.


*/

const obj1 = {
    property1: 23
};

const obj2 = {
    property2: 2019
};

const descriptor1 = Object.getOwnPropertyDescriptor(obj1, 'property1');
const descriptor2 = Object.getOwnPropertyDescriptor(obj2, 'property2');
/*

*/
console.log(descriptor1.enumerable);
console.log(descriptor2.enumerable);
console.log(descriptor1.writable);
/*

*/
console.log(descriptor1.value);
console.log(descriptor2.value);