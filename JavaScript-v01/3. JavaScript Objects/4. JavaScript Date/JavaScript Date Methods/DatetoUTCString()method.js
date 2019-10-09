/**
 * The JavaScript date toUTCString() method returns the specified date in the form of string using the UTC time zone
 * 
 */

// example 1
var time = new Date()
console.log(time.toUTCString())

// example 2
time = new Date(1997, 7, 15, 15, 15, 14)
console.log(time.toUTCString())