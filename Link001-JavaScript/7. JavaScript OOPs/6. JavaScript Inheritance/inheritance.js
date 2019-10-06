/**
 * 
 * 
 * 
 * using extends keyword
 */

// example 1
class Time extends Date {
    constructor() {
        super()
    }
}
var time = new Time()
console.log(time.getDate() + " " + (time.getMonth() + 1) + " " + time.getFullYear())