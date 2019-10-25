/*
The static keyword defines a static method for a class
Static methods are called without instantiating their class and cannot be called through a class instance.
Static methods are often used to create utility functions for an application.

*/

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	static distance(a, b){
		const dx = a.x  - b.x;
		const dy = a.y - b.y;
		return Math.hypot(dx, dy);
	}
}

let point1 = new Point(11,11);
let point2 = new Point(10, 10);

console.log(Point.distance(point1, point2));