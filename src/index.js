import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MainPage from "./components/MainPage";
import rootReducer from "./reducers/rootReducer";
import "./styles.css";

let store = createStore(rootReducer);

window.store = store;
store.subscribe(() => {
  console.log("something happened");
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
