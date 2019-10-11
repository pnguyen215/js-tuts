/**
 * The JavaScript Symbol.keyFor() method uses the global symbol registry to look up the key for the symbol
 * So it doesn 't work for non-global symbols
 * If the symbol is not global, it won 't be able to find it and return undefined
 * Syntax: Symbol.keyFor(Symbol);
 * Parameters: Symbol(required): The symbol to find a key.
 * Return: A string representing the key for the given symbol if one is found on the global registry
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var symbol1 = Symbol.for('phuocnguyen') // it is created
var symbol2 = Symbol.for('phuocnguyen')

console.log(Symbol.keyFor(symbol1)) // phuocnguyen
console.log(symbol1 === symbol2) // true