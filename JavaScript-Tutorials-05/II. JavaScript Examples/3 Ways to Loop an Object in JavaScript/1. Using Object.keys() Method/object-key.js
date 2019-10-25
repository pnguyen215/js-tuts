let user = {
	name: 'phuocnguyen',
	age: 23,
	location: 'vn',
	gender: true,

	getDetail(){
		return this.name + " " + this.age + " " +this.location + " " + this.gender;
	}

};


const keys = Object.keys(user);
console.log(keys);

for(let value of keys){
	console.log(value + ': ' + user[value]);
}