/**
 * The JavaScript Set entries() method returns an object of new set iterator.
 * This object contains an array of [value, value] for each element. It maintains an insertion order.
 * It maintains an insertion order
 * Unlike Map, the Set object doesn 't use key externally.
 * To keep the values unique it uses the key internally
 * Thus, Set considers the value of element as a key.
 * In array[value, value], the first value represents the key whereas the second value represents the value of element.
 * Syntax: setObj.entries()
 * Return: A new object of set iterator that contains an array of [value, value] for each element.
 * 
 * 
 */

var set = new Set()

set.add('audi')
set.add('bmw')
set.add('bently')
set.add('lamborghini')

var iterator = set.entries()
// using for loop normal
for (let i = 0; i < set.size; i++) {
    console.log(iterator.next().value)
}

// using for-each loop
for (let items of iterator) {
    console.log(items)
}