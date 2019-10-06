/**
 * The JavaScript map() method form a new array creates a new typed array with the results of calling a provided function on every element in this typed array.
 * Note: map() method does not change the actual array
 * Syntax: array.map(function (value, index, arr), thisValue)
 * Parameters: 
 * Value(Required): The value of the current element. 
 * Index(Optional): The array index of the current element. 
 * arr(Optional): The array map() was called upon. 
 * ThisValue(Optional): A value to be passed to the function to be used as its "this" value.
 * return: A new array.
 * 
 * 
 */

// example 1
var items = [23, 12, 9]

var result = items.map(function (agrs) {
    return agrs * 2
})

console.log(result)

var cars = ['audi', 'bmw', 'bently', 'ferrari']
var result2 = cars.map(function (value, index, arr) {
    var len = value.length
    return len
})
console.log(result2)
console.log(cars)