/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function
 * This method fills all the elements of an array from a start index to an end index with a static value
 * The filter() method does not apply the function for array elements without values.
 * Syntax: array.filter(function (currentValue, index, arr), this_arg)
 * Parameters: 
 * CurrentValue(required): The value of the current element.
 * index: The array index of the current element
 * arr: The array you called filter() on
 * this_arg argument is used to tell the function to use this value when executing argument function
 * Return: An array containing all the elements that pass the test.If no elements pass the test it returns an empty array
 * 
 * 
 * 
 */

// example 1
function checkPass(num) {
    return num > 10
}

var arrays = [20, 30, 40, 50, 5]
console.log(arrays.filter(checkPass)) // [ 20, 30, 40, 50 ]