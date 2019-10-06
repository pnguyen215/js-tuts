/**
 * The JavaScript Set forEach() method executes the specified function once for each value in the Set object. It maintains an insertion order.
 * Unlike Map, the Set object doesn 't use key externally
 * To keep the values unique it uses the key internally
 * Thus, Set considers the value of element as a key.
 * Syntax: setObj.forEach(function callback(value1, value2, Set) {   
 *   //your iterator  
 * }[, thisArg])  
 * Parameters: 
 * callback - It represents the function to execute. 
 * value1, value2 - The value1 represents the key of the element whereas value2 represents the value. Both arguments contains the same value. 
 * set - It represents the current Set object. 
 * thisArg - It represents the value that treats as this when executing callback.
 * 
 * 
 */

var set = new Set()

set.add('audi')
set.add('bmw')
set.add('bently')
set.add('lamborghini')

function display(key, value) {
    console.log([key + " - " + value])
}
set.forEach((key, value) => display(key, value))

// the second way 
set.forEach(function show(value1, value2, set) {
    console.log('key[' + value1 + ']' + ":" + value2)
})