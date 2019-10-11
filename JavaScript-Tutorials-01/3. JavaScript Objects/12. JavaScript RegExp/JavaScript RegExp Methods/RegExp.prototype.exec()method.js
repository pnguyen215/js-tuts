/**
 * The exec() method returns an array containing all the matched groups
 * It executes a search for a match in a specified string.
 * If it finds a match, it returns an array.Otherwise, it returns null.
 * Syntax: RegExpObject.exec(string)
 * Parameters: string: The string to be searched
 * Return: It will return the array if a match is found.Otherwise, it will return null
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
var simple = 'JavaScript is an interesting scripting language'
var matched = new RegExp("script", "g") // g is stand for globle
var result = matched.exec(simple)
console.log(result)