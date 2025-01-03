const Barnowl = require("barnowl");
const BarnowlMinew = require("barnowl-minew");

let barnowl = new Barnowl({ enableMixing: true });

barnowl.addListener(BarnowlMinew, {}, BarnowlMinew.TestListener, {});

barnowl.on("raddec", (raddec) => {
  console.log(raddec);
  // Trigger your application logic here
});

const express = require("express");
const http = require("http");

let app = express();
let server = http.createServer(app);
server.listen(3001, function () {
  console.log("Listening on port 3001");
});

let options = {
  app: app,
  express: express,
  route: "/minew",
  isPreOctetStream: false,
}; // Set true for G1 firmware v2/3
barnowl.addListener(BarnowlMinew, {}, BarnowlMinew.HttpListener, options);
