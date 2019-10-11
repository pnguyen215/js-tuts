/**
 * The JavaScript Symbol.match is used to identify the matching of a regular expression against a string.
 * Return: Return true if a string matches otherwise false
 * 
 * 
 * 
 * 
 * 
 * 
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

// example 1
var regex = /phuocnguyen/
regex[Symbol.match] = false
console.log('/phuocnguyen/'.startsWith(regex)) // true
console.log('/uyen/'.endsWith(regex)) // false

// example 2
var regex2 = /phuocnguyen1109/
regex2[Symbol.match] = false
console.log('/phuoc/'.startsWith(regex2)) // false
console.log('/1109/'.endsWith(regex2)) // false