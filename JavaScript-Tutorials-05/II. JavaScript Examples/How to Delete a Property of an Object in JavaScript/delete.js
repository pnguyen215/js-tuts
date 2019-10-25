let user = {
	name: 'phuocnguyen',
	age: 23,
	location: 'us',
	gender: true
};

console.log(JSON.stringify(user));
console.log(delete user.gender); //true
console.log(delete user.isSingle); // true, cause isSingle has not in user
console.log(JSON.stringify(user));