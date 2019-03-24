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
      //
      requiredSmallApplianceCircuites: 2,
      voltAmpsPerSmallAppliance: 1500,
      smallAppliaceVoltAmps: 0,
      //
      total: 0,
    }
    // console.log(Utils.watts(2, 4));
  }
  componentWillMount() {
    let newSquareFootageVoltAmps = 
      this.state.voltAmpsPerSquareFoot * 
      this.state.squareFootage
    let newSmallApplianceVoltAmps = 
      this.state.voltAmpsPerSmallAppliance *
      this.state.requiredSmallApplianceCircuites
    this.setState({
      squareFootageVoltAmps: newSquareFootageVoltAmps,
      smallAppliaceVoltAmps: newSmallApplianceVoltAmps,
    })
  }
  componentDidMount() {
    let newTotal = 
      this.state.squareFootageVoltAmps +
      this.state.smallAppliaceVoltAmps
    this.setState({
      total: newTotal,
    })
  }
  handleUpdateSquareFootage = (e) => {
    let key = e.target.name;
    let value = parseInt(e.target.value);
    this.setState(
      { [key]: value },
      // Update other state after async operation is done:
      () => {
        this.handleUpdateSquareFootageVoltAmps()
      }
    )
  }
  handleUpdateSquareFootageVoltAmps = () => {
    let newSquareFootageVoltAmps = 
      this.state.voltAmpsPerSquareFoot * 
      this.state.squareFootage
    this.setState({ squareFootageVoltAmps: newSquareFootageVoltAmps, },
      () => this.handleUpdateTotal()
    )
  }
  handleUpdateRequiredSmallApplianceCircuites = (e) => {
    let key = e.target.name;
    let value = parseInt(e.target.value);
    this.setState(
      { [key]: value },
      // Update other state after async operation is done:
      () => {
        this.handleUpdateSmallAppliaceVoltAmps()
      }
    )
  }
  handleUpdateVoltAmpsPerSmallAppliance = (e) => {
    let key = e.target.name;
    let value = parseInt(e.target.value);
    this.setState(
      { [key]: value },
      // Update other state after async operation is done:
      () => {
        this.handleUpdateSmallAppliaceVoltAmps()
      }
    )
  }
  handleUpdateSmallAppliaceVoltAmps = () => {
    let newSmallAppliaceVoltAmps = 
      this.state.requiredSmallApplianceCircuites *
      this.state.voltAmpsPerSmallAppliance
    this.setState({ smallAppliaceVoltAmps: newSmallAppliaceVoltAmps },
      () => this.handleUpdateTotal()
    )
  }
  handleUpdateTotal = () => {
    let newTotal = 
      this.state.squareFootageVoltAmps +
      this.state.smallAppliaceVoltAmps
    this.setState({
      total: newTotal,
    })
  }
  handleUpdate = (event, callback) => {
    let key = event.target.name;
    let value = parseInt(event.target.value);
    console.log(`handleUpdate() key: ${key}, value: ${value}`)
    this.setState({ [key]: value })
  }
  render() {
    return (
      <main role="main" className="App">
        <Header title={this.props.title} />
        <section>
          <Guideline guideline="Lighting includes general receptable outlets" />
          <hr />
          <SubTotal 
            //
            squareFootage={this.state.squareFootage}
            voltAmpsPerSquareFoot={this.state.voltAmpsPerSquareFoot}
            squareFootageVoltAmps={this.state.squareFootageVoltAmps}
            handleUpdateSquareFootage={this.handleUpdateSquareFootage}
            handleUpdateSquareFootageVoltAmps={this.handleUpdateSquareFootageVoltAmps}
            // 
            voltAmpsPerSmallAppliance={this.state.voltAmpsPerSmallAppliance}
            requiredSmallApplianceCircuites={this.state.requiredSmallApplianceCircuites}
            smallAppliaceVoltAmps={this.state.smallAppliaceVoltAmps}
            handleUpdateRequiredSmallApplianceCircuites={this.handleUpdateRequiredSmallApplianceCircuites}
            handleUpdateVoltAmpsPerSmallAppliance={this.handleUpdateVoltAmpsPerSmallAppliance}
            // 
            handleUpdate={this.handleUpdate}
            
          />
          
        </section>
      </main>
    );
  }

}