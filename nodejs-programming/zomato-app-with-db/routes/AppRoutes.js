const AppRouter = require("express").Router();
const LocationController = require("../controller/LocationController");
const MealTypeController = require("../controller/MealTypeController");
const RestaurantController = require("../controller/RestaurantController");
const UserController = require("../controller/UserController");

AppRouter.get("/", UserController.userHome);
AppRouter.get("/get-user-list/:gender", UserController.getUserList);
AppRouter.get("/get-location-list", LocationController.getLocationList);
AppRouter.get(
  "/get-restaurant-list-by-loc-id/:loc_id",
  RestaurantController.getRestaurantListByLocation
);
AppRouter.get("/get-meal-type-list", MealTypeController.getMealTypeList);
AppRouter.get(
  "/get-restaurant-details/:rest_id",
  RestaurantController.getSingleRestaurantDetails
);
// /save data =
AppRouter.post("/save-user-data", UserController.saveUserData);
AppRouter.post("/login", UserController.userLogin);
AppRouter.post("/filter", RestaurantController.filter);
module.exports = AppRouter;
