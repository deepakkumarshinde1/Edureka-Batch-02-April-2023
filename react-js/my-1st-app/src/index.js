import React from "react";
import ReactDOM from "react-dom/client";

// es5
// const App = require('./App')

// es6
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("edureka"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

//  root element of DOM  tree ==> html
// React DOM ==> Virtual DOM
