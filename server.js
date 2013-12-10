// server.js: Simple Current Cost Elecricity Meter app in Node.js

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

// buffer to hold data from serial port before parsing
var buffer = "";

// current cost meter appears as ttyUSB0
// might be different depending on what
// else is connected
var serialdevice = "/dev/ttyUSB0";

var sp = new SerialPort(serialdevice, {
  // my current cost meter serial settings are 57600 baud, 
  // 8 data bits, no parity, 1 stop bit
  // not sure about flow control...
  baudrate: 57600 });

sp.on("open", function() {
  console.info('Serial port opened.');
});

sp.on("data", function(data) {
  // got some data to read, add it to current buffer for parsing
  buffer += data.toString();
  // look for start of data
  // see http://cumbers.wordpress.com/2008/05/07/breakdown-of-currentcost-xml-output/
  var startmsg = buffer.indexOf("<msg>");
  if (startmsg != -1) {
    // found start of data
    // now look for end
    var endmsg = buffer.indexOf("</msg>");
    if (endmsg != -1) {
      // got a complete message, extract it from the buffer
      // and output to the console
      var msg = buffer.substring(startmsg, endmsg+6); // include the end tag
      console.log(msg);

      // now clear the buffer ready for the next data to come in
      buffer = "";

      // TODO think about handling the case of multiple messages
      // in the buffer. we only pick out the first message currently
    }
  }
});

