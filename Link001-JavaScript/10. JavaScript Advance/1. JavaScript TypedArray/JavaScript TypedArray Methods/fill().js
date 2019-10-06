/***
 * The JavaScript fill() method is used to fill all the elements of array from a start index to an end index with a static value
 * Syntax: 
 * array.fill(value) 
 * array.fill(value, start) 
 * array.fill(value start, end)
 * Parameters:
 * Value(Required): The value to fill the array.
 * Start(Optional): The index to start filling the array default is 0).
 * End(Optional): The index to stop filling the array(default is array.length).
 * Return: This function does not return a new array.Instead of , it transform the array on which this function is applied.
 * 
 * 
 */

// example 1
var array1 = [1, 3, 6, 4, 8, 4, 1, 308, 2019]

array1.fill(1109)

console.log(array1) // [ 1109, 1109, 1109, 1109, 1109, 1109, 1109, 1109, 1109 ]


// example 2
var array2 = [1, 3, 6, 4, 8, 4, 1, 308, 2019]
array2.fill(1997, 1) // value: 1997, index: 1
console.log(array2) // [ 1, 1997, 1997, 1997, 1997, 1997, 1997, 1997, 1997 ]

// example 3
var array3 = [1, 3, 6, 4, 8, 4, 1, 308, 2019]
array3.fill(1997, 3, 5) // value: 1997, index start: 3, end: 5
console.log(array3) // [ 1, 3, 6, 1997, 1997, 4, 1, 308, 2019 ]