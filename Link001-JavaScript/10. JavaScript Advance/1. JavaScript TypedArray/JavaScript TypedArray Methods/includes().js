/**
 * The JavaScript Array includes() method is inbuilt function in JavaScript which is used to determine whether a particular element is present in the array or not
 * This method returns true if the element is present in the array otherwise false
 * The includes() method is case sensitive.
 * Syntax: array.includes(searchElement, start)
 * Parameters: 
 * Search: The element to search for
 * Start: Default 0. At which position start to search.
 * Return: It returns a Boolean value, either True or False.
 * 
 * 
 * 
 */

// example 1
var items = [1, 5, 12, 9, 2091]
var res = items.includes(2091)
console.log(res)