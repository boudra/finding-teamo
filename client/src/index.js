import React from "react";
import ReactDOM from "react-dom";

import reducers from "./reducers";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

import App from "./App";

const logger = store => next => action => {
  console.log("ACTION", action);
  // console.log("PREVIOUS STATE", store.getState());
  let ret = next(action);
  // console.log("NEW STATE", store.getState());
  return ret;
};

const store = createStore(reducers, applyMiddleware(logger, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
