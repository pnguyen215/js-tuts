/***
 * to invoke more than one static method
 */

class Method {
    static display1() {
        return 'static method is invoked'
    }
    static display2() {
        return 'static method is invoked again'
    }
}

console.log(Method.display1())
console.log(Method.display2())