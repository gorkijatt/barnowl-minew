const Barnowl = require("barnowl");
const BarnowlMinew = require("barnowl-minew");
const express = require("express");
const http = require("http");

// Initialize Barnowl with mixing enabled
let barnowl = new Barnowl({ enableMixing: true });

// Create an Express app and HTTP server
let app = express();
let server = http.createServer(app);

// Start the server on port 3001
server.listen(3001, function () {
  console.log("Listening on port 3001");
});

// Set up Barnowl-Minew listener options
let options = {
  app: app,
  express: express,
  route: "/minew", // API endpoint
  isPreOctetStream: false, // Set true for G1 firmware v2/3
};

// Add the Minew listener to Barnowl
barnowl.addListener(BarnowlMinew, {}, BarnowlMinew.HttpListener, options);

barnowl.on("visibilityEvent", (event) => {
  console.log("Received data:", event);
});

// Simple root route for testing the server
app.get("/", (req, res) => {
  res.send("Barnowl-Minew Server is running!");
});
