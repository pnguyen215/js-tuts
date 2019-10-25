console.log("Using switch statement");

function demo() {
    let number = 2 + 2;
    switch (number) {
        // {
        case 1:
        case 2:
        case 3:
            console.log("wrong!");
            break;
            // } grouped three cases
        case 4:
            console.log("right" + number);
            break;
        default:
            console.log("i do not know!");
    }
}

demo();


console.log("Any expression can be a switch/case argument");

function handleExpression() {
    let num1 = "1";
    let num2 = 0;
    switch (+num1) {
        case num2 + 1:
            console.log("this run!");
            console.log(+num1);
            break;
        default:
            console.log("this doesn't run");
    }
}

handleExpression();


function handleTypeMatter() {
    let question = prompt("Enter the values: ", "");
    switch (question) {
        case '1':
        case '2':
        case '3':
            alert("this run ...for 1, 2, 3");
            break;
        case 4:
            alert("never execute!");
            break;
        default:
            alert("i do not know");
    }
}