import React, { Component } from 'react';
import { GlobalStyle } from './globalStyle.js';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <body>
          <h1> Dangerzone. </h1>
          <p> Long Live the Scrumdog Billionaires </p>
          <button> Button Large </button>
        </body>
      </>
    );
  }
}

export default App;
