/**
 * The Java Symbol.unscopables symbol is an object value whose inherited property names are excluded from with environment bindings
 * NOTE: 
 * Setting a property to true in an unscopables object makes it unscopable and therefore it won 't appear in lexical scope variables.
 * Setting a property to false makes it scopable and thus it will appear in lexical scope variables
 * Syntax: [Symbol.unscopables]
 * return :Check the variable appear in lexical scope variable
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
var object = {
    name: 'phuocnguyen',
    age: 23,
    location: 'vn'
}

object[Symbol.unscopables] = {
    name: true,
    age: false,
    location: true
}

for (let i in object) {
    console.log(i) // get all name attribute
}

with(object) {
    console.log(age) // 23: for object is false
}