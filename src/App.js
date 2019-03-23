import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/Header';
import Guideline from './component/Guideline/Guideline';
import Utils from './utils/Utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareFootage: Utils.squareFootage(2, 4),
    }
    console.log(Utils.watts(2, 4));
  }
  render() {
    return (
      <main role="main" className="App">
        <Header title={this.props.title} />
        <section>
        <Guideline guideline="Lighting includes general receptable outlets" />
        <hr />
        </section>
      </main>
    );
  }
}

export default App;
