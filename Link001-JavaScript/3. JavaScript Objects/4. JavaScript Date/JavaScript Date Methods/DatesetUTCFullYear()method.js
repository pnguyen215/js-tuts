/**
 * syntax: Date.setUTCFullYear(yearValue[, monthValue[, dayValue]])
 * yearValue− An integer specifying the numeric value of the year,
     for example, 2008.
     monthValue− An integer between 0 and 11 representing the months January through December.
     dayValue− An integer between 1 and 31 representing the day of the month.If you specify the dayValue parameter, you must also specify the monthValue.

 */

var date = new Date("Aug 28, 2008 23:30:00")
date.setUTCFullYear(2020)
console.log(date)