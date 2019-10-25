class Person{
	constructor(name, age, location){
		this._name = name;
		this._age = age;
		this._location = location;
	}

	set name(name){
		this._name = name;
	}

	get name(){
		return this._name;
	}

	set age(age){
		this._age = age;
	}

	get age(){
		return this._age;
	}

	set location(location){
		this._location = location;
	}

	get location(){
		return this._location;
	}

	get detail(){
		return this._name + " " + this._age + " " + this._location;
	}
}

// create new object 
let person1 = new Person("phuocnguyen", 23, "vn");

console.log(person1.detail); // phuocnguyen 23 vn
console.log(JSON.stringify(person1)); // {"_name":"phuocnguyen","_age":23,"_location":"vn"}

// change
person1.name = "stark";
person1.location = "us";
console.log(JSON.stringify(person1));