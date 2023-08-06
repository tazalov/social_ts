import React, { useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/Global.styled";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "./styles/theme/Theme";

function Root() {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? theme : lightTheme);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <App state={store.getState()} />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
