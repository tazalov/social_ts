import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { addPost, store } from "./redux/_store";

export const renderThree = () => {
  ReactDOM.render(
    <>
      <GlobalStyle />
      <App state={store.getState()} addPost={addPost} />
    </>,
    document.getElementById("root"),
  );
};

renderThree();
