/**
 * The static method Reflect.defineProperty() allows the precise addition to or modification of a property on an object
 * The Reflect.defineProperty() method returns a Boolean value which indicates that whether or not the property was successfully defined.
 * syntax: Reflect.defineProperty(target, propertyKey, attributes)
 * parameters: 
 * target: It is the target object which defines the property
 * propertyKey: It is the name of the property to be defined or modified
 * Attributes: It is the attributes for the property being defined or modified
 * Return: This method returns a Boolean value which indicates that whether or not the property was successfully defined
 * Exceptions: This exception will throw a TypeError if the target is not an Object
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
 * 
 * 
 * 
 */

// example 1
const data = {}
const result = Reflect.defineProperty(data, "property", {
    name: "phuocnguyen",
    value: 23,
    writable: true,
    configurable: true,
    enumerable: true
})

console.log(data) // { property: 23 }
console.log(result) // true

// example 2
const object1 = {}
const object2 = {}
const result2 = (Reflect.defineProperty(object2, 'property2', {
    value: 25
}))
if ((Reflect.defineProperty(object1, 'property1', {
        value: 24
    }))) {
    console.log('property1 was created!')
} else {
    console.log('problem creating property1')
}

console.log(object1.property1) // property1 was created!, 24
console.log(result2) // true
console.log(object2.property2) // 25