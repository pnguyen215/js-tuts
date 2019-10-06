/**
 * The JavaScript map set() method is used to add or updates an element to map object with the particular key - value pair
 * Each value must have a unique key.
 * Syntax: mapObj.set(key, value)
 * Parameters: 
 * key - It represents the key to be added. 
 * value - It represents the value to be added
 * Return: map object
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
var map = new Map()
map.set(1, 'audi')
map.set(2, 'bmw')
map.set(3, 'bently')

// get element from map using manual method
console.log(map.get(1)) // audi
console.log(map.get(2)) // bmw


// travering element into map: using function
function display(key, value) {
    console.log(key + " " + value)
}
map.forEach((key, value) => display(key, value)) // map.forEach(display)
/**
 audi 1
 bmw 2
 bently 3
 * 
 */

// using iterator
var keys = map.entries()
for (let i = 0; i < map.size; i++) {
    console.log(keys.next().value)
}
/**
[1, 'audi']
[2, 'bmw']
[3, 'bently']
 */