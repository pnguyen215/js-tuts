function checkAge(age) {
	let date = new Date();
	if ((date.getUTCFullYear() - age) > 18) {
		return true;
	}
	return confirm("Do you have permission from your parents?");

}

function setAge() {
	let question = prompt("How old are you?", "");
	if (checkAge(question)) {
		alert("Access granted!");
	} else {
		alert("Access denied!");
	}
}

function showPrime(arrays) {
	for (let i = 0; i < arrays.length; i++) {
		if (!isPrime(arrays[i])) {
			continue;
		}
		alert(arrays[i]);
		console.log(arrays[i]);
	}
}

function isPrime(number) {
	if (number <= 1) return false;
	for (let i = 2; i < number; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}

function assignValues() {
	let arrays = [1, 2, 3, 5, 7, 12, 14, 16, 13];
	showPrime(arrays);
}

function pow(number, exponent){
	let res = number;
	if(number < 0  || exponent < 0){
		return null;
	}
	if(exponent == 1){
		return res;
	}
	if(exponent == 0){
		return 1;
	}
	for(let i = 1; i < exponent; i++){
		res *= number;
	}
	return res;
}

function assignToPow(){
	let number = prompt("Enter number: ", "");
	let exponent = prompt("Enter exponent: ", "");
	alert(pow(number, exponent));
}