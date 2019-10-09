/**
 * The JavaScript WeakMap has() method indicates whether the ?WeakMap object contains the specified key. It returns true if the specified key is present, otherwise false
 * Syntax: WeakMapObj.has(key)
 * Parameters: key - It represents the key to be searched
 * Return: A Boolean value.
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

console.log(weakMap.has(object1))