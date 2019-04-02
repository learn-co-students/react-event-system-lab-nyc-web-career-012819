// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

  logGood = () => {
    console.log("Good!")
  }

  logEOM = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onBlur={this.logEOM} onFocus={this.logGood}>
        Click Me!
      </button>
    )
  }
}

export default EyesOnMe
