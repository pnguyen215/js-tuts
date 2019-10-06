/**
 * The copyWithin() method copies the sequence of array within the array and set a new starting point at target.
 * The copyWithin() method is a mutable method and update the array directly.
 * t does not alter the length of array, but will change its content and create new properties if necessary.
 * This method have three parameters, two mandatory and one optional.
 * Syntax: 
 * arr.copyWithin(target)
 * arr.copyWithin(target, start)
 * arr.copyWithin(target,start,end)
 * 
 * Parameters:
 * Target: The index position to copy the elements to. (Required).
 * Start: The index position elements are started copying from. (Optional)
 * End: It is optional. Source end index position where to end copying elements from.
 * Return: The modified array.
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var array1 = [1, 4, 2, 7, 41, 97, 13] // The element from index 0  
array1.copyWithin(2) // Placing from index position 2
console.log(array1)

/**
 * Explain:
 *                  [1, 4, 2, 7, 41, 97, 13]
 * index:            0  1  2  3  4   5   6
 * index position:   1  2  3  4  5   6   7 
 * 
 * 
 */

// JavaScript TypedArray copyWithin(target,start) Method
var array2 = [1, 2, 3, 5, 6, 8, 9]
array2.copyWithin(2, 5) // index position: 2, index: 5
console.log(array2)

// JavaScript TypedArray copyWithin(target,start,end ) Method
var array3 = [1, 2, 4, 3, 7, 8, 12, 10]
array3.copyWithin(2, 4, 6) // index position: 2, index: 4, end: 6
console.log(array3)