/**
 * he JavaScript math random() method returns the random number between 0(inclusive) and 1(exclusive)
 * The random number between 0(inclusive) and 1(exclusive).
 */

console.log(Math.random())

//  to find out the random number between two values
function numberRandom(num1, num2) {
    return Math.random() * (num2 - num1) + num1 // get value random
}
console.log(numberRandom(3, 8))

// to find out the random integer number between two values.
function getNumberRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
console.log(getNumberRandom(2, 10))