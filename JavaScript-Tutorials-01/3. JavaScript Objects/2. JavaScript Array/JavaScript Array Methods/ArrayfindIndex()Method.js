/*
The JavaScript array findIndex() method returns the index of first element of the given array that satisfies the provided function condition.
It returns -1, if no element satisfies the condition.


Using syntax: 
array.findIndex(callback(value,index,arr),thisArg)   
Parameter: 
callback - It represents the function that executes each element.

value - The current element of an array.

index - It is optional. The index of current element.

arr - It is optional. The array on which findIndex() method operated.

thisArg - It is optional. The value to use as this while executing callback.

*/

// example 1

var number_arrays = [3, 5, 6, 87, 13, 87];
var result = number_arrays.findIndex(id => id > 4);
document.write(result);



// example 2
function isPrime(value, index, arrays) {
    var start = 2;
    while (start <= Math.sqrt(value)) {
        if (value % start++ < 1) {
            return false;
        }
    }
    return value > 1;
}

document.write([3, 5, 1, 6].findIndex(isPrime));