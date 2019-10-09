/*
The Object.seal() method of JavaScript seals an object which prevents new properties from being added to it and marks all existing properties as non-configurable.
The object to be sealed is passed as an argument, and the method returns the object which has been sealed.

The Object.sealed() method returns the object which has been sealed.
*/

// Example 1
const obj1 = {
    name: "phuocnguyen"
};
const obj2 = Object.seal(obj1);
/*prevents other code from deleting properties of an object.*/
obj2.name = "david";
console.log(obj2.name); // david

// Example 2
const obj3 = {
    name: "david nguyen"

};

Object.seal(obj3);
/*prevents other code from deleting properties of an object.*/
obj3.name = "phuocnguyen";
console.log(obj3.name);
delete obj3.name; //// cannot delete when sealed  
console.log(obj3.name);