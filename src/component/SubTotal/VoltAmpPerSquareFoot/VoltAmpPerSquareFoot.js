import React, { Component } from 'react';

export default class VoltAmpPerSquareFoot extends Component {
  render() {
    const css = {
      backgroundColor: '#778899',
      padding: '1%',
      margin: 0,
    }
    return (
      <div style={css} className='calc-container'>
        <div className='calc-left'>
          Square footage
            <input 
              name="squareFootage"
              className="number" 
              type="number"
              value={ this.props.squareFootage }
              onChange={ (e) => {
                this.props.handleUpdateSquareFootage(e)
                }
              }
            ></input>
            x {this.props.voltAmpsPerSquareFoot}VA per sq. ft = 
        </div>
        <div className='calc-right'>
          <input 
            name="total"
            className="read-only number" 
            type="number"
            disabled
            value={ this.props.squareFootageVoltAmps }
          ></input>Watts
        </div>
      </div>
    );
  }
}