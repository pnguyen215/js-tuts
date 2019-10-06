/*
The Object.defineProperty() method defines a new property directly on an object and returns the object. To change the flags, we can use Object.defineProperty. 
We cannot change it back, because define property doesn?t work on non-configurable properties

*/

// Example 1

const obj1 = {};
Object.defineProperty(obj1, 'property1', {
    value: 23,
    value: 2019,
});
obj1.property1;
/*throws an error in strict node*/
console.log(obj1.property1);

// Example 2
const obj2 = {};
Object.defineProperty(obj2, 'property2', {
    value: 23,
    value: 2019,
});
obj2.property2 = 2020;
/*throws an error in strict node*/
console.log(obj2.property2);