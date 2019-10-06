/*
The JavaScript array includes() method checks whether the given array contains the specified element. It returns true if an array contains the element, otherwise false

Using syntax:
array.includes(element,start)  
Parameter:
element - The value to be searched.

start - It is optional. It represents the index from where the method starts search.


*/

// example 1
var cars = ["Audi", "BMW", "Ferarri", "Bently"];
var result = cars.includes("Audi");
var result2 = cars.includes("BMW", 3);
console.log(result);
console.log(result2);