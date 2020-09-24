import React from 'react';
import GlobalStyle from './globalStyle';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <body>
          <h1> Dangerzone. </h1>
          <p> Long Live the Scrumdog Billionaires </p>
          <button type="submit"> Button Large </button>
        </body>
      </>
    );
  }
}

export default App;
