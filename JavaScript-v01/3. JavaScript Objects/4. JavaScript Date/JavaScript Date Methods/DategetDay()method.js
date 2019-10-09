/**
The JavaScript date getDay() method returns the value of day of the week
for the specified date on the basis of local time.The value of the day starts with 0 that represents Sunday.
Syntax
The getDay() method is represented by the following syntax:

    dateObj.getDay()
Return
An integer value between 0 and 6 that represents the days of the week
for the specified date
*/
var $date = new Date()
console.log($date.getDay())
var $otherDate = new Date("August 15, 1947 20:22:10")
console.log($otherDate.getDay())