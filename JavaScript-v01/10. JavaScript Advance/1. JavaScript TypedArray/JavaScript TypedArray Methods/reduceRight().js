/**
 * The JavaScript reduceRight() method reduces the elements of an array into a single value and the returned value of the function is stored in an accumulator and each element in the array (from right-to-left) has to reduce it to a single value.
 * Syntax: array.reduceRight(function (total, currentValue, index, arr), initialValue)
 * Parameters: 
 * Total(required): The previously returned value of the function. 
 * CurrentValue(Required): The value of the current element
 * Index(Optional): The index of the current element. 
 * Arr(Optional): The array reduceRight() was called upon. 
 * InitialValue(Optional): A value to be passed to the function as the initial value.
 * Return: 
 * Return the reduced single value of the array.
 * 
 * 
 * 
 * 
 * 
 */
// example 1
var arrays1 = [
    ['audi', 'bmw'],
    ['lamborghini', 'chevrolet'],
    ['bently', 'ferrari']
]

let result = arrays1.reduceRight(function (previousValue, currentValue) {
    return previousValue.concat(currentValue)
})

console.log(result) // [ 'bently', 'ferrari', 'lamborghini', 'chevrolet', 'audi', 'bmw' ]

// example 2
var arrays2 = [1, 5, 2, 5]
let sum = arrays2.reduceRight(function (value, current) {
    return [value + " " + current]
})
console.log(sum)