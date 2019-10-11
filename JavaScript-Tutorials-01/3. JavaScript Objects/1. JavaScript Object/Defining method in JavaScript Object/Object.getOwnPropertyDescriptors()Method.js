/*
The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.
The difference between getOwnPropertyDescriptors() and getOwnPropertyDescriptor() method is that getOwnPropertyDescriptors() method ignores symbolic properties.


*/

// Example 1
const obj1 = {
    property1: 101
};

const descriptors1 = Object.getOwnPropertyDescriptors(obj1);
console.log(descriptors1.property1.writable);
console.log(descriptors1.property1.value);
console.log(descriptors1.property1);