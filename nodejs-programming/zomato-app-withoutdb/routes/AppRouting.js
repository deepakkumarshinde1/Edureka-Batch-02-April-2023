// extract routing express
const AppRouting = require("express").Router();

AppRouting.get("/", (request, response) => {
  response.send("Home Router from AppRouting");
});

// AppRouting
module.exports = AppRouting;
