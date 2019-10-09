/**
 * The JavaScript sort() method is used to sort the array and returns the updated array.The array can be any type like - string, numbers, and character.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 
var arrays = [29, 20, 14, 9, 10]

console.log(arrays.sort()) // [ 10, 14, 20, 29, 9 ]

console.log(arrays.sort(function (a, b) { // [ 10, 14, 20, 29, 9 ]
    return a === b
}))
console.log(arrays.sort(function (a, b) { // [ 9, 10, 14, 20, 29 ]
    return a > b
}))

console.log(arrays.sort(function (a, b) { // [ 29, 20, 14, 10, 9 ]
    return a < b
}))

console.log(arrays.sort(function (a, b) { // [ 9, 10, 14, 20, 29 ]
    return a - b
}))

console.log(arrays.sort(function (a, b) { // [ 29, 20, 14, 10, 9 ]
    return b - a
}))