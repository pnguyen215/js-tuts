/*
The Object.getPrototypeOf() method of JavaScript returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

*/

// Example 1
let human = {
    isMoral: true,
};

// create a new object with human as a prototype  
let deviant = Object.create(human);
console.log(Object.getPrototypeOf(deviant) === human); /* get prototype of deviant*/


Object.getPrototypeOf(deviant, {}); /*change prototype of deviant*/

// Example 2
const prototype1 = {};
const prototype2 = {};
/*create a new object with prototype1, prototype2 as prototype*/
const obj1 = Object.create(prototype1);
const obj2 = Object.create(prototype2);
/*print out */
console.log(Object.getPrototypeOf(obj1) === prototype1);
console.log(Object.getPrototypeOf(obj2) === prototype2);
console.log(Object.getPrototypeOf(obj1) === prototype2);