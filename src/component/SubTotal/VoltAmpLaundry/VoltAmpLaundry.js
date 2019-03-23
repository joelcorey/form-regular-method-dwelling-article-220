import React, { Component } from 'react';

export default class VoltAmpLaundry extends Component {
  static defaultProps = {
    volAmpsPer: 1500,
    requiredSmallApplianceCircuites: 1,
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
          Laundry circuit
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