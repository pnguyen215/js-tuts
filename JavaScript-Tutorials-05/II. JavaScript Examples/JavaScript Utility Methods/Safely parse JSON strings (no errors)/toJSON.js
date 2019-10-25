function toJSON(text){
	text = text || "";
	try{	
		return JSON.parse(text);
	}catch(error){
		return {
			type: 'JSON.parse',
			message: error.stack,
			reason: error.message
		}
	}
}

let json = '{"name": "phuocnguyen","gender": true,"age": 23}';
let value = toJSON(json);
console.log(value);
console.log(value.name);