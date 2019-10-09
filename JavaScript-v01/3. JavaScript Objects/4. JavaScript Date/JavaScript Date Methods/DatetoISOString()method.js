/**
 * The JavaScript date toISOString() method returns the string representation of the Date object
 * The returned string is in the form of simplified extended ISO format, which is always 24 or 27 characters long.
 * 
 */

// example 1
var date = new Date()
console.log(date.toISOString())

// example 2
date = new Date(1997, 7, 15, 19, 19, 20) // this's form: year, month, day, hour, minute, second
console.log(date.toISOString())