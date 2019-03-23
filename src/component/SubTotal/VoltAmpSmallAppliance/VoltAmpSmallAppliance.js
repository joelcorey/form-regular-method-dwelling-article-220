import React, { Component } from 'react';
import './VoltAmpSmallAppliance.css';
import Utils from '../../../utils/Utils';

export default class VoltAmpSmallAppliance extends Component {
  static defaultProps = {
    volAmpsPer: 1500,
    requiredSmallApplianceCircuites: 2,
  }
  render() {
    const css = {
      color: '',
      backgroundColor: '#778899',
      padding: '1%',
      margin: 0,
    }
    return (
      <div style={css} className='calc-container'>
        <div className='calc-left'>
          Two required small appliance circuits
        </div>
        <div className='calc-right'>
          <input 
            className="read-only" 
            disabled
            value={ this.props.volAmpsPer * this.props.requiredSmallApplianceCircuites }
          ></input>Watts
        </div>
      </div>
    );
  }
}
