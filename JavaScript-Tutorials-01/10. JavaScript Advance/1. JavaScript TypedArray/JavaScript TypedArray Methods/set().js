/**
 * The JavaScript set() method is used to store values into the given array
 * Syntax: array.set(array, Index(Offset))
 * Parameters: 
 * Array: The array from which to copy values. All the values from the source array are copied into the target array. 
 * Index(Offset):At which position to begin writing values from the source array. It is optional and the default value is (0).
 * return: 
 * A new updated array.
 * 
 * 
 * 
 * 
 * 
 */

// example 1
// Creating some buffers with sizes in bytes
var buffer = new ArrayBuffer(8)
// Creating some typedArray
var unit = new Uint8Array(buffer)
// Coping the values into the array 
unit.set([1, 5, 2, 8], 3) // start at index 3
console.log(unit)