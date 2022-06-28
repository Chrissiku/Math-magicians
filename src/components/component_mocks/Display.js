/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Display extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return (
      <div className="result">
        <div className="number">{this.props.value}</div>
      </div>
    );
  }
}

export default Display;
