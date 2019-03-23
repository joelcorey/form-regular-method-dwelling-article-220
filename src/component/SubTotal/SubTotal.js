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
          handleUpdateSquareFootage={this.props.handleUpdateSquareFootage}
        />
        <VoltAmpSmallAppliance />
        <VoltAmpLaundry />
        <VoltAmpTotal total={this.props.total} />
      </>
    );
  }
  
}