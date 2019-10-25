class Student{
	constructor(name, id){
		this.name = name;
		this.id = id;
	}

	// setter
	set name(newName){
		this._name = newName;
	}

	// getter
	get name(){
		return this._name;
	}

	set id(newId){
		this._id = newId;
	}


	get id(){
		return this._id;
	}


	getDetail(){
		return this._name  + " " + this._id;
	}
}

let student1 = new Student();
student1.name = "phuocnguyen";
student1.id = '003';
console.log(student1.id); // 003
console.log(student1.getDetail());

let student2 = new Student("phuocnguyen", "005");
console.log(student2.id); // 005
console.log(student2.getDetail());