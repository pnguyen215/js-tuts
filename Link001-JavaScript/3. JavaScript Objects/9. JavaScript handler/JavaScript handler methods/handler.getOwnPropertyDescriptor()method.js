/**
The handler.getOwnPropertyDescriptor() method is a trap for Object.getOwnPropertyDescriptor()
It exists as an own property of the target object and the target object is not extensible.
Syntax: getOwnPropertyDescriptor: function (target, prop)
Parameters: 
Target: The target object.

Prop: The name of the property whose description should be retrieved.
Return value
This method returns an object or undefined

*/


// example 1
const proxy1 = new Proxy({}, {
    getOwnPropertyDescriptor: function (target, name) {
        console.log('in getOwnPropertyDescriptor')
        return Object.getOwnPropertyDescriptor(target, name)
    }
})

console.dir(Object.getOwnPropertyDescriptor(proxy1, "phuocnguyen"))

// example 2
const result = {}
const proxy2 = new Proxy(result, {
    getOwnPropertyDescriptor: function (target, name) {
        console.log('value: ' + name)
        return {
            configurable: true,
            enumerable: true,
            value: 23
        }
    }
})
console.log(Object.getOwnPropertyDescriptor(proxy2, "phuocnguyen"))

// example 3
var count = {
    valueCount: 23
}
var proxy3 = {
    getOwnPropertyDescriptor(target, name) {
        console.log(`${name}`)
        return {
            configurable: true,
            value: 2019
        }
    }
}
const realValue = new Proxy(count, proxy3)
console.log(Object.getOwnPropertyDescriptor(realValue, 'phuocnguyen'))