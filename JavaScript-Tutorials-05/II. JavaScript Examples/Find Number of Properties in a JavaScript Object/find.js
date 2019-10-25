let user = {
	name: 'phuocnguyen',
	age: 23,
	location: 'us',
	gender: true,
	getDetail(){
		return this.name + " " + this.age;
	}
};

let count = Object.keys(user).length;
console.log(count); // 5