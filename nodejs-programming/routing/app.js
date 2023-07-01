const express = require("express");
const AppRouting = require("./routes/AppRouting");
const ProductRouting = require("./routes/ProductRouting");

const app = express();

const PORT = 3050;
app.use("/", AppRouting);
app.use("/product", ProductRouting);
app.use("/customer", CustomerRouting);
app.use("/admin", AdminRouting);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
