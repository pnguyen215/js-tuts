/*
The JavaScript string replace() method is used to replace a part of a given string with a new substring. 
This method searches for specified regular expression in a given string and then replace it if the match occurs.
We can use global search modifier with replace() method to replace all the match elements otherwise the method replace only first match. 
JavaScript also provides ignore flag to make the method case-insensitive.

*/

var stringName = "@phuocnguyen";

// replace metod
document.writeln(stringName.replace("phuoc", "david") + "<br/>");

/*
replace a regular expression without using global search.
We can ignore case-sensitive behaviour of replace() method by using ignore flag modifier.
*/ 
var stringSample = "Learn Node.js. Node.js is a well-known JavaScript framework";
document.writeln(stringSample.replace(/Node.js/gi, "AngularJS"));


