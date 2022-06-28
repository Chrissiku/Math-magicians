/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class DigitButton extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <button type="button">
        {this.props.value}
      </button>
    );
  }
}

export default DigitButton;
