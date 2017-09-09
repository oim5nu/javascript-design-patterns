/*
  Build another class B (proxy) with same interface as class A,
  1) to control access to methods in A -- protected proxy
  2) to delay access to data/methods in A, due to limited resource etc -- virtual proxy
  3) to provide local representative for an object resides in a different address space. -- remote proxy
  4) to interpose additional actions when accessing to an object -- smart proxy
 */
var Flower = function(name) {
  this.name = name || "Lily";
};

var xiaoming = {
  sendFlower: function(target) {
    var flower = new Flower();
    target.receiveFlower(flower);
  }
};

var xiaofang = {
  receiveFlower: function(flower) {
    console.log("Xiaofang has received " + flower);
  },
  haveGoodmood: function(fn) {
    setTimeout(function(){
      fn();
    }, 5000);
  }
};

// xiaoming.sendFlower(xiaofang);

// introduce ruhua
var ruhua = { // behave as proxy
  receiveFlower: function(flower) {
    xiaofang.haveGoodmood(function () {
      var flower = new Flower(); // virtual proxy, delay purchasing flower
      if (flower.name === "rose") { // protected proxy, control access to xiaofang
        xiaofang.receiveFlower(flower)
      } else {
        console.log("Xiaofang does not like " + flower.name);
      }
    });
  }
};

xiaoming.sendFlower(ruhua);