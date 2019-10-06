/**
 * The toString() method returns a string which represents the regular expression
 * Syntax: RegExpObj.toString();
 * Return: This method returns the string representing the given object
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
 * 
 * 
 */

// example 1
var blankString = ""
var matched = new RegExp("", "g")
var result1 = matched.toString(blankString)
console.log('value: ' + result1)

// example 2
console.log(new RegExp("a+b+c", "g").toString())
console.log(new RegExp("gt+yu").toString())
console.log(new RegExp("abcd").toString())
console.log(new RegExp('<br\>\\n', 'g').toString())