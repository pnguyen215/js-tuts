let user = {
	name: 'phuocnguyen',
	age: 22,
	location: 'us'
};

let currentUser1 = Object.create(user);
let currentUser2 = Object.create(user, {
	"email": {
		value: "nguyenhuuphuocit97@gmail.com",
		enumerable: true
	},

	"address":{
		value: "HCM city",
		enumerable: true
	}
});

console.log(currentUser1.name); // phuocnguyen
console.log(currentUser2.email); // nguyenhuuphuocit97@gmail.com




