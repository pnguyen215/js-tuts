/**
 * The JavaScript Symbol.for() method is used to search for existing symbol in a runtime - wide symbol registry with the provided key and returns if it found.
 * Otherwise, a new symbol gets created with this key.
 * Syntax: Symbol.for(key);
 * Parameters: Key: The Keys to the symbol.
 * Return: Existing symbol with the given key if found otherwise, a new symbol is created and returned
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
 * 
 * 
 * 
 */

// example 1
var symbol1 = Symbol.for("PC") //  it's created  
var symbol2 = Symbol.for("PC") // so it is returned

console.log(symbol1 === symbol2) // true