function swap(array, left, right){
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
}

function partition(items, left, right){
	let mindle = items[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;
	while(i <= j){
		while(items[i] < mindle){
			i++;
		}
		while(items[j] > mindle){
			j--;
		}
		if(i <= j){
			swap(items,i,j);
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right){
	let index;
	if(items.length > 1){
		index = partition(items, left, right);
		if(left < index - 1){
			quickSort(items, left, index - 1);
		}
		if(index < right){
			quickSort(items, index, right);
		}
	}
	return items;
}


let array = [45, 67, 12, 78, 90, 11];
let sortArray = quickSort(array, 0, array.length - 1);
console.log(sortArray);