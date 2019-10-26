class Stack{
	constructor(){
		this.count = 0;
		this.items = {};
	}

	push(element){
		this.items[this.count] = element;
		this.count++;
	}

	pop(){
		if(this.isEmpty()){
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}


	peek(){
		if(this.isEmpty()){
			return undefined;
		}

		return this.items[this.count - 1];
	}

	isEmpty(){
		return this.count === 0;
	}

	clear(){
		this.items = {};
		this.count = 0;
	}

	size(){
		return this.count;
	}

	toString(){
		if(this.isEmpty()){
			return '';
		}
		let objectString = `${this.items[0]}`;
		for(let i = 1; i < this.count; i++){
			objectString = `${objectString}, ${this.items[i]}`;
		}
		return objectString;
	}

	toTestType(){
		return typeof this.items === 'object';
	}
}

// using Stack
let stack = new Stack();
stack.push(11);
stack.push(12);
console.log(stack.size());
console.log(stack.toString());
stack.pop();
console.log(stack.toString());
stack.push(24);
console.log(stack.toString());
stack.push(30);
stack.push(25);
console.log(stack.toString());
console.log(stack.peek());
console.log(typeof stack);
console.log(stack.toTestType());