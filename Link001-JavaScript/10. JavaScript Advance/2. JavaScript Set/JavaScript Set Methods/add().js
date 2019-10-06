/**
 * The JavaScript Set add() method is used to add an element to Set object with a specified value.Each element must have a unique value.
 * Syntax: setObj.add(value)
 * Parameters: value - It represents the value to be added.
 * Return: The Set object.
 * 
 * 
 * 
 * 
 */

// example 
var set = new Set()

set.add('audi')
set.add('bmw')
set.add('bently')
set.add('lamborghini')

for (let i of set) {
    console.log(i)
}

// add the elements to set object in chainable form
set.add('porsche').add('ferrari').add('bugati')

for (let i of set) {
    console.log(i)
}