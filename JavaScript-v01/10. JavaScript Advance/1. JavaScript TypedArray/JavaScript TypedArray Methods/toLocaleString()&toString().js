/**
 * The JavaScript toLocaleString() method is used to convert the elements of the given array into a string and these Strings are separated by a comma ",".
 * Syntax: array.toLocalString();
 * Return: It gives a string representing the elements of the array.
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
 * 
 */

// example 1
var above = ['audi', 'bmw']
var below = ['bently', 'porsche']
var combine = [above, below]
var result = combine.toLocaleString()
console.log(result) // audi,bmw,bently,porsche
console.log(combine.toString()) // audi,bmw,bently,porsche