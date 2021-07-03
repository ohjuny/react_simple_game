import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Context } from './context';
import Page1 from './components/page_1';
import Page2 from './components/page_2';

class App extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill?</h1>
          { this.context.state.page === 1 ?
            <Page1/> :
            <Page2 />
          }
        </div>
      </div>
    );
  }
}

export default App;
