import React, { Component } from 'react';

export default class VoltAmpLaundry extends Component {
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
            name="requiredLaundryCircuits"
            className="number" 
            type="number"
            value={ this.props.requiredLaundryCircuits }
            onChange={ (e) => this.props.handleUpdateRequiredLaundryCircuits(e) }
          ></input>
          required laundry circuit at
          <input 
            name="voltAmpsPerLaundryCircuit"
            className="number" 
            type="number"
            value={ this.props.voltAmpsPerLaundryCircuit }
            onChange={ (e) => this.props.handleUpdateVoltAmpsPerLaundryCircuit(e) }
          ></input>
          Watts = 
        </div>
        <div className='calc-right'>
          <input
            name="smallApplianceVoltAmps"
            className="read-only number"
            type="number"
            disabled
            value={ this.props.laundryCircuitVoltAmps }
          ></input>Watts
        </div>
      </div>
    );
  }
}
