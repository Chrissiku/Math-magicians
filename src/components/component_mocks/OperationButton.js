/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class OperationButton extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <button className="orange-color" type="button" onClick={this.props.e}>
        {this.props.name}
      </button>
    );
  }
}

export default OperationButton;
