
class Queue{
	constructor(){
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	enqueue(element){
		this.items[this.count] = element;
		this.count++;
	}

	dequeue(){
		if(this.isEmpty()){
			return undefined;
		}

		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return result;
	}

	peek(){ // front of queue
		if(this.isEmpty()){
			return undefined;
		}

		return this.items[this.lowestCount];
	}

	clear(){
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}


	isEmpty(){
		return this.size() === 0;
	}

	size(){
		return this.count - this.lowestCount;
	}

	toString(){
		if(this.isEmpty()){
			return '';
		}

		let objectString = `${this.items[this.lowestCount]}`;
		for(let i = this.lowestCount + 1; i < this.count; i++){
			objectString = `${objectString}, ${this.items[i]}`;
		}
		return objectString;
	}
}

let queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(16);
queue.enqueue(18);
console.log(queue.toString());
console.log(queue.size());
console.log(queue.peek()); // 11
console.log(queue.isEmpty());
console.log(queue.dequeue()); // 11
console.log(queue.toString());
queue.clear();
console.log(queue.size());
console.log(queue.isEmpty());



