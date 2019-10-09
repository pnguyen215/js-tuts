/*
The JavaScript string charAt() method is used to find out a char value present at the specified index in a string.
The index number starts from 0 and goes to n-1, where n is the length of the string. The index value can't be a negative, greater than or equal to the length of the string.




*/

// example 
var stringName = "phuocnguyen";

document.writeln(stringName.charAt()); // print first character
document.writeln(stringName.charAt(stringName.length - 1)) // print last character
document.writeln(stringName.charAt(4));