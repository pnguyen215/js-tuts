let arrays = [1, 2, 3, 4, 5, 6, 7];

let stringArrays = ['a', 'b', 'c', 'd'];


console.log("Before empty arrays: ");
console.log(arrays);
console.log(stringArrays);
console.log("After emtpy arrays: ");
arrays = []; // 1st way
stringArrays.length = 0; // 2nd way
console.log(arrays);
console.log(stringArrays);