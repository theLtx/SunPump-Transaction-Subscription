// subscriber.js
var zmq = require("zeromq"),
var sock = zmq.socket("sub");

sock.connect("tcp://127.0.0.1:5555");
sock.subscribe("block");
console.log("Subscriber connected to port 5555");

sock.on("message", function(topic, message) {
  console.log(
    "received a message related to:",
    Buffer.from(topic).toString(),
    ", containing message:",
    Buffer.from(message).toString()
  );
});