import React from 'react';

class EyesOnMe extends React.Component {
  handleBlur = function() {
    console.log('Hey! Eyes on me!');
  }

  handleFocus = function() {
    console.log('Good!');
  } 

  render() {
    return (
      <button onBlur={this.handleBlur} onFocus={this.handleFocus}>My Button</button>
    );
  }
}

export default EyesOnMe;