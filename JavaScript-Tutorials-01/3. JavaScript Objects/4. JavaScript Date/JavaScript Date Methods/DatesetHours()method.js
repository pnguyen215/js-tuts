/**
 * The JavaScript date setHours() method is used to set the hour
 for the specified date on the basis of local time.

 Syntax
 The setHours() method is represented by the following syntax:

     dateObj.setHours(hoursValue[, minValue[, secValue[, msValue]]])

 Parameter
 hoursValue - It represents an integer value between 0 and 23, specifying the Hours.If the provided hour value is greater than 23, the setHours() method increments the day value accordingly.

 minValue - It is optional.It represents an integer value between 0 and 59, specifying the minutes.If the provided minute value is greater than 59, the setHours() method increments the hour value accordingly.

 secValue - It is optional.It represents an integer value between 0 and 59, specifying the seconds.If the provided second value is greater than 59, the setHours() method increments the minute value accordingly

 msValue -  It is optional.It represents an integer value between 0 and 999, specifying the milliseconds.If the provided millisecond value is greater than 999, the setHours() method increments the second value accordingly.
 */

// case 1
var date = new Date()

console.log("Current hour: " + date.getHours())

date.setHours(8)

console.log("Update hour: " + date.getHours())

// case 2
var hours = new Date("August 15, 1947 20:22:10")
hours.setHours(10)
console.log("Update hour: " + hours.getHours())

// case 3
hours.setHours(10, 60)
console.log("Update hour: " + hours.getHours())