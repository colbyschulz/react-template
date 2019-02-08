import React, { Component, Fragment } from 'react';

import { AppWrapper } from './App.css';
import { GlobalStyle } from '../../styles/globalStyles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppWrapper>
          <h1>Hello</h1>
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
