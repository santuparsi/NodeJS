var http = require("http");
var calculate = require("./modules/calc");
http
  .createServer(function (req, res) {
    res.write("Addition: " + calculate.add(2, 3) + "\n");
    res.write("Multiply:" + calculate.mul(2, 4));
    res.end();
  })
  .listen(2000);
