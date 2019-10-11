/**
A JavaScript variable is simply a name of storage location.
There are two types of variables in JavaScript: local variable and global variable.

There are some rules while declaring a JavaScript variable(also known as identifiers).
1. Name must start with a letter(a to z or A to Z), underscore(_), or dollar($) sign.
2. After first letter we can use digits(0 to 9), for example value1
3. JavaScript variables are case sensitive,for example x and X are different variables.


*/

// A. JavaScript local variable
// A JavaScript local variable is declared inside block or function. 
// It is accessible within the function or block only
function localVariable() {
    var number = 10 // local variable
}

// B. JavaScript global variable
// A JavaScript global variable is accessible from any function
var data = 100 // global variable 
function callData() {
    console.log(data)
}
callData()