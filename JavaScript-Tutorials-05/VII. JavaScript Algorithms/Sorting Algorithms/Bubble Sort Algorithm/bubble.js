function swap(array, indexst, indewnd){
	const temp = array[indexst];
	array[indexst] = array[indewnd];
	array[indewnd] = temp;
}

let bubble = (arrays) => {
	let length = arrays.length;
	for(let i = 0; i < length; i++){
		for(let j = 0; j < length; j++){
			if(arrays[j] > arrays[j + 1]){
				swap(arrays, j, j + 1);
			}
		}
	}
	return arrays;
};

let arr = bubble([5, 7, 1, 3, 11, 9, -1]);
console.log(arr);