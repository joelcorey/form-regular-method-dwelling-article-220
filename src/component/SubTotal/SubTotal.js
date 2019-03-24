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
          handleUpdate={this.props.handleUpdate}
        />
        <VoltAmpSmallAppliance 
          voltAmpsPerSmallAppliance={this.props.voltAmpsPerSmallAppliance}
          requiredSmallApplianceCircuites={this.props.requiredSmallApplianceCircuites}
          handleUpdate={this.props.handleUpdate}
          handleUpdateTotal={this.props.handleUpdateTotal}
        />
        <VoltAmpLaundry 
          handleUpdateTotal={this.props.handleUpdateTotal}
        />
        <VoltAmpTotal 
          total={this.props.total} 
        />
      </>
    );
  }
  
}