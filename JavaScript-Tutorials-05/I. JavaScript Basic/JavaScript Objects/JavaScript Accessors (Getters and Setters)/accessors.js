let user = {
	username: "phuocnguyen",
	age: 23,
	language: "en",

	// getter
	get lang(){
		return this.language;
	}

};

console.log(user);
console.log(user.lang); // en



let user2 = {
	name: "phuocnguyen",
	language: "",

	// setter
	set lang(lang){
		this.language = lang;
	}

};

console.log(user2);
user2.lang = "en";	
console.log(user2.language); // en