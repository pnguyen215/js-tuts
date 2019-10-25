let user = {
	name: 'phuocnguyen',
	age: 23,
	location: 'vn',
	gender: true
};

const entries = Object.entries(user);


for(const [key, value] of entries){
	console.log(`${key}:${value}`);
}