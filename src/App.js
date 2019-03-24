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
      voltAmpsPerSquareFoot: 3,
      squareFootageVoltAmps: 0,
      voltAmpsPerSmallAppliance: 1500,
      
      requiredSmallApplianceCircuites: 2,
      // smallApplianceWatts: this.volAmpsPerSmallAppliance * this.requiredSmallApplianceCircuites,
      total: 0,
    }
    // console.log(Utils.watts(2, 4));
  }
  componentWillMount() {
    let newSquareFootageVoltAmps = this.state.voltAmpsPerSquareFoot * this.state.squareFootage
    this.setState({
      squareFootageVoltAmps: newSquareFootageVoltAmps
    })
  }
  handleUpdate = (e) => {
    let key = e.target.name;
    let value = parseInt(e.target.value);
    console.log(`handleUpdate() key: ${key}, value: ${value}`)
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
            voltAmpsPerSquareFoot={this.state.voltAmpsPerSquareFoot}
            squareFootageVoltAmps={this.state.squareFootageVoltAmps}
            // 
            voltAmpsPerSmallAppliance={this.state.voltAmpsPerSmallAppliance}
            requiredSmallApplianceCircuites={this.state.requiredSmallApplianceCircuites}
            // 
            handleUpdate={this.handleUpdate}
            
          />
          
        </section>
      </main>
    );
  }

}