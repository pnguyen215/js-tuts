/**
 * The static Reflect.apply() method of JavaScript is used to call a function using the specified argument
 * Syntax: Reflect.apply(target, thisArgument, argumentsList)
 * parameters: 
 * target: It is the target function to call.
 * thisArgument: It is the value of this provided for the call to target
 * ArgumentsList: It is an array - like object specifying the argument with which target should be called.
 * Return: The result of calling the given target function with the specified this value and arguments.
 * Exceptions: This method will throw a TypeError if the target is not callable
 * 
 * 
 * 
 * 
 * 
 */

// example 1
function assign(num1, num2) {
    this.a = num1
    this.b = num2
}
const object = {} // thisArgument
Reflect.apply(assign, object, [23, 2019])
console.log(object)

// example 2
var message = function () {
    console.log(this)
}
Reflect.apply(message, "say something", [])

var numbers = [23, 1209, 2019, 11] // array arguments
console.log(Reflect.apply(Math.max, undefined, numbers))


// example 3
console.log(Reflect.apply(Math.floor, undefined, [23.44]))
console.log(Reflect.apply(Math.ceil, undefined, [13.75]))
console.log(Reflect.apply(String.fromCharCode, undefined, [65, 66, 67, 68]))