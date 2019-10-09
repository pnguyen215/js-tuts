/**
 * The JavaScript Symbol.search symbol determine the method that returns the index within a string that matches with the regular expression.
 * Syntax: [Symbol.search](string)
 * Return: The position of a string.
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
 * 
 * 
 * 
 * 
 */

// example 1
class Person {
    constructor(name) {
            this.name = name
        }
        [Symbol.search](string) {
            return string.indexOf(this.name)
        }

}

var obj = new Person('phuocnguyen')
console.log(obj.name) // phuocnguyen
console.log(obj.name.search(new Person('nguyen')))