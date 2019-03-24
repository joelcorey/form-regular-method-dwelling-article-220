import React, { Component } from 'react';
import './App.css';
// import Utils from './utils/Utils';

import Header from './component/Header/Header';
import Guideline from './component/Guideline/Guideline';
import SubTotal from './component/SubTotal/SubTotal';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareFootage: 2000,
      voltAmpsPerSmallAppliance: 1500,
      requiredSmallApplianceCircuites: 2,
      // smallApplianceWatts: this.volAmpsPerSmallAppliance * this.requiredSmallApplianceCircuites,
      total: 0,
    }
    // console.log(Utils.watts(2, 4));
  }
  handleUpdateSquareFootage = (value) => {
    value = parseInt(value);
    this.setState({
      squareFootage: value,
      requiredSmallApplianceCircuites: 2,
      voltAmpsPerSmallAppliance: 1500,
      total: value * 3
    })
  }
  handleUpdateTotal = (toAdd) => {
    console.log('handleUpdateTotal!')
    // const newTotal = this.state.total + parseInt(toAdd);
    this.setState({
      total: 1
    })
  }
  handleUpdate = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    this.setState({
      [key]: value
    })
  }
  render() {
    //console.log('type of this.state.squareFootage: ' + typeof this.state.squareFootage)
    return (
      <main role="main" className="App">
        <Header title={this.props.title} />
        <section>
          <Guideline guideline="Lighting includes general receptable outlets" />
          <hr />
          <SubTotal 
            squareFootage={this.state.squareFootage}
            voltAmpsPerSmallAppliance={this.state.voltAmpsPerSmallAppliance}
            requiredSmallApplianceCircuites={this.state.requiredSmallApplianceCircuites}
            total={this.state.total}
            handleUpdate={this.handleUpdate}
            handleUpdateSquareFootage={this.handleUpdateSquareFootage}
            handleUpdateTotal={this.handleUpdateTotal}
          />
          
        </section>
      </main>
    );
  }

}