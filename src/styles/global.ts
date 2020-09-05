import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2b2b2b;
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 16px Assistant, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;
