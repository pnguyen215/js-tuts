/**
 * The JavaScript Symbol.split symbol is used to split a string at the indices that match the regular expression
 * Syntax: Symbol.split(string)
 * Return: A string that split from the given expression
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
        [Symbol.split](string) {
            var index = string.indexOf(this.name)
            return this.name
        }
}
var obj = new Person('phuocnguyen')

console.log(obj.name.split('phuoc'))