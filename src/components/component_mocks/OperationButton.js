/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const OperationButton = (props) => (
  <button className="orange-color" type="button" onClick={props.e}>
    {props.name}
  </button>
);

export default OperationButton;
