import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { addPost, store, subscribe } from "./redux/_store";

const renderThree = () => {
  ReactDOM.render(
    <>
      <GlobalStyle />
      <App state={store.getState()} addPost={addPost} />
    </>,
    document.getElementById("root"),
  );
};
subscribe(renderThree);
renderThree();
