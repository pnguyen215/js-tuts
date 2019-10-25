var user = {
	username: "phuocnguyen",
	age: 23, 
	location: "vn",
	gender: true,

	getFullDetail: function(){
		return user.username + user.age + user.gender;
	}
};

console.log(JSON.stringify(user)); // {"username":"phuocnguyen","age":23,"location":"vn","gender":true}
console.log(user.getFullDetail());  // phuocnguyen23true

// access object properties
console.log(user.username);
console.log(user.gender);
console.log(user.location);

