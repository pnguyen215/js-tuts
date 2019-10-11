/**
 * The static Reflect.ownKeys() method returns an array whose values represents the keys of the properties of a provided object
 * It ignores the inherited properties
 * Syntax: Reflect.ownKeys(obj)
 * Parameters: Obj: It is the target object from which to get the own keys.
 * Return: It returns an Array of the target object 's own property keys
 * Exceptions: A TypeError, if the target is not an Object
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// example 1
const object1 = {
    name: "phuocnguyen",
    age: 23
}
console.log(Reflect.ownKeys(object1)) // [ 'name', 'age' ]
console.log(Object.keys(object1)) // [ 'name', 'age' ]

// example 2
var object2 = Object.create({}, {
    animal: {
        obj: function () {
            return this.animal
        }
    }
})
console.log(Reflect.ownKeys(object2)) // [ 'animal' ]
console.log(Object.keys(object2)) // []