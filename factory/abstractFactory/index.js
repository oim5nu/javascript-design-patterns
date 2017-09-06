
var AcmeBicycleShop = require("./concreteBicycleShop").AcmeBicycleShop;

var alecsCruisers = new AcmeBicycleShop();
var myNewBike = alecsCruisers.sellBicycle("The Lowrider");

myNewBike.ride();
myNewBike.repair();

