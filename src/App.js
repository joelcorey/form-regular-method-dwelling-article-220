import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/Header';
import Guideline from './component/Guideline/Guideline';

class App extends Component {
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
