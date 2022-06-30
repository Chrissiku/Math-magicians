/* eslint-disable react/button-has-type */
import './App.css';
import React, { useState } from 'react';
import DigitButton from './component_mocks/DigitButton';
import FunctionButton from './component_mocks/FunctionButton';
import SpanTwo from './component_mocks/spanTwoButton';
import Display from './component_mocks/Display';
import OperationButton from './component_mocks/OperationButton';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const eHandler = (e) => {
    const val = e.target.textContent;
    setData(calculate(data, val));
  };

  return (
    <div className="calculator-grid-container">
      <Display value={data} />
      {/* first row */}
      <FunctionButton e={eHandler} name="AC" />
      <FunctionButton e={eHandler} name="+/-" />
      <FunctionButton e={eHandler} name="%" />
      <OperationButton e={eHandler} name="&divide;" />
      {/* second row */}
      <DigitButton e={eHandler} name="7" />
      <DigitButton e={eHandler} name="8" />
      <DigitButton e={eHandler} name="9" />
      <OperationButton e={eHandler} name="x" />
      {/* third row */}
      <DigitButton e={eHandler} name="4" />
      <DigitButton e={eHandler} name="5" />
      <DigitButton e={eHandler} name="6" />

      <OperationButton e={eHandler} name="-" />
      {/* fourth row */}
      <DigitButton e={eHandler} name="1" />
      <DigitButton e={eHandler} name="2" />
      <DigitButton e={eHandler} name="3" />

      <OperationButton e={eHandler} name="+" />
      {/* fith row */}
      <SpanTwo e={eHandler} name="0" />
      <button onClick={eHandler} name=".">
        .
      </button>
      <OperationButton e={eHandler} name="=" />
    </div>
  );
}

export default Calculator;
