/*
The JavaScript string charCodeAt() method is used to find out the Unicode value of a character at the specific index in a string
The index number starts from 0 and goes to n-1, where n is the length of the string. It returns NaN if the given index number is either a negative number or it is greater than or equal to the length of the string.



*/

var stringName = "phuocnguyen";

document.writeln(stringName.charCodeAt()) // print Unicode of the first character 
document.writeln(stringName.charCodeAt(stringName.length - 1)); // print Unicode of the last character