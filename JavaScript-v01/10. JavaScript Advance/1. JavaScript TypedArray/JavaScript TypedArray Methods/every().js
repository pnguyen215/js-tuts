/**
 * JavaScript Array.every() method test whether all the elements of the array in the given condition satisfy or not that is provided by the function passed to it as the argument
 * The every() method apply the function once for each element present in the array.
 * Syntax: array.every(function (Value, Index, arr), thisValue)
 * Parameters: 
 * Value(Required): The value of current element
 * Index(Optional): The array index of the current elements.
 * Index(Optional): The array index of the current elements.
 * this value(optional): A value to be passed to the function
 * 
 * Return: 
 * This function returns Boolean value true if all the elements of the array follow the condition implemented by the argument function
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var array = [100, 102, 103, 107, 109]

function compare(num) {
    return num > 99
}

function compare2(num) {
    return num > 1000
}

console.log(array.every(compare))
console.log(array.every(compare2))