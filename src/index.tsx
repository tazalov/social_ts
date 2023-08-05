import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root"),
);
