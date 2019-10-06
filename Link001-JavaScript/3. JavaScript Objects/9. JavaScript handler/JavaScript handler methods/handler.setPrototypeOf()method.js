/**
The handler.setPrototypeOf method returns a Boolean value true if [[Prototype]] was successfully changed  
Otherwise, it will return false.It is a trap for Object.setPrototypeOf().


Syntax
setPrototypeOf: function (target, prototype)
Parameters
target: The target object.

prototype: The object 's new prototype or null.

Return value
Return a Boolean type value.
*/


var data = {
    age: 23
}
// example 1
var proxy1 = new Proxy(data, {
    setPrototypeOf: function (target, prototype) {
        return prototype in target
    }
})

console.log('age' in proxy1)


// example 2
var proxy2 = new Proxy(data, {
    setPrototypeOf(target, prototype) {

    }
})
// test
console.log('age' in proxy2) // true
console.log('huge' in proxy2) // false


// example 3
var proxy3 = new Proxy({}, {
    setPrototypeOf(target, prototype) {
        if (key === "jerry") {
            return true
        }
        return false
    }
})
// test
var test1 = 'mango' in proxy3
var test2 = 'jerry' in proxy3

console.log(test1) // false
console.log(test2) // false