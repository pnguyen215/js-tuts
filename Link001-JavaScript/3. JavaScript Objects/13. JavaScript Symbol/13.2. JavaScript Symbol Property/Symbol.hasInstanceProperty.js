/**
 * The JavaScript Symbol.hasInstance is used to determine if a constructor object recognizes an object as its instance
 * Syntax: [Symbol.hasInstance](obj)
 * Return: Return true if the value is in the chain of an object, otherwise false
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

// example 1
var subArray = [2019, 9, 26, 11, 9]
console.log(Array[Symbol.hasInstance](subArray)) // true

// example 2
function message() {}

var messageObject = new message()
console.log(message[Symbol.hasInstance](messageObject)) // true