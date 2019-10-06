/*
Using syntax;
array.forEach(callback(currentvalue,index,arr),thisArg)  
Parameter:
callback - It represents the function that test the condition.

currentvalue - The current element of array.

index - It is optional. The index of current element.

arr - It is optional. The array on which forEach() operated.

thisArg - It is optional. The value to use as this while executing callback.

*/

// example 1
var cars = ["Audi", "Ferrari", "BMW", "BMW", "Bently"];
cars.forEach(function (fetch) {
    console.log(fetch);
});

// example 2: 
var sum = 0;
var numbers = [10, 56, 12, 30];

numbers.forEach(function (element) {
    sum += element;
    console.log(element);
});
console.log(sum)