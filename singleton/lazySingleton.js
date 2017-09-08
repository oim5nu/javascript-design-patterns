
var getSingle = function(fn) {
  var result;
  return function() {
    return result || ( result = fn.apply(this, arguments));
  }
};

var createFoo = function() {
  var Foo = function() {
    this.name = Math.random().toString();
  };
  var foo = new Foo();
  return foo;
};

var createSingleFoo = getSingle(createFoo);
var myFoo1 = createSingleFoo();
var myFoo2 = createSingleFoo();
console.log( myFoo1 === myFoo2 );
