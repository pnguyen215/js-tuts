// Object.entries() method returns an array containing all the object own properties, as an array of [key, value] pairs

function iteratingThroughObject() {
	let user = {
		name: 'phuocnguyen',
		age: 22,
		location: 'us',
		gender: true
	};

	// 1st way
	for (let [key, value] of Object.entries(user)) {
		console.log(`${key}: ${value}`);

	}

	// 2nd way
	Object.entries(user).forEach(([key, value]) => {
		console.log(`${key}: ${value}`);
	});
}

function convertObjectToMap() {
	let object = {
		name: 'this',
		destination: 'path'
	}
	const map = new Map(Object.entries(object));
	console.log(map);
}

function letToDoMoreExample() {
	const object = {
		name: 'this',
		destination: 'path'
	};
	console.log(Object.entries(object)); // array like object

	const object2 = {
		1: 'a',
		2: 'b',
		3: 'c'
	};
	console.log(Object.entries(object2));

	console.log(Object.entries('phuocnguyen'));

	console.log(Object.entries(1109)); // []

}

iteratingThroughObject();
convertObjectToMap();
letToDoMoreExample();
