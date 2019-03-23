import React, { Component } from 'react';
import './SubTotal.css';

import VoltAmpPerSquareFoot from './VoltAmpPerSquareFoot/VoltAmpPerSquareFoot';

export default class SubTotal extends Component {

  render() {
    return (
      <section role="contentinfo" className="">
        <VoltAmpPerSquareFoot
          squareFootage={this.props.squareFootage}
          requiredSmallApplianceCircuites={this.props.requiredSmallApplianceCircuites}
          voltAmpsPerSmallApplianceCircuit={this.props.voltAmpsPerSmallApplianceCircuit}
          laundryCircuitVoltAmps={this.props.laundryCircuitVoltAmps}
          handleUpdateSquareFootage={this.props.handleUpdateSquareFootage}
        />
      </section>
    );
  }
  
}

SubTotal.defaultProps = {
  requiredSmallApplianceCircuites: 2,
  voltAmpsPerSmallApplianceCircuit: 1500,
  laundryCircuitVoltAmps: 1500,
}
