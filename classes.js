
//Creating Classes in JavaScript

var Vehicle = function(){
	var sound = "Vrrroooom!";

	this.drive = function(){
		return sound;
	};
}

var Car = function(){
	this.passengers = [1,2];
	this.getPassengers = function(){
		return this.passengers;
	}
}
Car.prototype = new Vehicle();

var Bike = function(){}
Bike.prototype = new Vehicle();

var Truck = function(){
	this.cargo = [];
}
Truck.prototype = new Vehicle();

var car = new Car();
car.drive();
car.getPassengers();