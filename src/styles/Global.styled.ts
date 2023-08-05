import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { F } from "../components/Fragments.styled";

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
  }
  :focus,
  :active {
    outline: none;
  }
  a:focus,
  a:active {
    outline: none;
  }
  
  body {
    min-height: 100vh;
    line-height: 1;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Arial', sans-serif;
    font-size: 16px;
    color: ${theme.colors.primaryFont};
    background: linear-gradient(180deg,#424979, #24273b);
    ${F.ScrollBody};
  }
  input,
  button,
  textarea {
    font-size: inherit;
  }
  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }
  a {
    color: inherit;
  }
  a:link,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none
  }
  ul li {
    list-style: none;
  }
  img {
    vertical-align: top;
  }
  h1,
  h2  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
  
  svg {
    fill: ${theme.colors.primaryFont};
  }
`;

/*background-color: ${theme.colors.primaryBg};*/
