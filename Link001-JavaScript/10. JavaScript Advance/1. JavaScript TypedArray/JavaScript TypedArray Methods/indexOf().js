/**
 * The JavaScript indexof() Method is used to find the index of the element provided as the argument to the function
 * The indexof() method is case sensitive.
 * Synatax: Array.indexof(value, start)
 * Parameters: 
 * Value: Value to be search in the index.
 * Start: Default 0. At which position to start the search.
 * Return: 
 * It returns the index of the search element.If the element cannot to be found in the array, this method returns - 1
 * 
 * 
 * 
 * 
 */

// example
var items = [2, 3, 5, 4, 6, 7, 8, 9, 12];
console.log(items.indexOf(5, 2)) // 2
console.log(items.indexOf(4, 12)) // - 1