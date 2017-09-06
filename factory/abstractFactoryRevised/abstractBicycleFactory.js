
var AbstractBicycleFactory = (function() {
  function AbstractBicycleFactory () {};
  AbstractBicycleFactory.prototype = {
    createSpeedster: function() {
      throw new Error("Unsupported operation on an abstract class.");
    },
    createFlatlander: function() {
      throw new Error("Unsupported operation on an abstract class.");
    },
    createLowrider: function() {
      throw new Error("Unsupported operation on an abstract class.");
    },
    createComfortCruiser: function() {
      throw new Error("Unsupported operation on an abstract class.");
    }
  };
  return AbstractBicycleFactory;
}());

exports.AbstractBicycleFactory  = AbstractBicycleFactory;