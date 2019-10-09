/**
 * The test() method of JavaScript executes a search for a match between a regular expression and a specified string
 * If the match is found, it will return true.Otherwise, it will return false.
 * Syntax: RegExpObject.test(string)
 * Parameters: string: The string to be searched.
 * Return: It will return true if there is a match between the regular expression and the specified string.Otherwise, it will return false
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
var simple = 'JavaScript is an interesting scripting language'
var matched = new RegExp("script", "g") // g is stand for globle
var result = matched.test(simple)

console.log(result)