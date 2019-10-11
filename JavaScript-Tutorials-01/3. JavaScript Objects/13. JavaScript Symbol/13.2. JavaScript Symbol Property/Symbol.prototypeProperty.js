/**
 * The JavaScript Symbol.prototype symbol is used to produce the prototype for the symbol constructor
 * Syntax: Symbol.prototype
 * Return: The prototype for the symbol constructor.
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var object1 = Symbol('phuocnguyen')

Symbol.prototype.toString = function () {
    return 'hi' // or number
}
console.log(object1.toString()) // hi