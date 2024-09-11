var zmq = require("zeromq"),
var sock = zmq.socket("sub");

sock.connect("tcp://xxx:5555");
sock.subscribe("contractLog");
console.log("Subscriber connected to port 5555");

sock.on("message", function(topic, message) {
  console.log(
    "received a message related to:",
    Buffer.from(topic).toString(),
    ", containing message:",
    Buffer.from(message).toString()
  );
});
