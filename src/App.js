import React, { Component } from 'react';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <main role="main" className="App">
        <Header title={this.props.title} />
      </main>
    );
  }
}

export default App;
