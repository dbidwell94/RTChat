import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import UbuntuRegular from './assets/Ubuntu/Ubuntu-Regular.ttf';
import UbuntuItalic from './assets/Ubuntu/Ubuntu-Italic.ttf';
import UbuntuBoldItalic from './assets/Ubuntu/Ubuntu-BoldItalic.ttf';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Ubuntu";
    src: local(${UbuntuRegular}) format('ttf');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "Ubuntu";
    src: local(${UbuntuItalic}) format('ttf');
    font-style: italic;
    font-weight: normal;
  }

  @font-face {
    font-family: "Ubuntu";
    src: local(${UbuntuBoldItalic}) format('ttf');
    font-style: italic;
    font-weight: bold;
  }


  html {
    max-width: 100vw;
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu"
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.25rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4, h5, h6 {
    font-size: 1.75rem;
  }
  p, small, strong, a, input {
    font-size: 1.5rem;
  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
