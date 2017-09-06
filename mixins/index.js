/*
  Pros: easy to extend methods, reuse existing code
  Cons: prototype pollution
 */
var utils = require("../utils");

var Car = function(settings) {
  this.model = settings.model || "no model provided";
  this.color = settings.color || "no colour provided";
};

// Mixin
var Mixin = (function() {
  function Mixin() {};
  Mixin.prototype = {
    driveForward: function() {
      console.log("drive forward");
    },
    driveBackward: function() {
      console.log("drive backward");
    },
    driveSideways: function() {
      console.log("drive sideways");
    }
  };
  return Mixin;
}());

// Augment the Car constructor to include "driveForward" and "driveBackward"
utils.augment(Car, Mixin, "driveForward", "driveBackward");

// Create a new Car
var myCar = new Car({
  model: "Ford Escort",
  color: "blue"
});

// Test to make sure we now have access to the methods
myCar.driveForward(); // drive forward
myCar.driveBackward(); // drive backward

// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
utils.augment(Car, Mixin);

var mySportsCar = new Car({
  model: "Porsche",
  color: "red"
});

mySportsCar.driveSideways(); // drive sideways

