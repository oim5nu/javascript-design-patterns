var AbstractBicycleFactory = require("./abstractBicycleShopFactory").AbstractBicycleFactory;
var utils = require("../../utils");
var bicycleModels = require("./concreteBicycle");

/* AcmeBicycleFactory Class */
var AcmeBicycleFactory = function() {};
utils.extend(AcmeBicycleFactory, AbstractBicycleFactory);
AcmeBicycleFactory.prototype.createSpeedster = function() {
  var AcmeSpeedster = function() {};
  utils.extend(AcmeSpeedster, bicycleModels.Speedster);
  AcmeSpeedster.prototype.assemble = function() {
    console.log("Acme Speedster is being assembled.");
  };
  AcmeSpeedster.prototype.repair = function() {
    console.log("Acme Speedster is being repaired.");
  };
  AcmeSpeedster.prototype.wash = function() {
    console.log("Acme Speedster is being washed.");
  };
  AcmeSpeedster.prototype.ridden = function() {
    console.log("Acme Speedster is being ridden");
  };

  var acmeSpeedster = new AcmeSpeedster();
  return acmeSpeedster;
};

AcmeBicycleFactory.prototype.createLowrider = function() {
  return new bicycleModels.Lowrider();
  var AcmeLowrider = function() {};
  utils.extend(AcmeLowrider, bicycleModels.Lowrider);
  AcmeLowrider.prototype.assemble = function() {
    console.log("Acme Lowrider is being assembled.");
  };
  AcmeLowrider.prototype.repair = function() {
    console.log("Acme Lowrider is being repaired.");
  };
  AcmeLowrider.prototype.wash = function() {
    console.log("Acme Lowrider is being washed.");
  };
  AcmeLowrider.prototype.ridden = function() {
    console.log("Acme Lowrider is being ridden");
  };

  var acmeLowrider = new AcmeLowrider();
  return acmeLowrider;
};

AcmeBicycleFactory.prototype.createFlatlander = function() {
  return new bicycleModels.Flatlander();
  var AcmeFlatlander = function() {};
  utils.extend(AcmeFlatlander, bicycleModels.Flatlander);
  AcmeFlatlander.prototype.assemble = function() {
    console.log("Acme Flatlander is being assembled.");
  };
  AcmeFlatlander.prototype.repair = function() {
    console.log("Acme Flatlander is being repaired.");
  };
  AcmeFlatlander.prototype.wash = function() {
    console.log("Acme Flatlander is being washed.");
  };
  AcmeFlatlander.prototype.ridden = function() {
    console.log("Acme Flatlander is being ridden");
  };

  var acmeFlatlander = new AcmeFlatlander();
  return acmeFlatlander;
};

AcmeBicycleFactory.prototype.createComfortCruiser = function() {
  var AcmeComfortCruiser = function() {};
  utils.extend(AcmeComfortCruiser, bicycleModels.Speedster);
  AcmeComfortCruiser.prototype.assemble = function() {
    console.log("Acme ComfortCruiser is being assembled.");
  };
  AcmeComfortCruiser.prototype.repair = function() {
    console.log("Acme ComfortCruiser is being repaired.");
  };
  AcmeComfortCruiser.prototype.wash = function() {
    console.log("Acme ComfortCruiser is being washed.");
  };
  AcmeComfortCruiser.prototype.ridden = function() {
    console.log("Acme ComfortCruiser is being ridden");
  };

  var acmeComfortCruiser = new AcmeComfortCruiser();
  return acmeComfortCruiser;
};


/* GeneralBicycleFactory Class */
var GeneralBicycleFactory = function() {};
utils.extend(GeneralBicycleFactory, AbstractBicycleFactory);
GeneralBicycleFactory.prototype.createSpeedster = function() {
  var GeneralSpeedster = function() {};
  utils.extend(GeneralSpeedster, bicycleModels.Speedster);
  GeneralSpeedster.prototype.assemble = function() {
    console.log("General Speedster is being assembled.");
  };
  GeneralSpeedster.prototype.repair = function() {
    console.log("General Speedster is being repaired.");
  };
  GeneralSpeedster.prototype.wash = function() {
    console.log("General Speedster is being washed.");
  };
  GeneralSpeedster.prototype.ridden = function() {
    console.log("General Speedster is being ridden");
  };

  var generalSpeedster = new GeneralSpeedster();
  return generalSpeedster;
};

GeneralBicycleFactory.prototype.createLowrider = function() {
  return new bicycleModels.Lowrider();
  var GeneralLowrider = function() {};
  utils.extend(GeneralLowrider, bicycleModels.Lowrider);
  GeneralLowrider.prototype.assemble = function() {
    console.log("General Lowrider is being assembled.");
  };
  GeneralLowrider.prototype.repair = function() {
    console.log("General Lowrider is being repaired.");
  };
  GeneralLowrider.prototype.wash = function() {
    console.log("General Lowrider is being washed.");
  };
  GeneralLowrider.prototype.ridden = function() {
    console.log("General Lowrider is being ridden");
  };

  var generalLowrider = new GeneralLowrider();
  return generalLowrider;
};

GeneralBicycleFactory.prototype.createFlatlander = function() {
  return new bicycleModels.Flatlander();
  var GeneralFlatlander = function() {};
  utils.extend(GeneralFlatlander, bicycleModels.Flatlander);
  GeneralFlatlander.prototype.assemble = function() {
    console.log("General Flatlander is being assembled.");
  };
  GeneralFlatlander.prototype.repair = function() {
    console.log("General Flatlander is being repaired.");
  };
  GeneralFlatlander.prototype.wash = function() {
    console.log("General Flatlander is being washed.");
  };
  GeneralFlatlander.prototype.ridden = function() {
    console.log("General Flatlander is being ridden");
  };

  var generalFlatlander = new GeneralFlatlander();
  return generalFlatlander;
};
GeneralBicycleFactory.prototype.createComfortCruiser = function() {
  var GeneralComfortCruiser = function() {};
  utils.extend(GeneralComfortCruiser, bicycleModels.Speedster);
  GeneralComfortCruiser.prototype.assemble = function() {
    console.log("General ComfortCruiser is being assembled.");
  };
  GeneralComfortCruiser.prototype.repair = function() {
    console.log("General ComfortCruiser is being repaired.");
  };
  GeneralComfortCruiser.prototype.wash = function() {
    console.log("General ComfortCruiser is being washed.");
  };
  GeneralComfortCruiser.prototype.ridden = function() {
    console.log("General ComfortCruiser is being ridden");
  };

  var generalComfortCruiser = new GeneralComfortCruiser();
  return generalComfortCruiser;
};

exports.AcmeBicycleFactory = AcmeBicycleFactory;
exports.GeneralBicycleFactory = GeneralBicycleFactory;

