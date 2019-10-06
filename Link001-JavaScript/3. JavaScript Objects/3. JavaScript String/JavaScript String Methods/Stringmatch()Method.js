/*
*The JavaScript string match() method is used to match the string against a regular expression. We can use global search modifier with match() method to get all the match elements otherwise the method return only first match.

Using syntax:
string.match(regexp)  
Parameter
regexp - It represents the regular expression which is to be searched.

Return
The matched regular expression.

*/

 //example 

 var stringName = "@phuocnguyenit97";
 document.writeln(stringName.match("phuoc"));
// search for a regular expression using global flag.
document.writeln(stringName.match(/phuoc/g));

/*
We can ignore case-sensitive behaviour of match() method by using ignore flag
*/
document.writeln(stringName.match(/nguyenit/gi));


/*
we will print the array of matched elements.
*/
document.writeln(stringName.match(/[a-z0-9]/g));