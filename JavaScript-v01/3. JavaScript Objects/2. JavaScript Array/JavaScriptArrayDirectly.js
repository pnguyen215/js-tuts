/*
Using syntax:
var arrayname=new Array();  
*/
var employee = new Array();

// add items
employee[0] = "lawyer";
employee[1] = "actor";
employee[2] = "baker";
employee[3] = "chief";

// for loop
for (i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}