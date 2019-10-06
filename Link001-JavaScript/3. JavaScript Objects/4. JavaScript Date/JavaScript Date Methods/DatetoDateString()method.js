/**
 * The JavaScript date toDateString() method returns the date portion of a Date object in the form of string.
 * 
 */

// example 1
var date = new Date()
console.log(date.toDateString())

// example 2
date = new Date(1988, 7, 15, 20, 22, 10) // this form: year: 1988, month: 7, day: 15, hour: 20, minute: 22, second: 10
console.log(date.toDateString())