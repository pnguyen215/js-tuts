class Student{ // this is called Student class
	constructor(name, id, gender){
		this.name = name;
		this.id = id;
		this.gender = gender;
	}

	getDetail(){
		return this.name  + this.id + this.gender;
	}


}