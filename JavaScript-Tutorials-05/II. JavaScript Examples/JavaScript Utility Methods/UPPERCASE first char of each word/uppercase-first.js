
function lowerCase(string){
	return string.toLowerCase();
}

function upperCase(string){
	return string.toUpperCase();
}

function properCase(string){

	return lowerCase(string).replace(/^\w|\s\w/g, upperCase);
}

let text = "phuoc nguyen huu";
console.log(properCase(text));