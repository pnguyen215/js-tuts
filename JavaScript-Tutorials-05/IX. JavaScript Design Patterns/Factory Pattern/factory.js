function Car(options){
	this.door = options.door || 11;
	this.state = options.state || 'brand new';
	this.color = options.color || 'red';
}

function Truck(options){
	this.state = options.state || 'used';
	this.wheelSize = options.wheelSize || 'large';
	this.color = options.color || 'blue';
}


function vehicle(){}

vehicle.prototype.vehicleClass = Car;

vehicle.prototype.createVehicle = function(options){
	switch(options.vehicleType){
		case 'car':
		this.vehicleClass = Car;
		break;
		case 'truck':
		this.vehicleClass = Truck;
		break;
	}
	return new this.vehicleClass(options);
}


let myCar = new vehicle();
let car = myCar.createVehicle({
	vehicleType: 'car',
	color: 'red',
	door: 6
});

let myTruck = new vehicle();
let truck = myTruck.createVehicle({
	vehicleType: 'truck',
	state: 'used',
	color: 'black',
	wheelSize: 'medium'
});


console.log(car instanceof Car);
console.log(car);
console.log(truck);
