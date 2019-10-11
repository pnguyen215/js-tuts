/**
 * The JavaScript WeakSet delete() method is used to remove the specified object from WeakSet object.
 * Syntax: WeakSetObj.delete()
 * 
 * 
 * 
 * 
 * 
 */

var weakMap = new WeakSet()
var object1 = {}
var object2 = {}
var object3 = {}

weakMap.add(object1, 'audi')
weakMap.add(object2, 'bmw')
weakMap.add(object3, 'bently')

weakMap.delete(object1)

console.log(weakMap.has(object1))