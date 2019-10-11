/***
The JavaScript date getUTCMonth() method returns the integer value that represents month
for the specified date on the basis of universal time.
The value returned by getUTCMonth() method starts with 0 that represents January.
0 -> January
1 - > Feburary
...
Return
An integer value between 0 and 11 that represents the month in the specified date.

*/

var $month = new Date()


console.log($month.getUTCMonth() + 1)