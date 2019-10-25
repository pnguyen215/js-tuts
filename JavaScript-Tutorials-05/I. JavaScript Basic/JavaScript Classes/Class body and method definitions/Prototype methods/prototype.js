class Square{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get area(){
		return this.calculate();
	}

	calculate(){
		return this.height*this.width;
	}
}

let square1 = new Square(20, 20);
console.log(square1.area);// 400