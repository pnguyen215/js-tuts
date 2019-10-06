/*
JavaScript Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs. 
The ordering of the properties is the same as that given by looping over the property values of the object manually.
*/
const obj = { name: "phuocnguyen", age: 23, year: 2019 };
console.log(Object.entries(obj)[0]);

const obj2 = { 3: 'one', 4: 'two', 1: 'three' };
console.log(Object.entries(obj2)[2]);