let user = {
	name: 'phuocnguyen',
	age: 22
};

Object.defineProperties(user,{
	location: {
		value: 'us',
		writable: true
	},
	phone:{
		value: '8492 201 4745',
		writable: false
	},
	detail: {
		value: user.name + " " + user.age,
		writable: false
	},

});

console.log(user.location);
console.log(user.detail);
