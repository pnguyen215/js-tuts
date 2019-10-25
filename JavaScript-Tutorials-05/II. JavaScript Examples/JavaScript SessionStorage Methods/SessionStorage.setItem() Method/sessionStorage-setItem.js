function setUser(username, age, location){
	let user = {
		name: username,
		age : age,
		location: location
	};
	return user;
}


function setItemUser(){
	let username = prompt("Enter your-name: ", '');
	let age = prompt("Enter your-age: ", '');
	let location = prompt("Enter location: ", '');

	let user = new setUser(username, age, location);
	let userDefault = new setUser("phuocnguyen", 23, "uk");

	sessionStorage.setItem("-currentUserOnSessionStorage",JSON.stringify(user));
	sessionStorage.setItem("-currentDefault", JSON.stringify(userDefault));
}
