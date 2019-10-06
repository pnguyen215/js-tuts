/**
 * The JavaScript values() method is used to define the value of the contents in the array.
 * Syntax: array.values()
 * Return: Index value
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 
var arrays = new Uint8Array([1, 5, 1, 8, 9, 23, 56, 10])
var out1 = arrays.values()
out1.next()
console.log(out1.next().value) // 5

console.log(out1.next().value) // 1