/**
The handler.preventExtensions() method is used to trap the Object.preventExtensions method
When extensions are prevented on an object, new properties can 't be added.
Syntax
preventExtensions: function (target)
Parameters
target: The target object.

Return value
Return a Boolean value.


*/

var data = {
    isStudent: true,
}

// example 1
const proxy1 = new Proxy({}, {
    preventExtensions: function (target) {
        Object.preventExtensions(target)

        return !Object.isExtensible(target)
    }
})
console.log(Object.isExtensible(proxy1)) // true


// example 2
const proxy2 = new Proxy({}, {
    preventExtensions: function (target) {
        Object.preventExtensions(target)
        return !Object.isExtensible(target)
    }
})
console.log(Object.isExtensible(proxy2)) // true
console.log(Object.preventExtensions(proxy2)) // {}
console.log(Object.isExtensible(proxy2)) // false

// example 3
var value = {
    preventExtensions(target) {
        target.canEvole = false
        Object.preventExtensions(target)
        return true
    }
}

var proxy3 = new Proxy(data, value)
// test
console.log(data.isStudent) // true
Object.preventExtensions(proxy3)
console.log(data.isStudent) // true