//var BenzBuilder = require("./carBuilder").BenzBuilder;
//var BMWBuilder = require("./carBuilder").BMWBuilder;
var Director = require("./director").Director;
var director = new Director();

for (var i=0; i<10000; i++) {
  director.getABenzModel().run();
}

for (var j=0; j < 10000; j++) {
  director.getBBenzModel().run();
}

for (var k=0; k < 100000; k++) {
  director.getCBMWModel().run();
}
