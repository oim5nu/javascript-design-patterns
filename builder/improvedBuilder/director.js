var BenzBuilder = require("./carBuilder").BenzBuilder;
var BMWBuilder = require("./carBuilder").BMWBuilder;

var Director = (function() {
  var _sequence = [];
  var _benzBuilder = new BenzBuilder();
  var _bmwBuilder = new BMWBuilder();

  function Director() {};

  Director.prototype.getABenzModel = function() {
    _sequence = ["start", "stop"];
    _benzBuilder.setSequence(_sequence);
    return _benzBuilder.getCarModel();
  };
  Director.prototype.getBBenzModel = function() {
    _sequence = ["engineBoom", "start", "stop"];
    _benzBuilder.setSequence(_sequence);
    return _benzBuilder.getCarModel();
  };
  Director.prototype.getCBMWModel = function() {
    _sequence = ["alarm", "start", "stop"];
    _bmwBuilder.setSequence(_sequence);
    return _bmwBuilder.getCarModel();
  };
  Director.prototype.getDBMWModel = function() {
    _sequence = ["start"];
    _bmwBuilder.setSequence(_sequence);
    return _bmwBuilder.getCarModel();
  };
  return Director;
}());

exports.Director = Director;