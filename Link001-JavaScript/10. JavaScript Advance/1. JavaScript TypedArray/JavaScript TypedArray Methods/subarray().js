/**
 * The JavaScript subarray() method gives the selected elements of the array and it does not change the original array.
 * Syntax: Array.subarray(start, end)
 * Parameters: 
 * Start(Optional): Starting position where to start the selection.
 * End(Optional): Ending position where to end the selection.
 * End(Optional): Ending position where to end the selection. 
 * Return value: Returns a new array that contains some part of the array.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

var arrays = new Uint8Array([10, 19, 2, 5, 6, 9]) // limit: 8 bit
var sub = arrays.subarray(2, 6) // index: 2, end: 6
console.log(sub)
console.log(arrays.subarray(1, 6))