# Javascript-design-patterns
Examples of javascript design patterns

## I. Creational Patterns
### 1. Constructor Pattern

### 2. Module Pattern -- to emulate the encapsulation characteristics of class in object oriented programming.

- Standard Format
```
  var coffeeMachine = (function() {

    // locally scoped object
    var _coffeeMachine = {};

    // avoid hoisting function declaration before using it
    var _produceCoffee = function(water, capsule) {
      if (water && capsule) {
        console.log('The coffeeMachine is able to produce coffee.');
      } else {
        console.log('The coffeeMachine needs injecting water');
      }
    }

    // avoid verbose/fat stacking returned object 
    _coffeeMachine.produceCoffee = function(water, capsule) {
      _produceCoffee(water, capsule);  
    }

    return _coffeeMachine;

  }());  // Immediately-Invoked-Function-Expressions

  coffeeMachine.produceCoffee(1, 1);
```
- Revealing Format
```
  var coffeeMachine = (function() {
    // private variables ...

    // avoid hoisting function declaration before using it
    var _produceCoffee = function(water, capsule) {
      if (water && capsule) {
        console.log('The coffeeMachine is producing coffee.');
      } else {
        console.log('The coffeeMachine needs injecting water');
      }
    }

    var _produceFoam = function(milk) {
      if (milk) {
        console.log('The coffeeMachine is producing foam.');
      } else {
        console.log('The coffeeMachine needs milk for frothering.')
      }
    }
    
    return {
      produceCoffee: _produceCoffee,
      produceFoam: _produceFoam
    };
  }());  // Immediately-Invoked-Function-Expressions

  coffeeMachine.produceCoffee(1, 1);
  coffeeMachine.produceFoam(1);
```
- Augmenting format
```
  var smartCoffeeMachine = (function(coffeeMachine) {
    coffeeMachine.produceCoffeeWithFoam = function(water, capsule, milk) {
      if (water && capsule && milk) {
        console.log('The smart coffee machine is producing coffee with foam.')
      } else {
        console.log('The smart coffee machine needs water, capsule and milk.')
      }
    }
    
    return coffeeMachine;
    
  }(coffeeMachine || {}));

  smartCoffeeMachine.produceCoffeeWithFoam(1,1,1); // console.log(coffeeMachine) may see produceCoffeeWithFoam added
```

### 3. Singleton -- to have one unquiue instance/structure (not object) of class returned, served as a shared resource namespace.
- General singleton
```
var singleton = {
  someMethod: function() { }
}
```

- Lazy instantiation - only create the unique instance when needed so as to increase speed/performance and reduce memory used when starting up
```
var singletonKettle = (function() {
  var uniqueInstance;
  
  // All the normal singleton code here
  var init = function() {
    var _amountOfWater = 0,
        _max = 2,
        _min = 0;
    
    return {
      getWaterInKettle: function() {
        _amountOfWater = Math.random() * (_max - _min) + _min;
        return _amountOfWater;
      }
    };
  };
  
  return {
    getInstance: function() {
      if (!uniqueInstance) { // Only initialate if not existing
        uniqueInstance = init();
      }
      return uniqueInstance;
    }  
  };
}());

var kettleUsedInMorning = singletonKettle.getInstance();
var KettleUsedAtNoon = singletonKettle.getInstance();

console.log( KettleUsedAtNoon === kettleUsedInMorning ); // true
console.log( kettleUsedInMorning.getWaterInKettle === KettleUsedAtNoon.getWaterInKettle); // true
```

### 4. Factory
- Simple Factory
```
var commercialMachineModel = function(options) {
  this.machineType = options.machineType || "commercial";
  this.waterCapacity = options.waterCapacity || 4;
  this.temperatureAdjustment = options.temperatureAdjustment || "manual";
  this.groups = options.groups || 1;
  this.power = options.power || 2000;
  this.pump = options.pump || 275;
}

var capsuleMachineModel = function(options) {
  this.machineType = options.machineType || "capsule";
  this.waterCapacity = options.waterCapacity || 1;
  this.frother = options.frother || "optional";
  this.brewPump = options.brewPump || 19;
  this.programmable = options.programmable || false;
  this.power = options.power || 1260;
  this.color = options.color || "white";
}

var automaticMachineModel = function(options) {
  this.machineType = options.machineType || "automatic";
  this.waterCapacity = options.waterCapacity || 2;
  this.frother = options.frother || "built-in";
  this.grinder = options.grinder || "built-in";
  this.preBrewable = options.preBrewable || true;
  this.programmable = options.programmable;
}

var coffeeMachineFactory = {};
// function coffeeMachineFactory() {}
coffeeMachineFactory.prototype = {};

// Define the prototypes and utilities
coffeeMachineFactory.prototype.machineModel = capsuleMachineModel; 

coffeeMachineFactory.prototype.createMachine = function(options) {
  switch(options.machineType) {
    case "automatic":
      this.machineModel = automaticMachineModel;
      break;
    case "commercial":
      this.machineModel = commercialMachineModel;
      break;
    default:
      this.machineModel = capsuleMachineModel;  
  }
}

// Create an instance of the factory that makes machine
var machineFactory = new coffeeMachineFactory();
var coffeeMachine = machineFactory.createMachine({
  machineType: "automatic"
});

console.log(coffeeMachine instanceof automaticMachineModel);
```
