/* ComfortCruiser class. */
var ComfortCruiser = function() {};

ComfortCruiser.prototype = {
  assemble: function() {
    console.log("ComfortCruiser is being assembled.");
  },
  wash: function() {
    console.log("ComfortCruiser is being washed.");
  },
  ride: function() {
    console.log("ComfortCruiser is being ridden.");
  },
  repair: function() {
    console.log("ComfortCruiser is being repaired.");
  }
};

/* Lowrider Class */
var Lowrider = function() {};

Lowrider.prototype = {
  assemble: function() {
    console.log("Lowrider is being assembled.");
  },
  wash: function() {
    console.log("Lowrider is being washed.");
  },
  ride: function() {
    console.log("Lowrider is being ridden.");
  },
  repair: function() {
    console.log("Lowrider is being repaired.");
  }
};

/* Speedster class. */
var Speedster = function() {};

Speedster.prototype = {
  assemble: function() {
    console.log("Speedster is being assembled.");
  },
  wash: function() {
    console.log("Speedster is being washed.");
  },
  ride: function() {
    console.log("Speedster is being ridden.");
  },
  repair: function() {
    console.log("Speedster is being repaired.");
  }
};

exports.Lowrider = Lowrider;
exports.ComfortCruiser = ComfortCruiser;
exports.Speedster = Speedster;
