/**
 * The JavaScript Set clear() method is used to remove all the elements from Set object.
 * Syntax: setObj.clear()
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var set = new Set()

set.add('audi')
set.add('bmw')
set.add('bently')
set.add('lamborghini')

console.log('before clear, length: ' + set.size)

set.clear()
console.log('after clear, length: ' + set.size)