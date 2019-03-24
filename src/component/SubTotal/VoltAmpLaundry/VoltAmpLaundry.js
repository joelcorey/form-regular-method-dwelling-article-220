import React, { Component } from 'react';

export default class VoltAmpLaundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voltAmpsPer: this.props.voltAmpsPer,
      requiredCircuits: this.props.requiredCircuits,
      total: 0,
    }
  }
  getTotal() {
    return this.state.voltAmpsPer * this.state.requiredCircuits;
  }
  
  componentDidMount() {
    const newTotal = this.getTotal();
    this.setState({
      total: newTotal,
    })
    this.props.handleUpdateTotal(this.state.total);
  }
  compoenentDidUpdate() {
    this.setState({
      total: this.state.voltAmpsPer * this.state.requiredCircuits
    })
    this.props.handleUpdateTotal(this.state.total);
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
            value={ this.state.total }
          ></input>Watts
        </div>
      </div>
    );
  }
}

VoltAmpLaundry.defaultProps = {
  voltAmpsPer: 1500,
  requiredCircuits: 1,
}