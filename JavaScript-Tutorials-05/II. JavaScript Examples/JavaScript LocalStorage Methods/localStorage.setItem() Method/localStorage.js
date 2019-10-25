function questionUser(){
	let username = prompt("Enter your-name: ", '');
	let age = prompt("Enter your-age: ", '');
	let location = prompt("Ente your-location: ", '');

	var currentUser = {
		myName: username,
		myAge: age,
		myLocation: location
	};

	let id = getRandom(1, 10);
	localStorage.setItem(id + '-currentUser', JSON.stringify(currentUser)); // current user 
	localStorage.setItem('-currentUser', JSON.stringify(currentUser)); // item default
}

function getRandom(min, max){
	if(min < max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random()*(max - min)) + min;
	}
	return null;
}
