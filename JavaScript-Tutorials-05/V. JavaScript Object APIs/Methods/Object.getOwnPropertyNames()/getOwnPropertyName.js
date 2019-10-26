function user(name, age, location){
	this.name = name;
	this.age = age;
	this.location = location;
}

let user2 = {
	name: 'phuocnguyen',
	age: 22,
	location: 'us'
};

console.log(Object.getOwnPropertyNames(new user('david',22,'us')));
console.log(Object.getOwnPropertyNames(user2));

// iterator elements
let currentUser = new user('john', 24, 'uk');
Object.getOwnPropertyNames(currentUser).forEach(function (values, index, array){
	console.log(values + ' -> ' + currentUser[values]);
});