import React from "react";
import ReactDOM from "react-dom/client";

// es5
// const App = require('./App')

// es6
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
