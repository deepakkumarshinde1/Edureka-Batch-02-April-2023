const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  city: { type: String },
  country_name: { type: String },
});

const LocationModel = mongoose.model("location", LocationSchema, "locations");

module.exports = LocationModel;
