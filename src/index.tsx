import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root"),
);
