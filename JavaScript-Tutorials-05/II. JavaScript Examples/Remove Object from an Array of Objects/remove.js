let user1 = {
	id: 1,
	name: 'phuocnguyen',
	age: 23,
	location: 'vn'
};

let user2 = {
	id: 2,
	name: 'nguyenphuoc',
	age: 24,
	lcoation: 'us'
};

let user = [user1, user2];

console.log(JSON.stringify(user));

let index = user.map(function(item){
	return item.id;
}).indexOf(37);
console.log(index);

user.splice(index, 1);
console.log(JSON.stringify(user));


