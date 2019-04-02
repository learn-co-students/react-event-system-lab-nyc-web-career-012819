import React from 'react';


class Keypad extends React.Component {

  enterPass() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.enterPass} type="password" />
      </div>
    )
  }

}

export default Keypad;
