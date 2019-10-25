console.log("Function declaration");
function showMessage(){
	alert("Hi, I am phuocnguyen, I introduce for you about function!");

}

console.log("Local variables");
function showLocalVariable(){
	let message=  "this is local variables"; // this is calles local variable
	alert(message  + "open developer tool");
	console.log(message);
}

console.log("Global variables or outer variables");
let currentUser = "phuocnguyen"; // this is called global variable, declared out function
function showGlobalVariable(){
	let currentUser = "David";
	let message = currentUser + " say something...";
	alert(message + "open developer tool");
	console.log(currentUser);
}

console.log(currentUser);




