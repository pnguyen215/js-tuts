/**
 * The JavaScript some() method examines the elements of the array if they are satisfied on the given condition or not.
 * The condition is checked by the argument function.
 * Syntax:
 * array.some(function(value, index, arr), thisValue) 
 * Parameters: 
 * Array: Thet array where the some() method is called. 
 * Index: index of the current value being processed by the method. 
 * Value: The value of the current element. 
 * ThisValue: The value to be given to the method used as this value
 * Return: It returns true value if the elements of the array pass the condition. If the elements not satisfy the condition then it return false.
 * 
 * 
 * 
 */

// example 
function check(num) {
    return num > 5
}

var arrays = [10, 12, 9, 7, 8]

console.log(arrays.some(id => check(id)))