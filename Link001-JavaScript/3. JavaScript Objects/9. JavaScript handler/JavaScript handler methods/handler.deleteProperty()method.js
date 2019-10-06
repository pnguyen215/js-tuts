/**
The handler.deleteProperty() method used to remove the property entirely using the delete operator
This method returns true if the delete was successful.


Syntax: deleteProperty: function (target, property)
Parameters: 
Target: The target object.

Property: The name of the property to delete.

Return value
This method returns a Boolean value.It indicates that property successfully deletes or not

*/

// example 1
var proxy1 = new Proxy({}, {
    deleteProperty: function (target, property) {
        console.log("called: " + property)
        return true
    }
})
delete proxy1.foo


// example 2

var proxy2 = new Proxy({}, {
    deleteProperty: function (target, property) {
        console.log('in delete property')
        return delete target[property]
    }
})

delete proxy2.name
console.log(proxy2.property)


// example 3
var tree = {
    name: 'mango'
}
tree.name = 'lemon'

console.log(tree)
console.log('name' in tree) // get attribute to compare and check

delete tree.name
console.log('name' in tree)