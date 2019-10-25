function getItem(){
	let item = localStorage.getItem('-currentUser');
	alert(item);
	// to use this localstorage 
	let itemJSON = JSON.parse(localStorage.getItem('-currentUser'));
}