/**
number.toPrecision([precision])
precision− An integer specifying the number of significant digits.
Return Value
Returns a string representing a Number object in fixed - point or exponential notation rounded toprecision significant digits.
*/

var num1 = new Number(8.872476)
console.log(num1.toPrecision())
console.log(num1.toPrecision(4))
console.log(num1.toPrecision(2))
console.log(num1.toPrecision(1))