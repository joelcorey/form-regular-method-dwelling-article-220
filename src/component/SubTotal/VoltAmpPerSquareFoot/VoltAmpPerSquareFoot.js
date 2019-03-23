import React, { Component } from 'react';

export default class VoltAmpPerSquareFoot extends Component {
  static defaultProps = {
    squareFootage: 2000,
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
          Square footage
            <input 
              name="squareFootage"
              className="number" 
              type="number"
              value={ this.props.squareFootage }
              onChange={ (e) => this.props.handleUpdateSquareFootage(e.target.value) }
            ></input>
            x 3VA per sq. ft = 
        </div>
        <div className='calc-right'>
          <input 
            className="read-only" 
            disabled
            value={ this.props.squareFootage * 3 }
          ></input>Watts
        </div>
      </div>
    );
  }
}