const express = require("express");
const app = express();
const mongoose = require("mongoose");

const AppRouter = require("./routes/AppRoutes");

//add routes
app.use("/api", AppRouter);

const PORT = 3040;
const MONGO_DB_URI = "mongodb://127.0.0.1:27017/batch02April";
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("db connected successfully");
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
