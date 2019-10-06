/*
The JavaScript array indexOf() method is used to search the position of a particular element in a given array. This method is case-sensitive
The index position of first element in an array is always start with zero. If an element is not present in an array, it returns -1.
Using syntax: 
array.indexOf(element,index)  
Parameter: 
element - It represent the element to be searched.

index - It represent the index position from where search starts. It is optional.


*/

// example 1
var cars = ["Audi", "BMW", "Bently", "Lamborghini"];
var result1 = cars.indexOf("Audi");
document.writeln(result1);
var result2 = cars.indexOf("Ferarri");
document.writeln(result2);
var result3 = cars.indexOf("Bently", 1);
document.writeln(result3);