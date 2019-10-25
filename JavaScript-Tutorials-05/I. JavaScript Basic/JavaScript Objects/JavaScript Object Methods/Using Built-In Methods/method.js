let user = {
	username: "phuocnguyen",
	age: 23,
	location: 'vn',
	gender: true,

	getDetail: function(){
		return this.username + this.age + this.gender + this.location;
	}
};

console.log(user.username);
console.log(user.getDetail());

console.log(user.username.toUpperCase());