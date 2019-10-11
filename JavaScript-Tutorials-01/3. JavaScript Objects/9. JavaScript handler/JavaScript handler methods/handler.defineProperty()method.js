/**
The handler.defineProperty() method can define the new properties
It can also modify the existing properties directly on an object.It is trap for Object.defineProper().
This method can be used in two situations
1. When we wanted to ensure cross - browser support of getters and setters
2. Whenever we want to define a custom property accessor

Syntax: defineProperty: function (target, property, descriptor)
Parameters
Target: The target object.

Property: Retrieved property description.

Descriptor: The property being defined or modified.

Return value
This method returns a Boolean

*/

// example 1
var target = {}
target.name = 'phuocnguyen'

console.log(Object.getOwnPropertyDescriptor(target, 'name'))


// example 2
var custom = {}

var proxy1 = new Proxy(custom, {
    defineProperty: function (target, name, property) {
        console.log('in definedProperty')
        return Object.defineProperty(target, name, property)
    }
})

Object.defineProperty(proxy1, 'glasses', {})

// example 3
var book = {}
var bookcase = {}

var proxy2 = new Proxy(book, {
    defineProperty: function (target, name, property) {
        console.log('in definedProperty using book ')
        return Object.defineProperty(target, name, property)
    }
})

var proxy3 = new Proxy(bookcase, {
    defineProperty: function (target, name, property) {
        console.log('in defindedProperty using bookcase')
        return Object.defineProperty(target, name, property)
    }
})

Object.defineProperty(proxy2, "phuocnguyen", {})
Object.defineProperty(proxy3, "nguyenphuocnguyen", {})