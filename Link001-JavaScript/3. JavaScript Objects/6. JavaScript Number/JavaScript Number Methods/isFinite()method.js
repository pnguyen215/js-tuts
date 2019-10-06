/**
 * The JavaScript number isFinite() method determines whether the given value is a finite number
 * It returns true if the value is a finite number, otherwise it returns false.
 */

// example 1
var num1 = 0
var num2 = -1
var num3 = 1

console.log(Number.isFinite(num1)) // true
console.log(Number.isFinite(num2)) // true
console.log(Number.isFinite(num3)) // true

// example 2
function check(num4, num5) {
    return num4 / num5
}

console.log(Number.isFinite(check(0, 10))) // true
console.log(Number.isFinite(check(10, 0))) // false

// example 3
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite(-Infinity)) // false
console.log(Number.isFinite(NaN)) // false