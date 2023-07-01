// import mongoose
const mongoose = require("mongoose");

// create a schema
const UserSchema = new mongoose.Schema({
  id: { type: Number },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  gender: { type: String },
});

// create a model
const UserModel = mongoose.model("user", UserSchema, "users"); // name , Schema , collectionName

module.exports = UserModel;
