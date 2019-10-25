function user(name, age, gender){ // this is constructor
	this.name = name;
	this.age = age;
	this.gender = gender;
}

// creating new object
let user1 = new user("phuocnguyen", 23, true);
let user2 = new user("davidnguyen", 23, false);

// 
console.log(JSON.stringify(user1)); //{"name":"phuocnguyen","age":23,"gender":true}
console.log(user2); //user { name: 'davidnguyen', age: 23, gender: false }