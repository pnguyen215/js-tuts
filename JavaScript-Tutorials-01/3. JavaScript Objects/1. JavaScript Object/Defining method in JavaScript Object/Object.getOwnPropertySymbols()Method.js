/*
The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object
This method returns an empty array unless you have set symbol properties on your object.

*/
const obj1 = {};

const a = Symbol('a');
const b = Symbol.for('b');
obj1[a] = 'localSymbol';
obj1[b] = 'globalSymbol';
const obj2 = {};
const c = Symbol('c');
obj2[c] = 'phuocnguyen';
const objectSymbol = Object.getOwnPropertySymbols(obj1);


console.log(objectSymbol.length);