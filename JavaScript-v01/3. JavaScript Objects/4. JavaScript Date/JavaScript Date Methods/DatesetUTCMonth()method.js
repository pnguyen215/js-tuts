/**
 * The setUTCMonth() method value starts with 0 that represents January
 * The JavaScript date setUTCMonth() method is used to set the integer value that represents the month in the specified date on the basis of universal time
 * syntax: dateObj.setUTCMonth(monthValue[, dayValue])
 * monthValue - It represents an integer value between 0 and 11 specifying the month
 * dayValue - It is optional.It represents an integer value between 1 and 31 specifying the day of the month
 * 
 */

// example 1
var month = new Date()
console.log('current month: ' + (month.getUTCMonth() + 1))
month.setUTCMonth(3) // range: 0 <= month <= 11
console.log('update month: ' + (month.getUTCMonth() + 1))

// example 2
month = new Date("August 15, 1947 20:22:10")
month.setUTCMonth(10, 33) // range: 1 <= day <= 30, so month increase by 1
console.log('update month: ' + (month.getUTCMonth() + 1))