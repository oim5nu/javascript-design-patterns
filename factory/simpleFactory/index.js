var BicycleShop = require("./bicycleShop").BicycleShop;

var californiaCruisers = new BicycleShop();
var myNewBike = californiaCruisers.sellBicycle("The Lowrider");

myNewBike.ride();
myNewBike.repair();