let user = {
	username: "phuocnguyen",
	age: 23,
	location: 'vn',
	gender: true,

	getDetail: function(){
		return this.username + this.age + this.gender + this.location;
	}
};

user.getName = function(){ // adding a method to an object
	return user.username + user.age;
}

console.log(user.getName()); //phuocnguyen23