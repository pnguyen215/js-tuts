/**
 * The JavaScript Symbol.isConcatSpreadable it is used to configure if an object should be flattened to its array elements
 * Syntax: Arrayname[symbol.isConcatSpredable] = false
 * Return: Concatenation result
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
var cars = ['audi', 'bmw', 'bently', 'lamborghini']
var cars2 = ['porsche', 'aston martin', 'cadillac', 'chevrolet']

cars2[Symbol.isConcatSpreadable] = true // or false

var result1 = cars.concat(cars2)
console.log(result1)