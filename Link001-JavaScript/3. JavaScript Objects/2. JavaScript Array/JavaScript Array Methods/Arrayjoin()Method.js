/*
The JavaScript array join() method combines all the elements of an array into a string and return a new string. We can use any type of separators to separate given array elements.
Using syntax:
array.join(separator)  
Parameter:
Separator() - It is optional. It represent the separator used between array elements.
Return:
A new string contains the array values with specified separator


*/

// example 1
var cars = ["audi", "bmw", "bently", "lamborghini"];
var result1 = cars.join();
console.log(result1);
var result2 = cars.join("-");
console.log(result2);