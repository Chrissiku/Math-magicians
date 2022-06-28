/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class OperationButton extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <button className="orange-color" type="button">
        {this.props.operation}
      </button>
    );
  }
}

export default OperationButton;
