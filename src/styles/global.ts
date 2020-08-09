import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', cursive;
  }
  html {
    font-size: 100%;
  }
  body {
    font-family: 'Roboto';
  }
  a {
    text-decoration: none;
  }

`
export default GlobalStyles
