/**
 * The JavaScript WeakMap delete() method is used to remove the specified element from a WeakMap object.
 * Syntax: WeakMapObj.delete()
 * Parameters: 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 
var weakMap = new WeakMap()
var object1 = {}
var object2 = {}
var object3 = {}

weakMap.set(object1, 'audi')
weakMap.set(object2, 'bmw')
weakMap.set(object3, 'bently')
console.log('before delete: ' + weakMap.has(object1))
weakMap.delete(object1)
console.log('before delete: ' + weakMap.has(object1))