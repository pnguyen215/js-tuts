/**
The handler.ownKeys() method of JavaScript is used to return an enumerable object.
This method is a trap for Reflect.ownKeys().

Syntax: 
ownKeys: function (target)
Parameters
target: The target object.

Return value
Return an enumerable object.
*/

var data = {
    name: 'phuocnguyen',
    age: 23
}

// example 1
var proxy1 = new Proxy({}, {
    ownKeys: function (target) {
        console.log('use handler.ownKeys() is')
        return ['23', '2019', 'phuocnguyen']
    }
})

console.log(Object.getOwnPropertyNames(proxy1).toString()) // 23, 2019, phuocnguyen
console.log(Object.getOwnPropertyNames(proxy1))

// example 2
var value = {
    ownKeys(target) {
        return Reflect.ownKeys(target)
    }
}

var proxy2 = new Proxy(data, value)
// traversing 
for (let keys of Object.keys(proxy2)) {
    console.log(keys) // name age
}

// example 3
Object.defineProperty(data, 'property1', {
    value: 23,
    writable: true,
    enumerable: true,
    configurable: true
})

var proxy3 = new Proxy(data, {
    ownKeys: function (target, num1, num2) {
        console.log('in ownKeys method')
        var otherName = Object.getOwnPropertyNames(target)
        var symbols = Object.getOwnPropertySymbols(target)
        return otherName.concat(symbols)
    }
})
console.log(Object.keys(proxy3))
console.log(Object.getOwnPropertyNames(proxy3))