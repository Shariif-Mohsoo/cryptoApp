//TODO: 1) IMPORT IMPORTANT LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
// import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

//TODO: 2) GET PARENT DIV FROM HTML FILE
const el = document.getElementById("root");
//TODO: 3) TELL REACT TO TAKE CONTROL OF THAT ELEMENT
const root = ReactDOM.createRoot(el);
//TODO: 4) CREATE THE COMPONENT
//TODO: 5) SHOW COMPONENT ON THE SCREEN

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
