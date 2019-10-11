/*
The JavaScript array every() method checks whether all the given elements in an array are satisfying the provided condition.
It returns true when each given array element satisfying the condition otherwise false.
Using syntax:
array.every(callback(currentvalue,index,arr),thisArg)
Parameter
callback - It represents the function that test the condition.

currentvalue - The current element of array.

index - It is optional. The index of current element.

arr - It is optional. The array on which every() operated.

thisArg - It is optional. The value to use as this while executing callback.



*/

// exmaple 1
function check(value) {
    return value > 20;
}
var marks = [50, 60, 40, 70, 20];

document.write(marks.every(check) + "<br/>");

// example 2
function test(element, index, array) {
    return index < 3;
}
document.write([12, 67, 88, 55].every(test) + "<br/>");
document.write([12, 67, 88].every(test) + "<br/>");