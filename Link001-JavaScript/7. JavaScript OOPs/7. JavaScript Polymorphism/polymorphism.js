/**
 * 
 * where a child class object invokes the parent class method
 */

// example 
class A {
    display() {
        console.log('a is invoked')
    }
}

class B extends A {

}

console.log(A.display())