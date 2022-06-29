/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class DigitButton extends React.Component {
  render() {
    return (
      <button type="button" onClick={this.props.e}>
        {this.props.name}
      </button>
    );
  }
}

export default DigitButton;
