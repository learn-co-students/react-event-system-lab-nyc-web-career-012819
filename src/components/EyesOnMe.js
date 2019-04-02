// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  good = () => {
    console.log('Good!')
  }

  eyes = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return <button onFocus={this.good} onBlur={this.eyes}></button>
  }
}

export default EyesOnMe
