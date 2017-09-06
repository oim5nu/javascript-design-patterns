var AbstractBicycle = require("./abstractBicycle").AbstractBicycle;
var utils = require("../../utils");

/* Concrete Class Speedster */
var AcmeSpeedster = (function() {
  function AcmeSpeedster() {
    this.model = "AcmeSpeedster";
  };
  utils.derive(AcmeSpeedster, AbstractBicycle);
  AcmeSpeedster.prototype.assemble = function() {
    console.log("AcmeSpeedster is being assembled.");
  }
  AcmeSpeedster.prototype.repair = function() {
    console.log("AcmeSpeedster is being repaired.");
  };

  AcmeSpeedster.prototype.ride = function() {
    console.log("AcmeSpeedster is being ridden.");
  };

  AcmeSpeedster.prototype.wash = function() {
    console.log("AcmeSpeedster is being washed.");
  };
  return AcmeSpeedster;
}());


/* Concrete Class AcmeLowrider */
var AcmeLowrider = (function() {
  function AcmeLowrider() {
    this.model = "AcmeLowrider";
  };
  utils.derive(AcmeLowrider, AbstractBicycle);
  AcmeLowrider.prototype.assemble = function() {
    console.log("AcmeLowrider is being assembled.");
  };

  AcmeLowrider.prototype.repair = function() {
    console.log("AcmeLowrider is being repaired.");
  };

  AcmeLowrider.prototype.ride = function() {
    console.log("AcmeLowrider is being ridden.");
  };

  AcmeLowrider.prototype.wash = function() {
    console.log("AcmeLowrider is being washed.");
  };
  return AcmeLowrider;
}());


/* Concrete Class AcmeFlatlander */
var AcmeFlatlander = (function() {
  function AcmeFlatlander() {
    this.model = "AcmeFlatlander";
  };
  utils.derive(AcmeFlatlander, AbstractBicycle);
  AcmeFlatlander.prototype.assemble = function() {
    console.log("AcmeFlatlander is being assembled.");
  };

  AcmeFlatlander.prototype.repair = function() {
    console.log("AcmeFlatlander is being repaired.");
  };

  AcmeFlatlander.prototype.ride = function() {
    console.log("AcmeFlatlander is being ridden.");
  };

  AcmeFlatlander.prototype.wash = function() {
    console.log("AcmeFlatlander is being washed.");
  };
  return AcmeFlatlander;
}());

/* Concrete Class AcmeComfortCruiser */
var AcmeComfortCruiser = (function() {
  function AcmeComfortCruiser() {
    this.model = "AcmeComfortCruiser";
  };
  utils.derive(AcmeComfortCruiser, AbstractBicycle);
  AcmeComfortCruiser.prototype.assemble = function() {
    console.log("AcmeComfortCruiser is being assembled.");
  };

  AcmeComfortCruiser.prototype.repair = function() {
    console.log("AcmeComfortCruiser is being repaired.");
  };

  AcmeComfortCruiser.prototype.ride = function() {
    console.log("AcmeComfortCruiser is being ridden.");
  };

  AcmeComfortCruiser.prototype.wash = function() {
    console.log("AcmeComfortCruiser is being washed.");
  };
  return AcmeComfortCruiser;
}());

/* Concrete Class Speedster */
var GeneralSpeedster = (function() {
  function GeneralSpeedster() {
    this.model = "GeneralSpeedster";
  };
  utils.derive(GeneralSpeedster, AbstractBicycle);
  GeneralSpeedster.prototype.assemble = function() {
    console.log("GeneralSpeedster is being assembled.");
  }
  GeneralSpeedster.prototype.repair = function() {
    console.log("GeneralSpeedster is being repaired.");
  };

  GeneralSpeedster.prototype.ride = function() {
    console.log("GeneralSpeedster is being ridden.");
  };

  GeneralSpeedster.prototype.wash = function() {
    console.log("GeneralSpeedster is being washed.");
  };
  return GeneralSpeedster;
}());


/* Concrete Class GeneralLowrider */
var GeneralLowrider = (function() {
  function GeneralLowrider() {
    this.model = "GeneralLowrider";
  };
  utils.derive(GeneralLowrider, AbstractBicycle);
  GeneralLowrider.prototype.assemble = function() {
    console.log("GeneralLowrider is being assembled.");
  };

  GeneralLowrider.prototype.repair = function() {
    console.log("GeneralLowrider is being repaired.");
  };

  GeneralLowrider.prototype.ride = function() {
    console.log("GeneralLowrider is being ridden.");
  };

  GeneralLowrider.prototype.wash = function() {
    console.log("GeneralLowrider is being washed.");
  };
  return GeneralLowrider;
}());


/* Concrete Class GeneralFlatlander */
var GeneralFlatlander = (function() {
  function GeneralFlatlander() {
    this.model = "GeneralFlatlander";
  };
  utils.derive(GeneralFlatlander, AbstractBicycle);
  GeneralFlatlander.prototype.assemble = function() {
    console.log("GeneralFlatlander is being assembled.");
  };

  GeneralFlatlander.prototype.repair = function() {
    console.log("GeneralFlatlander is being repaired.");
  };

  GeneralFlatlander.prototype.ride = function() {
    console.log("GeneralFlatlander is being ridden.");
  };

  GeneralFlatlander.prototype.wash = function() {
    console.log("GeneralFlatlander is being washed.");
  };
  return GeneralFlatlander;
}());

/* Concrete Class GeneralComfortCruiser */
var GeneralComfortCruiser = (function() {
  function GeneralComfortCruiser() {
    this.model = "GeneralComfortCruiser";
  };
  utils.derive(GeneralComfortCruiser, AbstractBicycle);
  GeneralComfortCruiser.prototype.assemble = function() {
    console.log("GeneralComfortCruiser is being assembled.");
  };

  GeneralComfortCruiser.prototype.repair = function() {
    console.log("GeneralComfortCruiser is being repaired.");
  };

  GeneralComfortCruiser.prototype.ride = function() {
    console.log("GeneralComfortCruiser is being ridden.");
  };

  GeneralComfortCruiser.prototype.wash = function() {
    console.log("GeneralComfortCruiser is being washed.");
  };
  return GeneralComfortCruiser;
}());

exports.AcmeSpeedster = AcmeSpeedster;
exports.AcmeLowrider = AcmeLowrider;
exports.AcmeFlatlander = AcmeFlatlander;
exports.AcmeComfortCruiser = AcmeComfortCruiser;
exports.GeneralSpeedster = GeneralSpeedster;
exports.GeneralLowrider = GeneralLowrider;
exports.GeneralFlatlander = GeneralFlatlander;
exports.GeneralComfortCruiser = GeneralComfortCruiser;
