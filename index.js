import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import ReactDOM from "react-dom";
import React, { useEffect } from "react";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
