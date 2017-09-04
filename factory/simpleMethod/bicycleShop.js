var Interface = require("../../utils").Interface;
var Speedster = require("./bicycleModel").Speedster;
var Lowrider = require("./bicycleModel").Lowrider;
var ComfortCruiser = require("./bicycleModel").ComfortCruiser;
var Bicycle = require("./bicycleInterface").Bicycle;

/* BicycleShop class */
var BicycleShop = function() {};

BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle;

    switch(model) {
      case "The Speedster":
        bicycle = new Speedster();
        break;
      case "The Lowrider":
        bicycle = new Lowrider();
        break;
      case "The Comfort Cruiser":
      default:
        bicycle = new ComfortCruiser();
    }
    Interface.ensureImplements(bicycle, Bicycle);

    bicycle.assemble();
    bicycle.wash();

    return bicycle;
  }
};

exports.BicycleShop = BicycleShop;