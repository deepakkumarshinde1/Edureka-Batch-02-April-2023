const express = require("express");

const app = express();
const AppRouting = require("./routes/AppRouting");

// set a view
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("./public")); // set file folder

// how to attached Routing to app
// use ==> middleware , inject the functionality
app.use("/", AppRouting);
// app.use("/admin", AdminRouting);
// app.use("/customer", CustomerRouting);

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// Reserver IP : 127.0.0.0 to 127.255.255.255
// localhost ==> 127.0.0.1 (Hosting)
// A
// B
// C
// 192.168.1.1
// D
// E
// 0 ... 255
