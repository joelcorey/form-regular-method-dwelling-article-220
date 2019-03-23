import React, { Component } from 'react';

export default class VoltAmpTotal extends Component {
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
          sub-total
        </div>
        <div className='calc-right'>
          <input 
            className="read-only" 
            disabled
            value={ this.props.total }
          ></input>Watts
        </div>
      </div>
    );
  }
}