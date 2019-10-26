class Stack{
	constructor(){
		this.items = [];
	}

	push(element){
		this.items.push(element);
	}

	peek(){
		return this.items[this.items.length - 1];
	}

	pop(){
		return this.items.pop();
	}

	size(){
		return this.items.length;
	}

	isEmpty(){
		return this.items.length === 0;
	}

	clear(){
		this.items = [];
	}

	toArray(){
		return this.items;
	}

	toString(){
		return this.items.toString();
	}

	toTestType(){
		return typeof this.items === 'object';
	}

}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(67);
console.log(stack.toString());
console.log(stack.peek());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.size());
console.log(typeof stack);
console.log(stack.toTestType());