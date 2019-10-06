/**
 * The JavaScript Set has() method indicates whether the Set object contains the specified value. It returns true if the specified value is present, otherwise false.
 * Syntax: setObj.has(value)
 * Paramters: value - It represents the value to be searched.
 * Return: boolean value
 * 
 * 
 * 
 * 
 * 
 */

var set = new Set()

set.add('audi')
set.add('bmw')
set.add('bently')
set.add('lamborghini')

console.log(set.has('audi')) // true