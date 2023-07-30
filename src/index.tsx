import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const renderThree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </Provider>,
    document.getElementById("root"),
  );
};
renderThree();
store.subscribe(renderThree);
