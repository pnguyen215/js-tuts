function recursive(number){
	if(number < 1){
		return 0;
	}
	if(number <= 2){
		return 1;
	}
	return recursive(number - 1) + recursive(number - 2);
}

function iterative(number){
	if(number < 1){
		return 0;
	}
	let forward = 0;
	let back = 1;
	let mindle = number;
	for(let i = 2; i <= number; i++){
		mindle = forward + back;
		forward = back;
		back = mindle;
	}
	return mindle;
}

function memorization(number){
	if(number < 1){
		return 0;
	}
	const saved = [0, 1];
	const fibonacci = (num) => {
		if(saved[num] != null){
			return saved[num];
		}
		return (saved[num] = fibonacci(num - 1) + fibonacci(num - 2));
	};
	return fibonacci(number);

}


// ---- testing
console.log(recursive(7));
console.log(iterative(7));
console.log(memorization(7));