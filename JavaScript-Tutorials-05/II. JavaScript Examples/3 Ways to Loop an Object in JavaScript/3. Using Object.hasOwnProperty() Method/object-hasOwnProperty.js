let user = {
	name: 'phuocnguyen',
	age: 23, 
	location: 'vn',
	gender: true

};

for(let key in user){
	if(user.hasOwnProperty(key)){
		console.log(key + " " + user[key]);
	}
	
}