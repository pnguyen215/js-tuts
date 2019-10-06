/*
The JavaScript array slice() method extracts the part of the given array and returns it. This method doesn't change the original array.

Using syntax: 
array.slice(start,end) 
Parameter: 
start - It is optional. It represents the index from where the method starts to extract the elements.

end - It is optional. It represents the index at where the method stops extracting elements.

*/

// example 1

var collection_cars = ["audi", "bmw", "bently", "ferrari", "lamborghini"];
var result1 = collection_cars.slice(1, 3);
document.writeln(result1 + "<br/>");
var result2 = collection_cars.slice(-3, -1);
document.writeln(result2  + "<br/>");