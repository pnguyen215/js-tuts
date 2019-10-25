function contains(string, substring, index){
	return string.indexOf(substring, index) !== -1; // true or false
}

let text = "I am phuocnguyen and now I am senior!";
let subString = "phuocnguyen";

console.log(contains(text, subString, 0));