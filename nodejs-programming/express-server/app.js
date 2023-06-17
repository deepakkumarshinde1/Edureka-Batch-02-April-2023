// create express js server
const express = require("express");

// create server of express
const app = express();

// home page routing
app.get("/", (request, response) => {
  // send a data to browser
  response.send("Hello World");
});

// about us
app.get("/about-us", (request, response) => {
  // send a data to browser
  response.send("This is a about use page");
});

// set port
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
