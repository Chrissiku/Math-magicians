/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const FunctionButton = (props) => (
  <button type="button" id="clear" onClick={props.e}>
    {props.name}
  </button>
);

export default FunctionButton;
