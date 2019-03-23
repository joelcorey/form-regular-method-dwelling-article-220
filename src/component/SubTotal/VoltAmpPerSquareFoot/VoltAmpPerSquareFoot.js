import React, { Component } from 'react';
import './VoltAmpPerSquareFoot.css';
import Utils from '../../../utils/Utils';

export default class VoltAmpPerSquareFoot extends Component {

  render() {
    const className = 'square-footage'
    const squareFootageCss = {
      color: '',
      backgroundColor: '#778899',
      padding: '1%',
      margin: 0,
    }
    return (
      <div style={squareFootageCss} className={className}>
        <p>
          Square footage
          <input 
            name="squareFootage"
            className="number" 
            type="number"
            value={ this.props.squareFootage }
            onChange={ (e) => this.props.handleUpdateSquareFootage(e.target.value) }
          ></input>
          x 3VA per sq. ft=
          <input 
            className="read-only" 
            disabled
            value={ this.props.squareFootage * 3 }
          ></input>
        </p>
      </div>
    );
  }
}

VoltAmpPerSquareFoot.defaultProps = {
  squareFootage: 0,
}