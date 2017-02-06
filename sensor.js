//PingFirmata is required to be copy pasted on the Ardiuno IDE
// check the example at: http://johnny-five.io/examples/proximity-hcsr04-analog/
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(2);
  led.off();
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: "A0"
  });

  //turning on the light whenevery someone entered the room
  proximity.on("data", function() {
    console.log("  cm  : ", this.cm);
    if (this.cm <= 66) {
      led.on()
    }
  });

});
