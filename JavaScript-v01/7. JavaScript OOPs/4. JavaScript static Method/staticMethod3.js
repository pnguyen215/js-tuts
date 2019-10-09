/**
 * 
 * 
 * to invoke more than one static method with similar names
 */

// example 
class Method {
    static display() {
        return 'static method is invoked'
    }
    static display() {
        return 'static method is invoked again'
    }
}

console.log(Method.display()) // static method is invoked again
console.log(Method.display()) // static method is invoked again