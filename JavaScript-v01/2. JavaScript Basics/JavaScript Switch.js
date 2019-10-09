// using switch 
/**
The JavaScript switch statement is used to execute one code from multiple expressions

*/
// you can add keyword is break 
var guess = 'b'
var result
switch (guess) {
    case 'a':
        result += " this is a "
    case 'b':
        result += " this is b "
    case 'c':
        result += " this is c "
    default:
        result += " do not find! "
}

console.log(result)