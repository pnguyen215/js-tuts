/**
 * syntax:
 * Date.setMonth(monthValue[, dayValue])
 * parameter: 
 * 
 * monthValue − An integer between 0 and 11 (representing the months January through December).

    dayValue − An integer from 1 to 31, representing the day of the month.

    msValue − A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.

 */
var month = new Date("Aug 28, 2008 23:30:00")
month.setMonth(9)
console.log(month)