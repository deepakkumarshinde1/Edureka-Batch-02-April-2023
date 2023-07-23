const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  ingridients: { type: Array },
  restaurantId: { type: mongoose.Schema.Types.ObjectId },
  image: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

const MenuItemModel = mongoose.model("menuitem", MenuItemSchema, "menuitems");

module.exports = MenuItemModel;
