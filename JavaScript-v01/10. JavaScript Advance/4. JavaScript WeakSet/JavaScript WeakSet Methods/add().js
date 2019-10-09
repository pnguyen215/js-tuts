/**
 * The JavaScript Set add() method is used to add a new object to the end of a WeakSet object.
 * Syntax: weakSetObj.add(value)
 * Parameter: value - It represents the object to be added.
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

console.log(weakMap.has(object1))