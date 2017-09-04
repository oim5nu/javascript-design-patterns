var BicycleFactory = require("./bicycleFactory").BicycleFactory;

/* BicycleShop class */
var BicycleShop = function() {};

BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle = BicycleFactory.createBicycle(model);

/*
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
*/
    bicycle.assemble();
    bicycle.wash();

    return bicycle;
  }
};

exports.BicycleShop = BicycleShop;