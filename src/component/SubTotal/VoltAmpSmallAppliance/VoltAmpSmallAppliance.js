import React, { Component } from 'react';

export default class VoltAmpSmallAppliance extends Component {
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
          <input 
            name="requiredSmallApplianceCircuites"
            className="number" 
            type="number"
            value={ this.props.requiredSmallApplianceCircuites }
            onChange={ (e) => this.props.handleUpdateRequiredSmallApplianceCircuites(e) }
          ></input>
          required small appliance circuits at
          <input 
            name="voltAmpsPerSmallAppliance"
            className="number" 
            type="number"
            value={ this.props.voltAmpsPerSmallAppliance }
            onChange={ (e) => this.props.handleUpdateVoltAmpsPerSmallAppliance(e) }
          ></input>
          Watts = 
        </div>
        <div className='calc-right'>
          <input
            name="smallApplianceVoltAmps"
            className="read-only number"
            type="number"
            disabled
            value={ this.props.smallAppliaceVoltAmps }
          ></input>Watts
        </div>
      </div>
    );
  }
}
