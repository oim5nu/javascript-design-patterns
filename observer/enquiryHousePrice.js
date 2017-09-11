var salesOffice = {};

salesOffice.clientList = [];
salesOffice.register = function(fn) {
  this.clientList.push(fn);
};

salesOffice.advise = function() {
  for (var i = 0, fn; fn = this.clientList[i++];) {
    fn.apply(this, arguments);
  }
};

salesOffice.register(function(price, squareMeter) {
  console.log("price = ", price);
  console.log("square meter = ", squareMeter);
});

salesOffice.register(function(price, squareMeter) {
  console.log("price = ", price);
  console.log("square meter = ", squareMeter);
});

salesOffice.advise("30W", "90");
