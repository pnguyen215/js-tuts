/**
 * The JavaScript date toJSON() method returns the specified date in the form of string
 * It is used to serialize Date objects during JSON serialization.
 * 
 */

// example 1
var date = new Date()
console.log(date.toJSON())
var json = date.toJSON()
console.log(new Date(json).toUTCString())

// example 2
date = new Date(1997, 8, 15, 15, 15, 15)
console.log(date.toJSON())