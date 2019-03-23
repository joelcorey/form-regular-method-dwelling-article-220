import React, { Component } from 'react';
import './SubTotal.css';

import VoltAmpPerSquareFoot from './VoltAmpPerSquareFoot/VoltAmpPerSquareFoot';

export default class SubTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareFootage: this.props.squareFootage,
      requiredSmallApplianceCircuites: this.props.requiredSmallApplianceCircuites,
      voltAmpsPerSmallApplianceCircuit: this.props.voltAmpsPerSmallApplianceCircuit,
      laundryCircuitVoltAmps: this.props.laundryCircuitVoltAmps,
    }
  }
  handleUpdateSquareFootage(squareFootage) {
    this.setState({
      squareFootage
    })
  }
  handleRequiredSmallApplianceCircuites(requiredSmallApplianceCircuites) {
    this.setState({
      requiredSmallApplianceCircuites
    })
  }

  render() {
    return (
      <section role="contentinfo" className="">
        <VoltAmpPerSquareFoot
          squareFootage=
            {this.state.squareFootage}
          requiredSmallApplianceCircuites=
            {this.state.requiredSmallApplianceCircuites}
          voltAmpsPerSmallApplianceCircuit=
            {this.state.voltAmpsPerSmallApplianceCircuit}
          laundryCircuitVoltAmps=
            {this.state.laundryCircuitVoltAmps}
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
