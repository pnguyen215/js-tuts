let arrays = ['audi', 'bmw', 'bently', 'lamborghini', 'bugatti'];
// traversing elements of this arrays
arrays.forEach(ls => {
	console.log(ls);
});
console.log();


// Converting a for loop to forEach
const copy = [];
for(let i = 0; i < arrays.length; i++){
	copy.push(arrays[i]);
}

copy.forEach(ls => {
	console.log(ls);
});
