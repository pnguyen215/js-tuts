/**
 * Let 's see the same example with prototype-based approach
 * 
 * 
 * 
 * 
 */

// example 
function A() {

}

// adding prototype
A.prototype.display = function () {
    return 'a is invoked!'
}

function B() {

}

B.prototype = Object.create(A.prototype) // assign form prototype to B prototype

var obj = [new A(), new B()]

obj.forEach(function (ls) {
    console.log(ls.display())
})