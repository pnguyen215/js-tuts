/**
The JavaScript date getDate() method returns the day
for the specified date on the basis of local time.
Syntax

The getDate() method is represented by the following syntax:

    dateObj.getDate()

Return

An integer value between 1 and 31 that represents the day of the specified date.

*/
var $date = new Date()
console.log("Today's day: " + $date.getDate()) // return a day in a month 
/**
to print the day from the given date
 */
var $otherDate = new Date("August 15, 1947 20:22:10")
console.log($otherDate)