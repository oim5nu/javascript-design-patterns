var Interface = require("../../utils").Interface;

var Bicycle = new Interface("Bicycle", ["assemble", "wash", "ride", "repair"]);

exports.Bicycle = Bicycle;