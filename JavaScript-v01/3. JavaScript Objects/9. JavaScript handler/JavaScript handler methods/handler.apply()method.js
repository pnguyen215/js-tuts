/**
The handler.apply() method is used to trap for a function call
The value returned by the apply trap is also going to be used as the result of a function call through a proxy.

Syntax: apply: function (target, thisArg, argumentsList)
Parameters
target: The target object.

thisArg: thisArg use for the call.

argumentsList: The list of arguments used for the call.

Return value
This method can return any value.

*/

// example 1
var custom = function (arg1, arg2) {
    console.log('proxy value (' + arg1 + ', ' + arg2 + ')')
}

var proxy = new Proxy(custom, {
    apply: function (target, thisArgument, parameters) {
        console.log('get value')
        return target.apply(thisArgument, parameters)
    }
})

proxy(23, 57)
proxy(342, 9899)

// example 2
var mark = function (arg1, arg2) {
    console.log('in pair(' + arg1 + ', ' + arg2 + ')')
}

var proxy2 = new Proxy(mark, {
    apply: function (target, thisArgument, parameters) {
        console.log('in used')
        return target.apply(thisArgument, parameters)
    }
})

proxy2('direct1', 'direct2')
proxy2.apply(null, ['num1', 'num2'])
proxy2.call(null, 'string1', 'string2')


// example 3
function product(name) {
    return name
}
var query = {
    apply: function (target, thisArgument, argumentsList) {
        return target(argumentsList[0], argumentsList[1]) * 3
    }
}

var proxy3 = new Proxy(product, query)

console.log(product(24))
console.log(proxy3(25))