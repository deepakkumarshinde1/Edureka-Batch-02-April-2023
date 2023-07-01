const express = require("express");
const ProductRouting = express.Router();

ProductRouting.get("/", () => {
  // logic
});
ProductRouting.get("/list", () => {});

ProductRouting.post("/add", () => {});
ProductRouting.post("/login", () => {});
ProductRouting.post("/logout", () => {});

ProductRouting.delete("/remove", () => {});
ProductRouting.put("/update", () => {});

module.exports = ProductRouting;
