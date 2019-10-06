/**
 * an example where a child and parent class contains the same method
 * Here, the object of child class invokes both classes method.
 * 
 * 
 * 
 * 
 */

// example 
class A {
    display() {
        console.log('a is invoked!')
    }
}

class B extends A {
    display() {
        console.log('b is invoked!')
    }
}

var obj = [new A(), new B()]
// traversing 
obj.forEach(function (ls) {
    ls.display()
})