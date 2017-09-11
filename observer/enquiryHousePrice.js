var salesOffice = {};

salesOffice.clientList = {};
salesOffice.register = function(key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn);
};

salesOffice.advise = function() {
  var key = Array.prototype.shift.call(arguments),
    fns = this.clientList[key];

  if (!fns || fns.length === 0 ) {
    return false;
  }
  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments);
  }
};

salesOffice.register("squareMeter88",
  function(price, presaleDate) {
    console.log("Price = ", price);
    console.log("Presale date = ", presaleDate);
  }
);

salesOffice.register("squareMeter110", function(price) {
  console.log("price = ", price);
});

salesOffice.advise("squareMeter88", "900000", "2008-01-01");
salesOffice.advise("squareMeter110", "1200000");
