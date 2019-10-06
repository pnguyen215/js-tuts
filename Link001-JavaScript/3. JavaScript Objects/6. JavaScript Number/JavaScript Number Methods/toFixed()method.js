/**
This method formats a number with a specific number of digits to the right of the decimal.
number.toFixed([digits])
digits− The number of digits to appear after the decimal point.

Return Value
A string representation of number that does not use exponential notation and has the exact number of digits after the decimal place

*/
var num1 = 233.7842
console.log(num1.toFixed())
console.log(num1.toFixed(2))
console.log(num1.toFixed(6))