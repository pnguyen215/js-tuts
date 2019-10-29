let  merge = (left, right) => {
	const array = [];
	while(left.length && right.length){
		if(left[0]  < right[0]){
			array.push(left.shift());
			//console.log(array);
		}else {
			array.push(right.shift());
			//console.log(array);
		}
	}
	//return [...array, ...left, ...right];
	return array.concat(left.slice()).concat(right.slice());
}

function mergeSort(array, half = array.length / 2){

	if(array.length < 2){
		return array;
	}
	const left = array.splice(0, half);
	//console.log(left);
	//console.log(array);
	return merge(mergeSort(left), mergeSort(array));
	
}

let array = mergeSort([20, 23, 25, 21, 30, 10, 65, 15, -1]);
console.log(array);

