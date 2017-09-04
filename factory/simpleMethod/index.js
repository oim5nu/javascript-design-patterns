var BicycleShop = require("./bicycleShop").BicycleShop;

var californiaCruisers = new BicycleShop();
var myNewBike = californiaCruisers.sellBicycle("The Speedster");

myNewBike.ride();
myNewBike.repair();