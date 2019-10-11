/**
 * The static Reflect.construct() method allows to invoke a constructor with a variable number of arguments
 * It gives also the added option to specify a different prototype.
 * Syntax: Reflect.construct(target, argumentsList[, newTarget])
 * Parameters: 
 * target: It is the target function to call.
 * argumentsList: It is an array - like object specifying the arguments with which target should be called
 * newTarget: It is a constructor whose prototype should be used.See also the new.target operator
 * If newTarget is not present, it will treat as a target.
 * Return: This method returns a new instance of the target(or newTarget if present), initialized by the target as a constructor with the given arguments.
 * Exceptions: This exception will throw a TypeError if target or newTarget are not constructors.
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
const array = new Array(1, 13, 23, 63)
const array2 = Reflect.construct(Array, [1, 13, 23, 63])
console.log(array)
console.log(array2)


// example 2
function calculate(num1, num2, num3) {
    this.sum = num1 + num2 + num3
}

const argument1 = [23, 13, 1] // 23 + 13 = 36 + 1 = 37
const argument2 = [1, 4, 5] // 10
const object1 = new calculate(...argument1)
const object2 = Reflect.construct(calculate, argument2)

console.log(object2.sum)
console.log(object1.sum)