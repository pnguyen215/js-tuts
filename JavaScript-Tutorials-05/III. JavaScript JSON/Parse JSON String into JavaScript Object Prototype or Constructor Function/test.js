function post(){
	this.id = "";
	this.title = "";
	this.postedUser = new user();
}

function user(){
	this.id = "";
	this.name = "";
	this.age = "";
}

var json  = {
	"post":{
		"id": "1",
		"title" : "clean code",
		"postedUser" : {
			"id" : "1",
			"name" : "phuocnguyen",
			"age" : "22"
		}

	}
};

function test(){
	var jsonString = JSON.stringify(json); // parse to json string
	console.log(jsonString);
	var object  = JSON.parse(jsonString); // parse json string into JavaScript Object
	console.log(object);

}

test();