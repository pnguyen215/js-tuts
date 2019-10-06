/**
    The JavaScript number toExponential() method converts the given number into an exponential notation and returns it in the form of string.
    syntax: Number.toExponential(num)
    parameter:
    num - It is optional.It represents an integer that specify the digits to be placed after decimal point
    return :A string that represents exponential notation of the given number.
*/

var num = 987654
console.log(num.toExponential()) // 9.87654e+5
// pass an integer that specify the digits to be placed after decimal point
console.log(num.toExponential(2))