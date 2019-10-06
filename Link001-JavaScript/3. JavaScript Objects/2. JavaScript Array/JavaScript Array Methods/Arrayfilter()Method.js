/*
The JavaScript array filter() method filter and extract the element of an array that satisfying the provided condition.
Using syntax:
array.filter(callback(currentvalue,index,arr),thisArg) 
Parameter
callback - It represents the function that test the condition.

currentvalue - The current element of array.

index - It is optional. The index of current element.

arr - It is optional. The array on which filter() operated.

thisArg - It is optional. The value to use as this while executing callback


*/
// example 1
var marks = [10, 67, 45, 90];

function check(value) {
    return value > 30;
}



document.write(marks.filter(check));


// example 2
function test(element, id, array) {
    return id > 2;
}

document.write([24, 37, 50, 47].filter(test));