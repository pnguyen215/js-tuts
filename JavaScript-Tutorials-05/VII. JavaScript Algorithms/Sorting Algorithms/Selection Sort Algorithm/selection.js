function swap(array, indexst, indexnd){
	const temp = array[indexst];
	array[indexst] = array[indexnd];
	array[indexnd] = temp;
}

function selectionSort(arrays){
	const length = arrays.length;
	for(let i = 0; i < length; i++){
		let minValue = i; // storing the index of minimum element
		for(let j = i + 1; j < length; j++){
			if(arrays[minValue] > arrays[j]){
				minValue = j; // updating the index of minimum element
			}
		}
		if(i !== minValue){
			swap(arrays, i, minValue);
		}
	}
	return arrays;
}

let myArray = selectionSort([5, 7, 9, 12, -1, 0, 34]);
console.log(myArray);