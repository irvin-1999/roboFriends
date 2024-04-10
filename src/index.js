import React from "react";
import ReactDOM from "react-dom/client";
import { requestRobots, searchRobots } from "./redux/reducers";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({ requestRobots, searchRobots });
const logger = createLogger();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
