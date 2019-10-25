console.log("Function traditional: ");

function say() {
	console.log("hello everyone!");
}
say();


console.log("Another way to declared a function, like this below: ")
let currentUser = function () {
	console.log("hi");

};
console.log(currentUser());


function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

function showYes() {
	alert("you agree!");
}

function showNo() {
	alert("You don not agree!");
}

function callAsk() {
	ask("Do you agree?", showYes, showNo);
}

function sum(num1, num2) {
	return num1 + num2;
}

function callSum() {
	alert(sum(11, 9));
	alert(sum.toString());
}

let sum2 = function (num1, num2) {
	alert(num1 + num2);
};



