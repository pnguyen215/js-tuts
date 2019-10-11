/**
 * The JavaScript WeakSet has() method indicates whether the WeakSet object contains the specified object. It returns true if the specified object is present, otherwise false
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
console.log(weakMap.has(object2))
console.log(weakMap.has(object3))