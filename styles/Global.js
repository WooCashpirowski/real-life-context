import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Amatic SC', cursive;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .heading {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  .paragraph {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1.2px;
    line-height: 1.4rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

`;

export default GlobalStyles;
