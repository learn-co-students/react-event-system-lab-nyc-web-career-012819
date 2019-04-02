// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  eyes = () => {
    console.log('Entering password...')
  }

  render () {
    return <input type="password" onKeyUp={this.eyes}/>
  }
}

export default Keypad
