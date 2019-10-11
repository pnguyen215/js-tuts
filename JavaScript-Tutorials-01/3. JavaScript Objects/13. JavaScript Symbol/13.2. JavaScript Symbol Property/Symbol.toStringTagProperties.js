/**
 * The JavaScript Symbol.toStringTag symbol is accessed internally by the Object.prototype.toString() method
 * It is used for the creation of the default string description of an object.
 * Return: string object
 * 
 * 
 * 
 * 
 * 
 */

// example 1
class Method {
    get[Symbol.toStringTag]() {
        return 'phuocnguyen'
    }
}

console.log(Object.prototype.toString.call(new Method)) // for object
console.log(Object.prototype.toString.call([23, 9, 2019])) // for array