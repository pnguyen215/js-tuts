/*
The JavaScript array pop() method removes the last element from the given array and return that element. This method changes the length of the original array.
Using syntax: 
array.pop()  


*/

// example 1
var cars = ["audi", "lamborghini", "ferrari", "bmw", "bently"];

console.log("before: " + cars + "<br/>");
console.log("Get lat element: " + cars.pop() + "<br/>");
console.log("Remaining elements: " + cars + "<br/>");


// example 2
var collection_cars = ["audi", "lamborghini", "ferrari", "bmw", "bently"];
var len = collection_cars.length;
for (var id = 0; id < len; id++) {
    console.log("Extracted element: " + collection_cars.pop() + "<br/>");
}