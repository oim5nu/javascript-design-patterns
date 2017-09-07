
var Foo = (function() {
  function Foo() {};
  Foo.prototype.bar = function() {
    console.log("I am bar.")
  };
  Foo.prototype.run = function() {
    console.log("I am running.");
  };
  Foo.prototype.cloneI = function() {
    var copy = Object.create(Foo.prototype);
    return copy;
  };
  Foo.prototype.cloneII = function() {
    var copy = new Foo();
    for (var attr in this) {
      copy[attr] = this[attr];
    }
    return copy;
  };
  return Foo;
}());

var foo = new Foo();
var copyI = foo.cloneI();
var copyII = foo.cloneII();

copyI.bar();
copyII.run();