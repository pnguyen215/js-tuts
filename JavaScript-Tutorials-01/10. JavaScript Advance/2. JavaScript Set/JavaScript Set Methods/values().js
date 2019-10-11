/**
 * The JavaScript Set values() method returns an object of new Set iterator. This object contains the value for each element. It maintains an insertion order.
 * Syntax: setObj.values()
 * Return: A new object of set iterator.
 * 
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

var iterator = set.entries()
for (let i = 0; i < set.size; i++) {
    console.log(iterator.next().value)
}

for (let items of iterator) {
    console.log(items)
}