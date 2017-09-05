
var AbstractBicycleShopFactory = function() {};
AbstractBicycleShopFactory.prototype = {
  createAcmeShop: function() {
    throw new Error("Unsupported operation on an abstract class.");
  },
  createGeneralShop: function() {
    throw new Error("Unsupported operation on an abstract class.");
  }
};

exports.AbstractBicycleShopFactory = AbstractBicycleShopFactory;