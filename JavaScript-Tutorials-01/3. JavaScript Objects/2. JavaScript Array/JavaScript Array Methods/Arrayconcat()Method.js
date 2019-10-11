/*
The JavaScript array concat() method combines two or more arrays and returns a new string. This method doesn't make any change in the original array.

Using syntax: 
array.concat(arr1,arr2,....,arrn)  
*/
var arrays1 = ["worker", "teacher", "doctor"];
var arrays2 = ["lawyer", "chief", "messenger"];
var arrays3 = ["mechanic", "engineer", "chemist"];
var arraysAfterConcat = arrays1.concat(arrays2, arrays3);
document.write(arraysAfterConcat);