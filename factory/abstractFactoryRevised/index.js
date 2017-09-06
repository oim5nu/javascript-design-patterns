
/*
 (Y) Series     |
                |
 Acme           |
                |
 General        |
                |
                |_______________________________________________________________
                  Speedster  Lowrider  Flatlander  ComfortCruiser   X (products)

 AbstractCreator {  // Factory has X number of createXShop methods
   createSpeedster() {};
   createLowrider() {};
   createFlatlander() {};
   createComfortCruiser() {};
 }

 then Y number of concrete classes YXCreator should be created, like,
 AcmeCreator extends AbstractCreator {
   createAcmeComfortCruiser() { return new AcmeComfortCruiser(); }
   createAcmeFlatlander() { return new AcmeFlatlander(); }
   createAcmeLowrider() { return new AcmeLowrider(); }
   createAcmeSpeedster() { return new AcmeSpeedster(); }
 }

 GeneralCreator extends AbstractCreator {
    ...
 }

 Reference:
 https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
 https://github.com/Apress/pro-javascript-design-patterns/blob/master/Source%20Code/Chapter07/7.02%20-%20The%20factory%20pattern.js
 https://github.com/stimms/JavaScriptPatterns/blob/master/Chapter%203/AbstractFactory.js
 */

var BicycleShop = (function() {
  function bicycleShop() {};
  bicycleShop.prototype.sellBicycle = function(bicycle) {
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  };
  return bicycleShop;
}());

var AcmeBicycleFactory = require("./concreteBicycleFactory").AcmeBicycleFactory;
var GeneralBicycleFactory = require("./concreteBicycleFactory").GeneralBicycleFactory;

var acmeBicycleFactory = new AcmeBicycleFactory();
var acmeLowrider = acmeBicycleFactory.createLowrider();

var generalBicycleFactory = new GeneralBicycleFactory();
var generalComfortCruiser = generalBicycleFactory.createComfortCruiser();

var acmeBicycleShop = new BicycleShop();
var generalBicycleShop = new BicycleShop();
var myNewBike = acmeBicycleShop.sellBicycle(acmeLowrider);
var myAnotherNewBike = generalBicycleShop.sellBicycle(generalComfortCruiser);

myNewBike.ride();
myNewBike.repair();

myAnotherNewBike.wash();
myAnotherNewBike.repair();

