const express = require("express");
const AppRouting = express.Router();

AppRouting.get("/", () => {
    // logic
});
AppRouting.get("/about", () => {});
AppRouting.get("/product", () => {});
AppRouting.get("/contact", () => {});

module.exports = AppRouting;
