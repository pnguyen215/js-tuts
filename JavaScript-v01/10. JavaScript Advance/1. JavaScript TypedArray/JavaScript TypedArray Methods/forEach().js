/**
 * The JavaScript forEach() method calls the provided function once for each element of the array
 * forEach() method does not execute the function for array elements without values.
 * Syntax: array.forEach(function (value, index, arr), thisvalue)
 * Parameters: 
 * Value: The value of the current element
 * Index: The array index of the current element
 * Arr: This is the array on which the .forEach() function is called
 * Thisvalue: This value is used to tell the function to use this value when executing argument function
 * 
 * Return: The return value of this function is always undefined. 
 * This function may or may not be change the original array provided as it depends upon the functionality of the argument function.
 * 
 * 
 * 
 * 
 */

// example 1
function calculate() {
    var save = []
    var items = [1, 43, 12, 23]
    items.forEach(function (temp) {
        save.push(temp * 2)
    })
    return save
}

var result = calculate()
console.log(result)
console.log(result.includes(2))

// example 1
function print() {
    var items = ['audi', 'bmw', 'bently', 'ferrari', 'porsche']
    items.forEach(ls => console.log(ls))
}

print()