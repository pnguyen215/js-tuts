let arrays = ['a', 'b', 'c'];
let arrays2 = ['e', 'f', 'g'];
let number1 = [[1]];
number1[0].push(4);
let number2 = [2, [3]];
let number3 = number1.concat(number2);

console.log("Concatenating two arrays: " + arrays.concat(arrays2));
console.log("Concatenating values to an array: " + arrays.concat(1, [2, 3, 4]));
console.log("Concatenating nested arrays: " + number3);