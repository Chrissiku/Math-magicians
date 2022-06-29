/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class FunctionButton extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <button type="button" id="clear" onClick={this.props.e}>
        {this.props.name}
      </button>
    );
  }
}

export default FunctionButton;
