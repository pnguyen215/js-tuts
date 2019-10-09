/**
# An iterator is a new concept of ES6.
# An Iterator is an object that let us iterate through an Array, an Object, a String or even custom Objects
# The Iterator allows us to effectively loop over a collection of objects like an array, string, objects or other data structures
# Weird right? However, that is the meaning of iterator. It provides us an interface on which we can call the method like next()
# Further, that also return an object, which we store in a variable and then when we logged it into the browser we can see an object with the two properties
#   1. value: It holds the next value of an iterator object.
#   2. done: It is the flag that indicates that the items in the iterable object are not complete in the iterating process

*/

// example 
let cars = ['audi', 'bmw', 'lamborghini', 'bently']
let iterators = cars[Symbol.iterator]()
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())

// example 2
function itemIterable(item) {
    return typeof item[Symbol.iterator] == "function";
}
let res = itemIterable(iterators)
console.log(res) // true

// # for...of loop
for (let i of cars) {
    console.log(i)
}