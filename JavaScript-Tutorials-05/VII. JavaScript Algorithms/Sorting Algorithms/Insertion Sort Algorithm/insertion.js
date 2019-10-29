let insertionSort = (array) => {
	const length = array.length;
	for(let i = 0; i < length; i++){
		let temp = array[i];
		let j;
		for(j = i - 1; j >= 0 && array[j] > temp; j--){
			array[j + 1] = array[j];
		}
		array[j + 1] = temp;
	}
	return array;
};


let array = insertionSort([6, 3, 8, 11, 9, -1]);
console.log(array);
