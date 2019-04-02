// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends Component {

  handleKeyUp = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUP={this.handleKeyUp}/>
      </div>
    )
  }
}

export default Keypad;
