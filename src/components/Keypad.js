import React from 'react';

class Keypad extends React.Component {
  keyUpHandler = function() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.keyUpHandler} />
    );
  }
}

export default Keypad;