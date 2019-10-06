/**
 * The JavaScript findIndex() method provides the index of the first element in the array that completes the given test. If the test is not satisfied, it will return -1.
 * findIndex() does not execute the function for array elements without values.
 * findIndex() does not change the original array
 * Syntax: array.findIndex(function (Value, index, arr) thisValue)
 * Parameters: 
 * Value: The value of the current element. 
 * Index: The array index of the current element. 
 * Arr: The array object on which the findIndex() method operated. 
 * ThisValue: A value to be passed to the function to be used as its "this" value. If the parameter is empty, the value "undefined" will be passed as its "this" value.
 * Return: Index of the array element, otherwise it returns - 1.
 * 
 * 
 * 
 * 
 */

// example 1
function checkPass(num) {
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] > 54)
            return [i, num[i]]
    }
}

function check(num) {
    return num > 23
}


function printOut(num) {
    var arr = new Array()
    arr = num.findIndex(id => id > 43)
    return arr
}




var arrays = [32, 54, 75, 13, 12]

// method 1
for (let i = 0; i < arrays.length - 1; i++) {
    if (check(arrays[i])) {
        console.log([i, arrays[i]])
    }
}
console.log()

// method 2
console.log(checkPass(arrays))
/**
[0, 32]
[1, 54]
[2, 75]
[0, 32]

*/
console.log()

// method 3
console.log(arrays.findIndex(id => id === 32)) // index: 0 -> 32

console.log()

// method 4
const map = new Map()
arrays.forEach(function (target) {
    if (target > 23) {
        map.set(target - 10, target) // set into map with key: target - 10, value: target
    }
})
console.log(map)

// method 5
console.log(printOut(arrays))