/**
 * The JavaScript Set delete() method is used to remove all the elements from Set object.
 * Syntax: setObj.delete()
 * 
 * 
 * 
 * 
 */

// example 
var set = new Set()

set.add('audi')
set.add('bmw')
set.add('bently')
set.add('lamborghini')

console.log('before clear, length: ' + set.size) // 4

set.delete('audi')
console.log('after clear, length: ' + set.size) // 3