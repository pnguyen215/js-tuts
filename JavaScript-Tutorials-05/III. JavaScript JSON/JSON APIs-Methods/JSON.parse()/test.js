function parseJSON(text){
	text  = text || '';
	try {
		return JSON.parse(text);
	}catch(error){
		return{
			type: 'JSON.parse',
			message: error.stack,
			reason: error.message
		}
	}
	
}

function reviver(text, addtribute){
	let output = JSON.parse(text, function (key, value){
		if(key == addtribute){
			return value.toUpperCase();
		}else{
			return value;
		}
	});
	return output;
}




let text = '{"name": "phuocnguyen", "age": "22", "location": "us"}';
console.log(parseJSON(text)); // this is JavaScript object
console.log(reviver(text, "location"));