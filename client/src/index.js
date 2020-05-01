import React from "react";
import ReactDOM from "react-dom";

import reducers from "../reducers";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";

const identity = store => next => action => {
  return next(action);
};

const logger = store => next => action => {
  console.log("ACTION", action);
  // console.log("PREVIOUS STATE", store.getState());
  let ret = next(action);
  // console.log("NEW STATE", store.getState());
  return ret;
};

const store = createStore(reducers, applyMiddleware(identity, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
