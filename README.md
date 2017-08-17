# javascript-design-patterns
Examples of javascript design patterns

I. Creational Patterns
1. Constructor Pattern

2. Module Pattern
1) Standard Format

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

2) Revealing Format

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

3) Augmenting format

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
