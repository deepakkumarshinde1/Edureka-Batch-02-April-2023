const mongoose = require("mongoose");

const MealTypeSchema = new mongoose.Schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  city: { type: String },
  country_name: { type: String },
});

const MealTypeModel = mongoose.model("mealtype", MealTypeSchema, "mealtypes");

module.exports = MealTypeModel;
