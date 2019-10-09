/*
The JavaScript array fill() method fills the elements of the given array with the specified static values. 
This method modifies the original array. It returns undefined, if no element satisfies the condition.
Using syntax:
arr.fill(value[, start[, end]])  
Parameter
value - The static value to be filled.

start - It is optional. It represents the index from where the value starts filling. By default, it is 0.

end - It is optional. It represents the index where the value stops filling. By default, it is length-1.

*/

// example 1
var car = ["Audi", "BMW", "Porsche"];
var add_car = car.fill("Lamborghini");
document.write(car + "<br/>");

// example 2
var new_car = car.fill("Bugatti", 1); // replace from 1st position to the end array
document.write(car + "<br/>");

// example 3
var added_car = car.fill("Bently", 0, 2);
document.write(car + "<br/>");