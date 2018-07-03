import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { changeFirstName } from "./actions/actions";

import "./styles.css";

let store = createStore(rootReducer);

window.store = store;
window.changeFirstName = changeFirstName;

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
