/**
 * The JavaScript find() method is used to get the value of the first element in the array that satisfies the provided condition.
 * The find() method apply the function once for each element present in the array.
 * The function returns a true value, if it is found in the array and does not check the remaining value. Otherwise,it returns undefined
 * find() does not execute the function for empty arrays
 * find() does not change the original value.
 * Syntax: array.find(function (value, index, arr))
 * Parameters:
 * Value(required): The value of the current element
 * Index(optional): The array index of the current element
 * Arr: The array object the current element belongs to
 * Return
 * It returns the array element value if the elements in the array satisfy the condition, otherwise it returns undefined.
 * 
 * 
 * 
 * 
 */


// example 
function checkPass(num) {
    return num > 10
}

var arrays = [1, 75, 12, 65, 10, 5]

console.log(arrays.find(checkPass)) // 75
console.log(arrays.find(id => checkPass(id))) // 75
console.log(arrays.find(item => item === 5)) // 5