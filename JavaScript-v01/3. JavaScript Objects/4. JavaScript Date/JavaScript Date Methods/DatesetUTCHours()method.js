/**
 * dateObj.setUTCHours(hoursValue[, minValue[, secValue[, msValue]]])
 * hoursValue - It represents an integer value between 0 and 23, specifying the Hours. 
 * If the provided hour value is greater than 23, the setUTCHours() method increments the day value accordingly.
 * minValue - It is optional.It represents an integer value between 0 and 59, specifying the minutes
 * If the provided minute value is greater than 59, the setUTCHours() method increments the hour value accordingly.
 * secValue - It is optional.It represents an integer value between 0 and 59, specifying the seconds
 * If the provided second value is greater than 59, the setUTCHours() method increments the minute value accordingly
 * msValue - It is optional.It represents an integer value between 0 and 999, specifying the milliseconds
 * If the provided millisecond value is greater than 999, the setUTCHours() method increments the second value accordingly.
 * 
 */

// example 1
var hour = new Date()

console.log('current hour: ' + hour.getUTCHours())
hour.setUTCHours(24)
console.log('Update hour: ' + hour.getUTCHours())

// example 2
// we will specify the minute value (greater than 59) with the hours
hour.setUTCHours(20, 63)
console.log('Update hour continue: ' + hour.getUTCHours())