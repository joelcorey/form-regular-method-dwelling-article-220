import React, { Component } from 'react';
import './SubTotal.css';

import VoltAmpPerSquareFoot from './VoltAmpPerSquareFoot/VoltAmpPerSquareFoot';
import VoltAmpSmallAppliance from './VoltAmpSmallAppliance/VoltAmpSmallAppliance';

export default class SubTotal extends Component {
  
  render() {
    return (
      <>
        <VoltAmpPerSquareFoot
          squareFootage={this.props.squareFootage}
          laundryCircuitVoltAmps={this.props.laundryCircuitVoltAmps}
          handleUpdateSquareFootage={this.props.handleUpdateSquareFootage}
        />
        <VoltAmpSmallAppliance />
      </>
    );
  }
  
}

SubTotal.defaultProps = {
  requiredSmallApplianceCircuites: 2,
  voltAmpsPerSmallApplianceCircuit: 1500,
  laundryCircuitVoltAmps: 1500,
}
