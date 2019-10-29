function user(name, id, year){
	this.name = name;
	this.id = id;
	this.year = year;

	this.getName = function(){
		return this.name;
	}

	this.getDetail = function(){
		return this.name + " " + this.id + " " + this.year;
	}
}

user.prototype.getLocation = function(){
	return this.location = 'us';
}
let user1 = new user('phuocnguyen', '001', 2019);
console.log(JSON.stringify(user1));
console.log(user1.getName());
console.log(user1.getDetail());
console.log(user1.getLocation());


