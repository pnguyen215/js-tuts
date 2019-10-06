/**
 * The JavaScript Symbol.toString() method purpose is to return a string representation of an object
 * Syntax: Symbol().toString();
 * Return: A string representing the specified Symbol object
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

var symbol1 = Symbol.for('phuocnguyen') // it is created
var symbol2 = Symbol.for('davidnguyen') // is is returned

console.log(symbol1.toString(symbol1)) // Symbol(phuocnguyen)
console.log(symbol2.toString(symbol2)) // Symbol(davidnguyen)