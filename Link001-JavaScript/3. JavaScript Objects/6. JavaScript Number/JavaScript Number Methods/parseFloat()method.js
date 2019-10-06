/**
The JavaScript number parseFloat() method parses a string argument and converts it into a floating point number
It returns NaN, if the first character of given value cannot be converted to a number.
syntax: Number.parseInt(string)
*/

// example 1
var text1 = "23"
var text2 = "23.15"
var text3 = "string"
var text4 = "23string"
var text5 = "23.15string"
console.log(Number.parseFloat(text1)) // 23
console.log(Number.parseFloat(text2)) // 23.15
console.log(Number.parseFloat(text3)) // NaN
console.log(Number.parseFloat(text4)) // 23
console.log(Number.parseFloat(text5)) // 23.15

// exmaple 2
var result = text1 + text2
console.log(result) // 2323.15
var result = Number.parseFloat(text1) + Number.parseFloat(text2)
console.log(result) // 46.15