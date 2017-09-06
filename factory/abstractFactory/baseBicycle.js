var AbstractBicycle = require("./abstractBicycle").AbstractBicycle;
var utils = require("../../utils");

/* Concrete Class Speedster */
var Speedster = (function() {
  function Speedster() {
    this.model = "Speedster";
  };
  utils.extend(Speedster, AbstractBicycle);
  Speedster.prototype.assemble = function() {
    console.log("Speedster is being assembled.");
  }
  Speedster.prototype.repair = function() {
    console.log("Speedster is being repaired.");
  };

  Speedster.prototype.ride = function() {
    console.log("Speedster is being ridden.");
  };

  Speedster.prototype.wash = function() {
    console.log("Speedster is being washed.");
  };
  return Speedster;
}());


/* Concrete Class Lowrider */
var Lowrider = (function() {
  function Lowrider() {
    this.model = "Lowrider";
  };
  utils.extend(Lowrider, AbstractBicycle);
  Lowrider.prototype.assemble = function() {
    console.log("Lowrider is being assembled.");
  };

  Lowrider.prototype.repair = function() {
    console.log("Lowrider is being repaired.");
  };

  Lowrider.prototype.ride = function() {
    console.log("Lowrider is being ridden.");
  };

  Lowrider.prototype.wash = function() {
    console.log("Lowrider is being washed.");
  };
  return Lowrider;
}());


/* Concrete Class Flatlander */
var Flatlander = (function() {
  function Flatlander() {
    this.model = "Flatlander";
  };
  utils.extend(Flatlander, AbstractBicycle);
  Flatlander.prototype.assemble = function() {
    console.log("Flatlander is being assembled.");
  };

  Flatlander.prototype.repair = function() {
    console.log("Flatlander is being repaired.");
  };

  Flatlander.prototype.ride = function() {
    console.log("Flatlander is being ridden.");
  };

  Flatlander.prototype.wash = function() {
    console.log("Flatlander is being washed.");
  };
  return Flatlander;
}());

/* Concrete Class ComfortCruiser */
var ComfortCruiser = (function() {
  function ComfortCruiser() {
    this.model = "ComfortCruiser";
  };
  utils.extend(ComfortCruiser, AbstractBicycle);
  ComfortCruiser.prototype.assemble = function() {
    console.log("ComfortCruiser is being assembled.");
  };

  ComfortCruiser.prototype.repair = function() {
    console.log("ComfortCruiser is being repaired.");
  };

  ComfortCruiser.prototype.ride = function() {
    console.log("ComfortCruiser is being ridden.");
  };

  ComfortCruiser.prototype.wash = function() {
    console.log("ComfortCruiser is being washed.");
  };
  return ComfortCruiser;
}());

exports.Speedster = Speedster;
exports.Lowrider = Lowrider;
exports.Flatlander = Flatlander;
exports.ComfortCruiser = ComfortCruiser;
