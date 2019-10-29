function user(name, id, year){
	this.name = name;
	this.id = id;
	this.year = year;
}

function userBuilder(){
	let firstName;
	let lastName;
	let age;

	return {
		setFirstName: function(firstName){
			this.firstName = firstName;
			return this;
		},

		setLastName: function(lastName){
			this.lastName = lastName;
			return this;
		},

		setAge: function(age){
			this.age = age;
			return this;
		},

		getInfo: function(){
			return 	`${this.firstName} - ${this.lastName} - age: ${this.age}`;
		},

		build: function(){
			return new user(this.lastName + " " + this.firstName, this.age, 2019);
		}

	};
}

let user1 = new userBuilder().setLastName("nguyen").setFirstName("phuoc").setAge(22).build();
console.log(JSON.stringify(user1));





