import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { store } from "./redux/_store";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App state={store.getState()} />
  </>,
  document.getElementById("root"),
);
