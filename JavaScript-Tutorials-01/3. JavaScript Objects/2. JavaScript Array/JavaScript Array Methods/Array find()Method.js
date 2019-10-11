/*
The JavaScript array find() method returns the first element of the given array that satisfies the provided function condition.
Using syntax: 
array.find(callback(value,index,arr),thisArg)    
Parameter
callback - It represents the function that executes each element.

value - The current element of an array.

index - It is optional. The index of current element.

arr - It is optional. The array on which find() operated.

thisArg - It is optional. The value to use as this while executing callback.

*/

// example 1
var arrays = ["Audi", "BMW", "Mescedes"];
var result = arrays.find(id => id == "Audi");

console.log(result);


// example 2
function isPrime(value, id, arrays) {
    var start = 2;
    while (start <= Math.sqrt(value)) {
        if (value % start++ < 1) {
            return false;
        }
    }
    return value > 1;

}

console.log([2, 3, 5, 11, 87, 12, 13, 57].find((value, id, arrays) => isPrime(value, id, arrays)));