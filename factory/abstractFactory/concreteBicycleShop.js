var utils = require("../../utils");
var Interface = require("../../utils").Interface;
var bicycleInterface = require("./bicycleInterface").bicycleInterface;
var AbstractBicycleShop = require("./abstractBicycleShop").AbstractBicycleShop;
var AcmeComfortCruiser = require("./concreteBicycle").AcmeComfortCruiser;
var AcmeFlatlander = require("./concreteBicycle").AcmeFlatlander;
var AcmeLowrider = require("./concreteBicycle").AcmeLowrider;
var AcmeSpeedster = require("./concreteBicycle").AcmeSpeedster;
var GeneralComfortCruiser = require("./concreteBicycle").GeneralComfortCruiser;
var GeneralFlatlander = require("./concreteBicycle").GeneralFlatlander;
var GeneralLowrider = require("./concreteBicycle").GeneralLowrider;
var GeneralSpeedster = require("./concreteBicycle").GeneralSpeedster;

/* AcmeBicycleShop class. */
var AcmeBicycleShop = (function() {
  function AcmeBicycleShop() {
    this.name = "ACME Bicycle Shop";
  };
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
      case "The Flatlander":
        bicycle = new AcmeFlatlander();
        break;
      case "The Comfort Cruiser":
      default:
        bicycle = new AcmeComfortCruiser();
    }
    Interface.ensureImplements(bicycle, bicycleInterface);
    return bicycle;
  };
  return AcmeBicycleShop;
}());

/* GeneralBicycleShop class. */
var GeneralBicycleShop = (function() {
  function GeneralBicycleShop() {
    this.name = "ACME Bicycle Shop";
  };
  utils.extend(GeneralBicycleShop, AbstractBicycleShop);
  GeneralBicycleShop.prototype.createBicycle = function(model) {
    var bicycle;

    switch(model) {
      case "The Speedster":
        bicycle = new GeneralSpeedster();
        break;
      case "The Lowrider":
        bicycle = new GeneralLowrider();
        break;
      case "The Flatlander":
        bicycle = new GeneralFlatlander();
        break;
      case "The Comfort Cruiser":
      default:
        bicycle = new GeneralComfortCruiser();
    }
    Interface.ensureImplements(bicycle, bicycleInterface);
    return bicycle;
  };
  return GeneralBicycleShop;
}());

exports.AcmeBicycleShop = AcmeBicycleShop;
exports.GeneralBicycleShop = GeneralBicycleShop;
