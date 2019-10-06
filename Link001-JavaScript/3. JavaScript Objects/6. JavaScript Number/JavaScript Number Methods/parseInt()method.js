/**
The JavaScript number parseInt() method parses a string argument and converts it into an integer value
With string argument, we can also provide radix argument to specify the type of numeral system to be used.
syntax: Number.parseInt(string, radix)
Parameter
string - It represents the string to be parsed.

radix - It is optional.An integer between 2 and 36 that represents the numeral system to be used.
Return
An integer number.It returns NaN, if the first character cannot be converted to a number.
*/

// example 1
var text1 = "23"
var text2 = "23.15"
var text3 = "string"
var text4 = "23string"
var text5 = "23.15string"

console.log(Number.parseInt(text1)) // 23
console.log(Number.parseInt(text2)) // 23
console.log(Number.parseInt(text3)) // NaN
console.log(Number.parseInt(text4)) // 23
console.log(Number.parseInt(text5)) // 23

// example 2
var result = text1 + text2
console.log(result) // 2323.15
var result = Number.parseInt(text1) + Number.parseInt(text2)
console.log(result) // 46

// example 3: pass radix argument within parseInt() method
console.log(Number.parseInt(text1, 8)) // 19
console.log(Number.parseInt(text1, 16)) // 35