let cars = ['audi', 'bmw', 'lamborghini', 'bently', 'porsche', 'bugatti'];
	// 		0		1		2				3			4			5
console.log(cars.indexOf('audi'));
console.log(cars.indexOf('bently', 3));

console.log('Finding all the occurrences of an element');
function find(arrays, element){
	let indicate = [];
	let index = arrays.indexOf(element);
	while(index != -1){
		indicate.push(index);
		index = arrays.indexOf(element, index + 1);
	}
	return indicate;
}

let test = ['c', 'b', 'a', 'r', 'u', 'p', 'a'];
console.log(find(test, 'a'));