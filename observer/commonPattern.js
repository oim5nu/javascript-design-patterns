var Event = (function() {
  var clientList = {}, // Subject, a list of Observers
    register,          // Subscribe
    advise,            // Publish
    unregister;        // Unsubscribe
  register = function(key, fn) {
    if ( !clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };
  advise = function() {
    var key = Array.prototype.shift.call(arguments),
        fns = clientList[key];

    if (!fns || fns.length === 0) {
      return false;
    }

    for (var i =0, fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  };
  unregister = function(key, fn) {
    var fns = clientList[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && ( fns.length = 0 );
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  };

  return {
    register: register,
    advise: advise,
    unregister: unregister
  };

}());


/*
var installEvent = function(obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
};

var salesOffices = {};
installEvent(salesOffices);
*/

Event.register("squareMeter88", xiaoming = function(price) {
  console.log("Price =" + price + " advised to xiaoming");
});

Event.register("squareMeter88", xiaofang = function(price) {
  console.log("Price =" + price + " advised to xiaofang");
});

Event.register("squareMeter100", xiaoqian = function(price) {
  console.log("Price =" + price + " advised to xiaoqian");
});

// salesOffices.advise("squareMeter88", 2000000);
Event.unregister("squareMeter88", xiaoming); // unsubscribing xiaoming's

Event.advise("squareMeter88", 2000000);
Event.advise("squareMeter100", 3000000);

// Event.advise("squareMeter88", 2000000);