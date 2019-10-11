/*
The JavaScript array sort() method is used to arrange the array elements in some order. By default, sort() method follows the ascending order.



*/


// example 1
var collection_cars = ["audi", "bmw", "bently", "ferrari", "lamborghini"];
var collection_numbers = [23, 11, 9, 2019];
var collection_numbers_other = [4, 56, 1, 12, 87, -1, 0];


var result1 = collection_cars.sort(); // sort for string 
var result2 = collection_numbers.sort(); // sort for number 

/*to arrange the elements in ascending order using function.*/
var result3 = collection_numbers.sort(function compare(_no1, _no2) {
    return _no1 - _no2;
});

/*to arrange the elements in descending order using function.*/
var result4 = collection_numbers_other.sort(function compare(number1, number2) {
    return number2 - number1;
});


/*to extract maximum value from an array.*/
var result5 = collection_numbers_other[0]; // after sort this array above
/*to extract minimum value from an array.*/
var result6 = collection_numbers_other.sort(); // or using reverse() after sort()
var result7 = collection_numbers_other[0];


/*print out*/

document.writeln(result1 + "<br/>");
document.writeln(result2 + "<br/>");
document.writeln(result3 + "<br/>");
document.writeln(result4 + "<br/>");
document.writeln("Maximum: " + result5 + "<br/>");
document.writeln("Minimum: " + result7 + "<br/>");