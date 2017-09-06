
var AbstractBicycle = (function() {
  function AbstractBicycle() {};
  AbstractBicycle.prototype = {
    assemble: function() {
      throw new Error("Unsupported operation on an abstract class.");
    },
    wash: function() {
      throw new Error("Unsupported operation on an abstract class.");
    },
    ride: function() {
      throw new Error("Unsupported operation on an abstract class.");
    },
    repair: function() {
      throw new Error("Unsupported operation on an abstract class.");
    }
  };
  return AbstractBicycle;
}());


exports.AbstractBicycle = AbstractBicycle;