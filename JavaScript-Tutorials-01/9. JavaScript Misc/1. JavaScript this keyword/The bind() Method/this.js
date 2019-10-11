/**
 * The bind() method was introduced in ECMAScript 5
 * It creates a new function whose this keyword refers to the provided value, with a given sequence of arguments.
 * 
 * 
 * 
 */

var name = 'phuocnguyen'

function method(call) {
    call()
}
var object = {
    attribute: true,
    location: 'vn',
    arguments: function () {
        console.log(this.attribute + " is that your answer?")
    }
}

method(object.arguments) // undefined is that your answer?

method(object.arguments.bind(object)) // true is that your answer?