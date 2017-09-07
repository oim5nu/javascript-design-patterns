
var Singleton = (function(fn) {
  var _instance = null;
  Singleton.prototype.getName = function() {
    console.log(this.name);
  };
  Singleton.getInstance = function(fn) {
    return _instance || ( _instance = fn.apply(this. arguments));
  }
  return Singleton;
}());

var a = Singleton.getInstance();
var b = Singleton.getInstance();
console.log( a === b );
