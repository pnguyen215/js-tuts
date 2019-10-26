function test1(){
	let user = {
		name: 'phuocnguyen',
		age: 23,
		location: 'us',
		gender: true
	};
	return Object.keys(user);
}
console.log("Length:" + test1().length);
console.log(test1()); // show 
test1().forEach(ls => { // traversing elements
	console.log(ls);
})


// example 2
function createNewUser(){
	const property = 'age';
	let currentUser = test1().reduce(function (total, currentValue, index, array){
		if(currentValue !== property){
			total[currentValue] = 'has position at ' + index + ' into user object';
			
		}
		return total;
	},{});
	return currentUser;
}

console.log(createNewUser());