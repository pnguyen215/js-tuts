/**
 * The JavaScript JSON.parse() takes a JSON string and transforms it into a JavaScript object
 * Syntax: JSON.parse(text[, reviver])
 * Parameters:
 * text: The string to parse as JSON.
 * reviver: It is Optional.It prescribes how the value originally produced by parsing is transformed, before being returned.
 * Return value
 * An object corresponding to the given JSON text
 * 
 */

// example 1
var jsonString = '{"name": "phuocnguyen","isStudent": true,"age": 23}'

var student = JSON.parse(jsonString);

console.log(student.isStudent) // true
console.log(student) // { name: 'phuocnguyen', isStudent: true, age: 23 }

// example 2
// to parse an array of attributes
var jsonArray = '["audi","bmw","bently","porsche"]'
var cars = JSON.parse(jsonArray)
console.log(cars) // [ 'audi', 'bmw', 'bently', 'porsche' ]