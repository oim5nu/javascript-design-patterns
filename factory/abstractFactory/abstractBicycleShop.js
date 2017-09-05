var AbstractBicycleFactory = require("./abstractBicycleShopFactory").AbstractBicycleFactory;

/* AbstractBicycleShop class */
var AbstractBicycleShop = function() {};

AbstractBicycleShop.prototype = {
  sellBicycle: function(model) { // shared behaviour
    var bicycle = this.createBicycle(model);

    bicycle.assemble();
    bicycle.wash();

    return bicycle;
  },
  createBicycle: function(model) {
    throw new Error("Unsupported operation on an abstract class.");
  }
};

exports.AbstractBicycleShop = AbstractBicycleShop;
