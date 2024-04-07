import React from "react";
import { Provider, connect, createStoreHook } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./redux/reducers";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const store = createStore(searchRobots);
// const store = createStoreHook(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
