/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Display extends React.Component {
  render() {
    const { total, next, operation } = this.props.value;
    const results = `
    ${
  total || operation || next
    ? `${total || ''} ${operation || ''} ${next || ''}`
    : 0
}`;
    // eslint-disable-next-line react/prop-types
    return (
      <div className="result">
        <div className="number">{results}</div>
      </div>
    );
  }
}

export default Display;
