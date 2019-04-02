// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  callFocus = () => console.log('Good!');
  callBlur = () => console.log('Hey! Eyes on me!');

  render() {
    return (
      <div>
        <button onFocus={this.callFocus} onBlur={this.callBlur} />
      </div>
    );
  }

}

export default EyesOnMe;
