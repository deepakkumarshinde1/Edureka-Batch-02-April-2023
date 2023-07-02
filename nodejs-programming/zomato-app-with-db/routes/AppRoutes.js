const AppRouter = require("express").Router();
const UserController = require("../controller/UserController");

AppRouter.get("/", UserController.userHome);
AppRouter.get("/get-user-list/:gender", UserController.getUserList);

// /save data =
AppRouter.post("/save-user-data", UserController.saveUserData);
AppRouter.post("/login", UserController.userLogin);
module.exports = AppRouter;
