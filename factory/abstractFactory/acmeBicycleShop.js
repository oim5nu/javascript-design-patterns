var utils = require("../../utils");
var AbstractBicycleShop = require("./abstractBicycleShop").AbstractBicycleShop;
var Bicycle = require("./bicycleInterface").Bicycle;

var AcmeBicycleShop = function() {};
utils.extend(AcmeBicycleShop, AbstractBicycleShop);
AcmeBicycleShop.prototype.createBicycle = function(model) {
  var bicycle;

  switch(model) {
    case "The Speedster":
      bicycle = new AcmeSpeedster();
      break;
    case "The Lowrider":
      bicycle = new AcmeLowrider();
      break;
    case "The Comfort Cruiser":
    default:
      bicycle = new AcmeComfortCruiser();
  }

  Interface.ensureImplements(bicycle, Bicycle);
};

exports.AcmeBicycleShop = AcmeBicycleShop;
