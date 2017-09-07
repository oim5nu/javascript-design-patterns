/*
  Builder Pattern cares more about the sequence of methods executing, than creation which Factory Pattern
  mainly focuses on.
 */
var utils = require("../../utils");

var CarModel = (function() {
  var _sequence = [];
  function CarModel() {};
  CarModel.prototype.start = function() {
    throw new Error("Unsupported operation on an abstract class method.");
  };
  CarModel.prototype.stop = function() {
    throw new Error("Unsupported operation on an abstract class method.");
  };
  CarModel.prototype.alarm = function() {
    throw new Error("Unsupported operation on an abstract class method.");
  };
  CarModel.prototype.engineBoom = function() {
    throw new Error("Unsupported operation on an abstract class method.")
  };
  CarModel.prototype.setSequence = function(sequence) {
    _sequence = sequence || [];
  };
  CarModel.prototype.run = function() {
    var thisObj = this;
    for (var idx in _sequence) {
      thisObj[_sequence[idx]]();
    }
  };

  return CarModel;
}());

var BenzModel = (function() {
  function BenzModel() {};
  utils.derive(BenzModel, CarModel);
  BenzModel.prototype.alarm = function() {
    console.log("Benz is alarming....");
  };
  BenzModel.prototype.engineBoom = function() {
    console.log("Benz's engine is booming...");
  };
  BenzModel.prototype.start = function() {
    console.log("Benz is starting...");
  };
  BenzModel.prototype.stop = function() {
    console.log("Benz is stopping.")
  };
  return BenzModel;
}());

var BMWModel = (function() {
  function BMWModel() {};
  utils.derive(BMWModel, CarModel);
  BMWModel.prototype.alarm = function() {
    console.log("BMW is alarming....");
  };
  BMWModel.prototype.engineBoom = function() {
    console.log("BMW's engine is booming...");
  };
  BMWModel.prototype.start = function() {
    console.log("BMW is starting...");
  };
  BMWModel.prototype.stop = function() {
    console.log("BMW is stopping.")
  };
  return BMWModel;
}());

var benz = new BenzModel();
var benzSeq = ["engineBoom", "start", "stop"];
benz.setSequence(benzSeq);
benz.run();

var bmw = new BMWModel();
var bmwSeq = ["alarm", "start", "engineBoom"];
bmw.setSequence(bmwSeq);
bmw.run();


