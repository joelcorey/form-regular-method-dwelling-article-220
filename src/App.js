import React, { Component } from 'react';
import './App.css';
import Utils from './utils/Utils';

import Header from './component/Header/Header';
import Guideline from './component/Guideline/Guideline';
import SubTotal from './component/SubTotal/SubTotal';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareFootage: 0,
    }
    // console.log(Utils.watts(2, 4));
  }
  handleUpdateSquareFootage = (event) => {
    console.log('handleUpdateSquareFootage!');
    this.setState({
      squareFootage: event
    })
  }
  render() {
    return (
      <main role="main" className="App">
        <Header title={this.props.title} />
        <section>
          <Guideline guideline="Lighting includes general receptable outlets" />
          <hr />
          <SubTotal 
            squareFootage={this.state.squareFootage}
            handleUpdateSquareFootage={this.handleUpdateSquareFootage}
          />
          
        </section>
      </main>
    );
  }

}