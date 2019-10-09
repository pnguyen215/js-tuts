/**
 * The JavaScript Symbol.replace symbol determine the method that replaces the matched substring of a string
 * Syntax: [Symbol.replace](string).
 * Return: new string
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
// example 
class Human {
    constructor(name) {
            this.name = name
        }
        [Symbol.replace](string) {
            return `${string}`
        }
}

//
var person = new Human('phuocnguyen') // create new object
console.log('Before: ' + person.name) // phuocnguyen
console.log('After: ' + 'david'.replace(person.name)) // david
console.log('To UpperCase: ' + person.name.toUpperCase().replace(person.name)) // PHUOCNGUYEN