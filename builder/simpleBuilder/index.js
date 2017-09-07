var BenzBuilder = require("./carBuilder").BenzBuilder;
var BMWBuilder = require("./carBuilder").BMWBuilder;

var sequence = ["engineBoom", "start", "stop"];

var benzBuilder = new BenzBuilder();
benzBuilder.setSequence(sequence);

var benz = benzBuilder.getCarModel();
benz.run();

var bmwBuilder = new BMWBuilder();
bmwBuilder.setSequence(sequence);

var bmw = bmwBuilder.getCarModel();
bmw.run();