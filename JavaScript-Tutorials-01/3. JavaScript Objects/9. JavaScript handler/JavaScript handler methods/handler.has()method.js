/**
The handler.has() method used to "hide" any property you want
It 's a trap for an operator
It returns the Boolean value true if you want the property to be accessed, otherwise false If the key is present or not in the original object

Syntax: 'has: function (target, prop)'
Parameters
target: The target object.

prop: The property to check
for existence.

Return value
Return a Boolean value. 


*/

const data = {
    num: 23
}
// example 1
const proxy1 = new Proxy(data, {
    has: function (target, name) {
        console.log('in has')
        return name in target
    }
})
console.log('num' in proxy1) // true

// example 2
var proxy2 = new Proxy(data, {
    has: function (target, name) {
        if (name === 'keyword') {
            return false
        }
        return true
    }
})

var res1 = "keyword" in proxy2
var res2 = "other" in proxy2
console.log(res1)
console.log(res2)


// example 3
var proxy3 = new Proxy(data, {
    has: function (target, name) {
        console.log('call ' + name)
        return false
    }
})

var res3 = 'something' in proxy3
console.log(res3) // false