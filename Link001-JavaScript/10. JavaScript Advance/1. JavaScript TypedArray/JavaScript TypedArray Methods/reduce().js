/**
 * The JavaScript reduce() method reduces the elements of an array into a single value and the returned value of the function is stored in an accumulator and each element in the array (from left to right) has to reduce it to a single value.
 * Syntax: array.reduce(function (total, currentValue, index, arr), initialValue)
 * Parameters:
 * Total(required): The previously returned value of the function. 
 * CurrentValue(Required): The value of the current element. 
 * Index(Optional): The index of the current element being processed in the array. Starts at index 0. 
 * Arr(Optional): The array reduce() was called upon. 
 * InitialValue(Optional): A value to be passed to the function as the initial value.
 * Return: Return the reduced single value of the array.
 * 
 * 
 * 
 */

// example 1
var arrays1 = [1, 3, 4, 100, 101, -1, 0]

let sum = arrays1.reduce(function (total, currentValue) {
    // return total + currentValue
    return Math.max(total, currentValue)
}, 0) // 0 is intial value  or other number
console.log(sum)

// example 2
var arrays2 = [
    ['audi', 'bmw'],
    ['lamborghini', 'chevrolet'],
    ['bently', 'ferrari']
]
let output = arrays2.reduce(function (previousValue, currentValue) {
    return previousValue.concat(currentValue)
})
console.log(output)