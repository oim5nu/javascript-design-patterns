var utils = require("../../utils");
var AbstractBicycleShop = require("./abstractBicycleShop").AbstractBicycleShop;

/* AcmeBicycleShop class. */
var AcmeBicycleShop = function() {};
utils.extend(AcmeBicycleShop, AbstractBicycleShop);
AcmeBicycleShop.prototype.createBicycle =