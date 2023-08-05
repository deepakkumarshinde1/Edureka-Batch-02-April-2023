const AppRouter = require("express").Router();
const LocationController = require("../controller/LocationController");
const MealTypeController = require("../controller/MealTypeController");
const PaymentController = require("../controller/PaymentController");
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
AppRouter.get("/get-menu-item-list/:r_id", RestaurantController.getMenuItems);
// /save data =
AppRouter.post("/save-user-data", UserController.saveUserData);
AppRouter.post("/login", UserController.userLogin);

AppRouter.post("/filter", RestaurantController.filter);

AppRouter.post("/create-order", PaymentController.createOrder);
AppRouter.post("/verify-payment", PaymentController.verifyPayment);

module.exports = AppRouter;
