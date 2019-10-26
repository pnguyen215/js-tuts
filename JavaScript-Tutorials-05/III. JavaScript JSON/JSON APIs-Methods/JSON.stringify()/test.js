function replacer(key, value){
	if(typeof value === 'string'){
		return undefined;
	}
	return value;
}


let user = {
	username: "phuocnguyen",
	age: 22,
	location: 'us',
	gender: true
};



console.log(JSON.stringify(user));
console.log(JSON.stringify(user, replacer));
console.log(JSON.stringify({number: 11}, null, ''));
console.log(JSON.stringify({number1: 11, number2: 22}, null, "\t"));