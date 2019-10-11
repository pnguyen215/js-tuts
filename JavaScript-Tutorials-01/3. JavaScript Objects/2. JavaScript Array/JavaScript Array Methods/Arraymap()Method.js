/*
The JavaScript array map() method calls the specified function for every array element and returns the new array. This method doesn't change the original array.
Using syntax: 
array.map(callback(currentvalue,index,arr),thisArg)  
Parameter: 
callback - It represents the function that produces the new array.

currentvalue - The current element of array.

index - It is optional. The index of current element.

arr - It is optional. The array on which map() method operated.

thisArg - It is optional. The value to use as this while executing callback.

*/

var float_pointing = [2.5, 7.43, 8.33, 9.13]; // method returns the round of given elements to the nearest integer. 
var result1 = float_pointing.map(Math.round);
console.log(result1);
var result2 = float_pointing.map(x => x * 2); // map() method returns every element of given array by multiplying it by 2.
console.log(result2);