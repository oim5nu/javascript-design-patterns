var utils = require("../../utils");
var BenzModel = require("./carModel").BenzModel;
var BMWModel = require("./carModel").BMWModel;

var CarBuilder = (function() {
  function CarBuilder() {};
  CarBuilder.prototype.setSequence = function(sequence) {
    throw new Error("Unsupported operation to call an abstract class method.");
  };
  CarBuilder.prototype.getCarModel = function() {
    throw new Error("Unsupported operation to call an abstract class method.");
  };
  return CarBuilder;
}());

var BenzBuilder = (function() {
  var _benz = new BenzModel();
  utils.derive(BenzBuilder, CarBuilder);

  function BenzBuilder() {};
  BenzBuilder.prototype.getCarModel = function() {
    return _benz;
  };
  BenzBuilder.prototype.setSequence = function(sequence) {
    _benz.setSequence(sequence);
  };

  return BenzBuilder;
}());

var BMWBuilder = (function() {
  var _bmw = new BMWModel();
  utils.derive(BMWBuilder, CarBuilder);

  function BMWBuilder() {};
  BMWBuilder.prototype.getCarModel = function() {
    return _bmw;
  };
  BMWBuilder.prototype.setSequence = function(sequence) {
    _bmw.setSequence(sequence);
  };

  return BMWBuilder;
}());

exports.BMWBuilder = BMWBuilder;
exports.BenzBuilder = BenzBuilder;