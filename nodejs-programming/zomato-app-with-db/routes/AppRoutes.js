const AppRouter = require("express").Router();
const UserController = require("../controller/UserController");

AppRouter.get("/", UserController.userHome);
AppRouter.get("/get-user-list/:gender", UserController.getUserList);

module.exports = AppRouter;
