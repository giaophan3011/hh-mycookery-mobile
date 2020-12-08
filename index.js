import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import store from "./redux/store";

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(AppProvider);
