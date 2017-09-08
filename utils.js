var Interface = function(name, methods) {
  if (arguments.length < 2) {
    throw new Error("An Interface expect at least 2 arguments "
      + arguments.length + " arguements passed");
  }
  this.name = name;
  this.methods = [];

  if (methods.constructor === Array) {
    this.methods = methods;
  }
  else if (methods.constructor === String) {
    this.methods[0] = methods;
  }
  else {
    throw new Error("Interface must define methods as a String or an Array of Strings");
  }
};

Interface.ensureImplements = function(obj, interfaces) {
  if(arguments.length < 2) {
    throw new Error("Function Interface.ensureImplements called with " +
      arguments.length + "arguments, but expected at least 2."
    );
  }
  // If interfaces is not an array, assume it's a function pointer
  var toImplement = interfaces.constructor === Array ? interfaces : [interfaces];
  var iface;

  for (var i = 0, len = toImplement.length; i < len; i++) {
    iface = toImplement[i];

    if (iface.constructor !== Interface) {
      throw new Error("Object trying to implement a non-interface. "
        + iface.name + " is not an Interface.");
    }

    // Make sure obj has all of the methods described in the interface
    for (var j = 0, interfaceLen = iface.methods.length; j < interfaceLen; j++) {
      if (!obj[iface.methods[j]]) {
        throw new Error("Interface method not implemented."
          + iface.name + " defines method " + iface.methods[j])
      }
    }
  }
  return true;
};

var derive = function(subClass, superClass) {
  /* Original Code deprecated */
  // var F = function() {};
  // F.prototype = superClass.prototype;
  // subClass.prototype = new F();
  // subClass.prototype.constructor = subClass;
  Object.create = Object.create || function (obj) { // browser does not support ES5
      var F = function() {};
      F.prototype = obj;
      return new F();
  };
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
};

var extend = function(prototype, mixin) {
  var newObject = Object.create(prototype);
  for (var prop in mixin) {
    if (mixin.hasOwnProperty(prop)) {
      newObject[prop] = mixin[prop]; // override or augment
    }
  }
  return newObject;
};

// Extend an existing object with a method from another
var augment = function(receivingClass, givingClass) {
  //only provide certain methods
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else { //provide all methods
    for (var methodName in givingClass.prototype) {
      // check to make sure the receiving class doesn't
      // have a method of the same name as the one currently
      // being processed
      if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }

      // Alternatively (check prototype chain as well):
      // if ( !receivingClass.prototype[methodName] ) {
      //   receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      // }
    }
  }
};

var clone = function(source, destination) {
  for (var attr in source.prototype) {
    destination.prototype[attr] = source.prototype[attr];
  }
};

exports.Interface = Interface;
exports.derive = derive;
exports.extend = extend;
exports.augment = augment; // used for mixin
exports.clone = clone;
