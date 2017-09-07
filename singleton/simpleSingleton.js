
var Singleton = (function() {
  var _instance = null;
  function Singleton(name) {
    this.name = name;
  };
  Singleton.prototype.getName = function() {
    console.log(this.name);
  };
  Singleton.getInstance = function(name) {
    if (!_instance) {
      _instance = new Singleton(name);
    }
    return _instance;
  }
  return Singleton;
}());

var a = Singleton.getInstance("sven1");
var b = Singleton.getInstance("sven2");
console.log( a === b );