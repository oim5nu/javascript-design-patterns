/* BicycleShop class (abstract) */

var AbstractBicycleShop = function() {};
AbstractBicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle = this.createBicycle(model);

    bicycle.assemble();
    bicycle.wash();

    return bicycle;
  }

};

exports.AbstractBicycleShop = AbstractBicycleShop;