import { createGlobalStyle } from 'styled-components'

import { F } from './Fragments.styled'

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
    color: ${(props) => props.theme.colors.primaryFont};
    background: ${(props) => props.theme.colors.bodyBg};
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
    fill: ${(props) => props.theme.colors.svg.fill};
  }
`
