import React, { Component } from 'react';
import './Guideline.css';

export default class Guideline extends Component {
  render() {
    const pStyle = {
      color: '',
      backgroundColor: '#778899',
      padding: '1%',
      margin: 0,
    }
    return (
      <p style={pStyle}>
        {this.props.guideline}
      </p>
    );
  }
}

Guideline.defaultProps  = {
  guideline: 'This Guideline does not have a guideline default prop',
}
