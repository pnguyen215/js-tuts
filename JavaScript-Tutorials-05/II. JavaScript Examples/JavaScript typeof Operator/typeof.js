function testNumber(){
	console.log(typeof 11 === 'number');
	console.log(typeof(11) === 'number');
	console.log(typeof 3.14 === 'number');
	console.log(typeof Math.LN2 === 'number');
	console.log(typeof Infinity === 'number');
	console.log(typeof NaN === 'number');
	console.log(typeof Number('11') === 'number');
	console.log()
}

function testString(){
	console.log(typeof '' === 'string');
	console.log(typeof 'phuocnguyen' === 'string');
	console.log(typeof `phuocnguyen` === 'string');
	console.log(typeof '1' === 'string');
	console.log(typeof(typeof 1) === 'string'); // true
	console.log(typeof String(11) === 'string'); // true,  String converts anything into a string, safer than toString
	console.log();

}

function testBoolean(){
	console.log(typeof true === 'boolean');
	console.log(typeof false === 'boolean');
	console.log(typeof Boolean(1) === 'boolean');
	console.log(typeof Boolean(0) === 'boolean');
	console.log(typeof !!(1) === 'boolean');
	console.log();
}

function testSymbols(){
	console.log(typeof Symbol() === 'symbol');
	console.log(typeof Symbol('phuocnguyen') === 'symbol');
	console.log(typeof Symbol.iterator === 'symbol');
	console.log();
}

function testObject(){
	console.log(typeof(new String('phuocnguyen')));
	console.log(typeof(new Number('11')));
	console.log(typeof(new Boolean(true)));
	console.log(typeof(new Date()));
	console.log(typeof {number: 11} === 'object');
	console.log(typeof [1, 2, 3] === 'object');
	console.log(typeof /regexExpression/ === 'object');
	console.log();
}

function testFunction(){
	console.log(typeof function(){} === 'function');
	console.log(typeof class Person{} === 'function');
	console.log(typeof Math.sin === 'function');
	console.log();

}

function testUndefined(){
	console.log(typeof undefined  === 'undefined');
	console.log(typeof aaa === 'undefined');
	console.log();


}
testNumber();
testString();
testSymbols();
testBoolean();
testFunction();
testUndefined();
testObject();

