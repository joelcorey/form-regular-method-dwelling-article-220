import React, { Component } from 'react';
import './SubTotal.css';

import VoltAmpPerSquareFoot from './VoltAmpPerSquareFoot/VoltAmpPerSquareFoot';
import VoltAmpSmallAppliance from './VoltAmpSmallAppliance/VoltAmpSmallAppliance';
import VoltAmpLaundry from './VoltAmpLaundry/VoltAmpLaundry';
import VoltAmpTotal from './VoltAmpTotal/VoltAmpTotal';

export default class SubTotal extends Component {
  render() {
    return (
      <>
        <VoltAmpPerSquareFoot
          squareFootage={this.props.squareFootage}
          voltAmpsPerSquareFoot={this.props.voltAmpsPerSquareFoot}
          squareFootageVoltAmps={this.props.squareFootageVoltAmps}
          handleUpdateSquareFootage={this.props.handleUpdateSquareFootage}
          handleUpdateSquareFootageVoltAmps={this.props.handleUpdateSquareFootageVoltAmps}
        />
        <VoltAmpSmallAppliance 
          voltAmpsPerSmallAppliance={this.props.voltAmpsPerSmallAppliance}
          requiredSmallApplianceCircuites={this.props.requiredSmallApplianceCircuites}
          smallAppliaceVoltAmps={this.props.smallAppliaceVoltAmps}
          handleUpdateRequiredSmallApplianceCircuites={this.props.handleUpdateRequiredSmallApplianceCircuites}
          handleUpdateVoltAmpsPerSmallAppliance={this.props.handleUpdateVoltAmpsPerSmallAppliance}
          
        />
        <VoltAmpLaundry 
          requiredLaundryCircuits={this.props.requiredLaundryCircuits}
          voltAmpsPerLaundryCircuit={this.props.voltAmpsPerLaundryCircuit}
          laundryCircuitVoltAmps={this.props.laundryCircuitVoltAmps}
          handleUpdateRequiredLaundryCircuits={this.props.handleUpdateRequiredLaundryCircuits}
          handleUpdateVoltAmpsPerLaundryCircuit={this.props.handleUpdateVoltAmpsPerLaundryCircuit}

        />
        <VoltAmpTotal 
          total={this.props.total} 
        />
      </>
    );
  }
  
}