/**
 * The JavaScript JSON.stringify() method converts a JavaScript value to a JSON string
 * It replaces values if a replacer function is specified or includes only the specified properties if a replacer array is specified
 * Syntax: Json.stringify(value[, replacer[, space]])
 * Parameters: 
 * value: The value to convert to a JSON string.
 * Replacer: A function that alters the behavior of the stringification process.It is optional
 * space: A String or Number object that 's used to insert white space into the output JSON string for readability purposes. It is optional.
 * Return: A JSON string representing the given value
 */

// example 1
var json = { // this object json 
    "name": "phuocnguyen",
    "age": 23,
    "isStudent": true,
    "location": "vn"
}

var person = JSON.stringify(json) // transform to JSON string
console.log(person)

// example 2: to stringify from array object to JSON string
var collection = [
    "audi",
    "bmw",
    "bently"
]
var cars = JSON.stringify(collection)
console.log(cars)