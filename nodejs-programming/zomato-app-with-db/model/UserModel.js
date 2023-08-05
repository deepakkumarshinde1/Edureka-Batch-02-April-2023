// import mongoose
const mongoose = require("mongoose");

// create a schema
const UserSchema = new mongoose.Schema({
  first_name: { type: String },
  email: { type: String },
  address: { type: String },
  mobile: { type: Number },
  password: { type: String },
});

// create a model
const UserModel = mongoose.model("user", UserSchema, "users"); // name , Schema , collectionName

module.exports = UserModel;
