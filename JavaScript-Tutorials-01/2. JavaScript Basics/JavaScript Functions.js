// Let’s see the simple example of function in JavaScript that does not has arguments.
function msg() {
    console.log("This is demo for function no arguments")
}
msg()

//  Let’s see the example of function that has one or more argument.
function getCube(number) {
    console.log(number * number * number)
}
getCube(6)

//  Let’s see the example of function that returns value.
function getMessage() {
    return "this is demo message!"
}
console.log(getMessage())

// JavaScript Function Object Examples
var sum = new Function("$no1", "$no2", "return $no1 + $no2")
console.log(sum(8, 3))