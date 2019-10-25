var user = {
	firstname : 'phuoc',
	lastname: 'nguyen',
	email: 'nguyenhuuphuocit97@gmail.com',
	age: 23
};

let firstname = user.age; //  objectName.property  
console.log(firstname);

let lastname = user['lastname']; //objectName["property"]
console.log(lastname);

let index = "email";
let emailId = user[index]; // objectName[expression]
console.log(emailId);