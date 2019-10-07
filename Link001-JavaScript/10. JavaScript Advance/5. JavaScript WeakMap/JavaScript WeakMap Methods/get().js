/**
 * The JavaScript WeakMap get() method returns the value of specified key of an element from a WeakMap object.
 * Syntax: WeakMapObj.get(key)
 * Return: The value of the specified key
 * 
 * 
 * 
 * 
 * 
 */

var weakMap = new WeakMap()
var object1 = {}
var object2 = {}
var object3 = {}

weakMap.set(object1, 'audi')
weakMap.set(object2, 'bmw')
weakMap.set(object3, 'bently')

console.log(weakMap.get(object1))