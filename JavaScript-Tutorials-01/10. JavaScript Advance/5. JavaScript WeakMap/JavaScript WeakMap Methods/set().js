/***
 * It adds or updates the key - value pairs to WeakMap object.
 * The JavaScript WeakMap set() method is used to add or update an element to WeakMap object with the particular key - value pair.Each value must have a unique key(i.e.object).
 * Syntax: weakMapObj.set(key, value)
 * Parameter
 * key - It represents the key to be added. 
 * value - It represents the value to be added.
 * Return: The WeakMap object.
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

// we will determine the result when different values are added to the same object
weakMap.set(object3, 'porsche')
// to add elements to WeakMap object in chainable form
weakMap.set(object1, 'bmw').set(object2, 'lamborghini').set(object3, 'honda')

console.log(weakMap.get(object1))