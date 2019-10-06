/*
The Object.is() method of JavaScript is used to determine whether two values are the same value. There is a special built-in method that compares values.
*/
const obj1 = {};
const obj2 = {
    property1: 23,

};
/*is method */
console.log(Object.is(obj1));
console.log(Object.is(obj2));
/**/
Object.seal(obj2);
console.log(Object.isSealed(obj2));

/**/
console.log(Object.isExtensible(obj2));
console.log(Object.isExtensible(obj1));