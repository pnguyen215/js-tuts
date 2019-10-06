/**
 * This method returns a new Array Iterator object that contains key / value pairs for each index in the array
 * For all item in the original array, the new iteration object will have an array with the index as the key and the item as the value.
 * Syntax: 
 * array.entries()
 * What is Iterator ? An iterator is an object that have track of its current position, while accessing items in a collection one at a time
 * An iterator returns an object with two properties: key and value.
 * 
 * 
 * Return: A new Array Iterator object.
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 */

var cars = ['audi', 'bmw', 'bently', 'porsche', 'lamborghini', 'ferarri', 'GTR']
var iterator = cars.entries()
console.log(iterator.next().value)

for (let i of iterator) {
    console.log(i)
}