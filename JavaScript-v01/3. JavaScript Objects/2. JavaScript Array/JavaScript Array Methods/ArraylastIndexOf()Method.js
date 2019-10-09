/*
The JavaScript array lastIndexOf() method is used to search the position of a particular element in a given array
It behaves similar to indexOf() method with a difference that it start searching an element from the last position of an array.
The lastIndexOf() method is case-sensitive. The index position of first character in a string is always start with zero. If an element is not present in a string, it returns -1.

Using syntax:
array.lastIndexOf(element,index)  
Parameter:
element - It represent the element to be searched.

index - It represent the index position from where search starts. It is optional.

*/

// example 1:
var cars = ["audi", "lamborghini", "bmw", "bently"];
var result1 = cars.lastIndexOf("lamborghini");
console.log(result1);
var result2 = cars.lastIndexOf("audi", 1);
console.log(result2);
var result3 = cars.lastIndexOf("ferarri");
console.log(result3);