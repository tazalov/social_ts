import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { store } from "./redux/store";

const renderThree = () => {
  ReactDOM.render(
    <>
      <GlobalStyle />
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </>,
    document.getElementById("root"),
  );
};
renderThree();
store.subscribe(renderThree);
