var arrays = [1, 4, 6, 8, 12, 18]

// # forEach
arrays.forEach(item => console.log(item * 2))

// # map
// The map() method creates a new array with the results of a provided function on every element in this array
let result1 = arrays.map(function (item) {
    return item * 2
})
console.log(result1)

// # filter
// The filter() method creates a new array with all elements that pass the condition given by the provided function
let result2 = arrays.filter(item => {
    return item > 4
})
console.log(result2)


// # reduce
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let result3 = arrays.reduce((x, y) => {
    return x * y
})
console.log(result3)

// # concat
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays but instead returns a new array
let result4 = arrays.concat([209, 11, 09, 23])
console.log(result4)

// # Combination of map, filter and reduce method
let result5 = arrays.map(item => item * 2).filter(item => item > 4).reduce((x, y) => x * y)
console.log(result5)