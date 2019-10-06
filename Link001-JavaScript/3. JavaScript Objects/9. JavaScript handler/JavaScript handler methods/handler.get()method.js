/**
The handler.get method is a trap for getting a property value.This method takes 3 arguments


Syntax
get: function (target, property, receiver)
Parameters
Target: The target object.

Property: Name of the property to get.

Receiver: The proxy or an object that inherits from the proxy.

Return value
This method can return any value.
*/

// example 1
var data = {
    a: 'phuocnguyen',
    b: 23
}
var proxy = new Proxy(
    data, {
        get: function (target, name, proxy) {
            console.log('in get ')
            var value = target[name]
            if (typeof value === 'string') {
                value = value.toLocaleUpperCase()
            }
            return value
        }
    }
)

console.log(proxy.a) // access to data.a
console.log(data.b)

// example 2
const expect = {}
const proxy2 = new Proxy(expect, {
    get: function (target, property, receiver) {
        console.log('called: ' + property)
        return 23
    }
})
console.log(proxy2.numberAge)

// example 3
var data2 = {
    a: 23,
    b: 2019
}

var getData = new Proxy(data2, {
    get: function (y, index) {
        return y[index] * 2
    }
})

console.log(getData.a) // 23 * 2 = 46
console.log(getData.b) // 2019 * 2  = 4038