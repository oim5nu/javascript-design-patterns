var AbstractBicycleFactory = require("./abstractBicycleFactory").AbstractBicycleFactory;
var utils = require("../../utils");
var AcmeComfortCruiser = require("./concreteBicycle").AcmeComfortCruiser;
var AcmeFlatlander = require("./concreteBicycle").AcmeFlatlander;
var AcmeLowrider = require("./concreteBicycle").AcmeLowrider;
var AcmeSpeedster = require("./concreteBicycle").AcmeSpeedster;
var GeneralComfortCruiser = require("./concreteBicycle").GeneralComfortCruiser;
var GeneralFlatlander = require("./concreteBicycle").GeneralFlatlander;
var GeneralLowrider = require("./concreteBicycle").GeneralLowrider;
var GeneralSpeedster = require("./concreteBicycle").GeneralSpeedster;

/* AcmeBicycleFactory Class */
var AcmeBicycleFactory = (function() {
  function AcmeBicycleFactory() {};
  utils.extend(AcmeBicycleFactory, AbstractBicycleFactory);

  AcmeBicycleFactory.prototype.createSpeedster = function() {
    var acmeSpeedster = new AcmeSpeedster();
    return acmeSpeedster;
  };

  AcmeBicycleFactory.prototype.createLowrider = function() {
    var acmeLowrider = new AcmeLowrider();
    return acmeLowrider;
  };

  AcmeBicycleFactory.prototype.createFlatlander = function() {
    var acmeFlatlander = new AcmeFlatlander();
    return acmeFlatlander;
  };

  AcmeBicycleFactory.prototype.createComfortCruiser = function() {
    var acmeComfortCruiser = new AcmeComfortCruiser();
    return acmeComfortCruiser;
  };
  return AcmeBicycleFactory;
}());

/* GeneralBicycleFactory Class */
var GeneralBicycleFactory = (function() {
  function GeneralBicycleFactory() {};
  utils.extend(GeneralBicycleFactory, AbstractBicycleFactory);

  GeneralBicycleFactory.prototype.createSpeedster = function() {
    var generalSpeedster = new GeneralSpeedster();
    return generalSpeedster;
  };

  GeneralBicycleFactory.prototype.createLowrider = function() {
    var generalLowrider = new GeneralLowrider();
    return generalLowrider;
  };

  GeneralBicycleFactory.prototype.createFlatlander = function() {
    var generalFlatlander = new GeneralFlatlander();
    return generalFlatlander;
  };

  GeneralBicycleFactory.prototype.createComfortCruiser = function() {
    var generalComfortCruiser = new GeneralComfortCruiser();
    return generalComfortCruiser;
  };
  return GeneralBicycleFactory;
}());

exports.AcmeBicycleFactory = AcmeBicycleFactory;
exports.GeneralBicycleFactory = GeneralBicycleFactory;


