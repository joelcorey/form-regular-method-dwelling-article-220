import React, { Component } from 'react';
import './VoltAmpPerSquareFoot.css';
import Utils from '../../../utils/Utils';

export default class VoltAmpPerSquareFoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareFootage: props.squareFootage,
    }
    
  }
  handleUpdate = (event) => {
    const { target: { name, value } } = event
    this.setState({
      [name]: value
    })
  }
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
            value={ this.state.squareFootage }
            onChange={ this.handleUpdate }
          ></input>
          x 3VA per sq. ft=
          <input 
            className="read-only" disabled
            value={ this.state.squareFootage * 3 }
          ></input>
        </p>
      </div>
    );
  }
}

VoltAmpPerSquareFoot.defaultProps = {
  squareFootage: 0,
}