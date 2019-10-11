/**
The handler.getPrototypeOf() method is a trap for the internal method
If target is not extensible, then this method returns the same value as Object.getPrototypeOf(target).
Syntax
getPrototypeOf(target)
Parameters
target: The target object.

Return value
This method returns an object or null
*/

// exmaple 1
const object1 = {}
const property1 = {}
const tag = {
    getPrototypeOf(target) {
        console.log(target === object1)
        console.log(this === tag)
        return property1
    }
}

const result = new Proxy(object1, tag)
console.log(Object.getPrototypeOf(result) === property1)

// example 2
var object2 = {}
var proxy1 = new Proxy(object2, {
    getPrototypeOf(target) {
        return Array.prototype
    }
})

console.log(proxy1 instanceof Array) // true

// example 3
const prototype2 = {
    count: 23
}
const handler = {
    getPrototypeOf(target) {
        return prototype2
    }
}
const result2 = new Proxy(prototype2, handler)
console.log(Object.getPrototypeOf(result2) === prototype2) // true