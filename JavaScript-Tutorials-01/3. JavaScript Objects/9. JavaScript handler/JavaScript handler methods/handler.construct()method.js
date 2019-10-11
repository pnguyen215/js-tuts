/**
The handler.construct() method is used to intercept the new operation
This method returns an object.
Syntax: construct: function (target, argumentsList, newTarget)
Parameters: 
Target: The target object.

argumentsList: List of the constructor.

newTarget: The constructor that was originally called, p above.

Return value
This method returns an object.

*/

// example 1
var custom = new Proxy(function () {}, {
    construct: function (objTarget, args, oldConstructor) {
        return {
            value: args[0] + ' say how are ya? to someone'
        }
    }
})

console.log(JSON.stringify(new custom("phuocnguyen"), null, ''))



// example 2
function book(name) {
    this.name = name

}
const bookcase = {
    construct(target, args) {
        console.log('this is new book is called')
        return new target(...args)
    }
}

const proxy1 = new Proxy(book, bookcase)
console.log(new proxy1('clean code').name)


// example 3
var handle = function (text) {
    this.text = text
}
var button = new Proxy(handle, {
    construct: function (target, parameters) {
        console.log('cick this button')

        var button2 = Object.create(target.prototype)
        target.apply(button2, parameters)
        return button2
    }
})

var button3 = new button('proxy constructor')

console.log(button3.text)