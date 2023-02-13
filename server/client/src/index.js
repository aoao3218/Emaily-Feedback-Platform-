import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react";
import { legacy_createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = legacy_createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
