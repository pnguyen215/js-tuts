function parseJSON(text){
	text = text || "";
	try{
		return JSON.parse(text);
	}catch(error){
		throw new Error({
			type: 'JSON.parse',
			message: error.stack,
			reason: error.message
		}); 
	}
}

let text = parseJSON('{"name": "phuocnguyen","isStudent": true,"age": 23}');
console.log(text.name);