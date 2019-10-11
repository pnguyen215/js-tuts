/*
The Object.preventExtensions() only prevents the addition of new properties from ever being added to an object
This change is a permanent that means once an object has been made non-extensible, it cannot make extensible again
*/


// Example 1
const obj1 = {};
Object.preventExtensions(obj1);
console.log(Object.isExtensible(obj1));

// Example 2
const obj2 = {};
Object.preventExtensions(obj2);

obj2.ph = 23;
console.log(obj2.hasOwnProperty("ph"));

// Example 3
const obj3 = { "phuocnguyen": 23 };
Object.preventExtensions(obj3);
delete obj3.phuocnguyen;
console.log(Object.hasOwnProperty("phuocnguyen"));