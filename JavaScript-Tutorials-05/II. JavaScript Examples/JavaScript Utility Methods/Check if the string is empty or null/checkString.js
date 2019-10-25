function checkStringIsNullOrNotEmpty(string){
	if(string  !==  null  && string !== ''){
		return true;
	}
	return false;
}

console.log(checkStringIsNullOrNotEmpty('')); // false
console.log(checkStringIsNullOrNotEmpty("phuocnguyen")); // true