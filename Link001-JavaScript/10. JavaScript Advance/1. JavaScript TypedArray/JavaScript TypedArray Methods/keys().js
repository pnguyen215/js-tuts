/****
 * The JavaScript keys() method is an inbuilt function in JavaScript
 * This method returns an Array Iterator object with the keys of an array.
 * Synatax: array.keys()
 * Parameters: 
 * Return: It returns a new array iterator object containing the keys for each index of the elements of the given array.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

var items = [1, 53, 18, 4, 28, 3, 2, 9, 4]

var iKeys = items.keys()
console.log('Length:' + items.length)
for (let i = 0; i < items.length; i++) {
    console.log(iKeys.next().value + ' ' + items[i])
}