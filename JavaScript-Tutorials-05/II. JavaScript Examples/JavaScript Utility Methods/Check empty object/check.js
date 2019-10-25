function check(object){
	for(let key in object){
		if(object.hasOwnProperty(key)){
			return false;
		}
	}
	return true;
}

const object1 = {name: 'phuocnguyen', age: 23, location: 'us'};
const object2 = {};
console.log(check(object2)); // true
console.log(check(object1)); // false
