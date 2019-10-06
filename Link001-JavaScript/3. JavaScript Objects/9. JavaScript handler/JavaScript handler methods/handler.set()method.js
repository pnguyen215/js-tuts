/**
The handler.set method is an assignment of a value to a property value
The set can be iterator in the insertion order
It is a collection of items which are unique.If an assignment succeeded, then
return true.Otherwise, returns false.
An Iterator is an object which defines a sequence and potentially a
return value upon its termination

Syntax
set: function (target, property, value, receiver)
Parameters
target: The target object.

property: Name or Symbol of the property.

value: New value of the property.

receiver: This is usually the proxy itself.A set handler assignment indirectly, via the prototype chain or various other ways.

Return value
Return a Boolean value.

*/

var data = {
    num1: 23,
    num2: 2019
}

var data2 = {
    name: 'phuocnguyen'
}

const data3 = {
    num1: 124
}
// example 1
var proxy1 = new Proxy(data, {
    set: function (y, index, value) {
        y[index] = value * 2
    }
})
proxy1.num3 = 24
// traversing 
for (let i in proxy1) {
    console.log(i + "=" + proxy1[i])
}

// example 2
var proxy2 = new Proxy(data2, {
    set: function (target, name, value, proxy2) {
        console.log('in set') // to detect 
        target[name] = value.toUpperCase()
    }
})
proxy2.name = 'phuocnguyen'
console.log(data2.name)

// exmaple 3
const proxy3 = new Proxy(data3, {
    set: function (target, name, value, receiver) {
        target[name] = value
        console.log('property set: ' + name + " = " + value)
    }
})

console.log('a' in proxy3) // false
proxy3.num1 = 23