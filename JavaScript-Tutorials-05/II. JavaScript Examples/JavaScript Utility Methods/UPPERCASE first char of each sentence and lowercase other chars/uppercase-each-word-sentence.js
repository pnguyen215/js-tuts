
function lowerCase(string){
	return string.toLowerCase();
}

function upperCase(string){
	return string.toUpperCase();
}

function sentenceCase(string){
	return lowerCase(string).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}

let text = 'i am phuocnguyen and a student';
console.log(sentenceCase(text));