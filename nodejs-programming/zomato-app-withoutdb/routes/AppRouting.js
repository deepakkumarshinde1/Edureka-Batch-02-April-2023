// extract routing express
const AppRouting = require("express").Router();
const RestaurantController = require("../controller/RestaurantController");

// UI Page
AppRouting.get("/", RestaurantController.getHomePage);

// REST API (for mobile app, react-app , angular-app)
// Representational State Transfer
// API Programming Interface
AppRouting.get("/get-restaurant-list", RestaurantController.getRestaurantList);
AppRouting.get(
  "/get-single-restaurant/:city",
  RestaurantController.getSingleRestaurant
);
// .post
// .put
// .delete

// AppRouting
module.exports = AppRouting;
