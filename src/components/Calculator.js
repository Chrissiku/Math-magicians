/* eslint-disable react/button-has-type */
import './App.css';
import React from 'react';
import DigitButton from './component_mocks/DigitButton';
import FunctionButton from './component_mocks/FunctionButton';
import SpanTwo from './component_mocks/spanTwoButton';
import Display from './component_mocks/Display';
import OperationButton from './component_mocks/OperationButton';
import calculate from '../logic/calculate';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  eHandler = (e) => {
    const val = e.target.textContent;
    this.setState((obj) => calculate(obj, val));
  };

  render() {
    const { total, next, operation } = this.state;
    const results = `
    ${
  total || operation || next
    ? `${total || ''} ${operation || ''} ${next || ''}`
    : 0
}`;
    return (
      <div className="calculator-grid-container">
        <Display value={results} />
        {/* first row */}
        <FunctionButton e={this.eHandler} name="AC" />
        <FunctionButton e={this.eHandler} name="+/-" />
        <FunctionButton e={this.eHandler} name="%" />
        <OperationButton e={this.eHandler} name="&divide;" />
        {/* second row */}
        <DigitButton e={this.eHandler} name="7" />
        <DigitButton e={this.eHandler} name="8" />
        <DigitButton e={this.eHandler} name="9" />
        <OperationButton e={this.eHandler} name="x" />
        {/* third row */}
        <DigitButton e={this.eHandler} name="4" />
        <DigitButton e={this.eHandler} name="5" />
        <DigitButton e={this.eHandler} name="6" />

        <OperationButton e={this.eHandler} name="-" />
        {/* fourth row */}
        <DigitButton e={this.eHandler} name="1" />
        <DigitButton e={this.eHandler} name="2" />
        <DigitButton e={this.eHandler} name="3" />

        <OperationButton e={this.eHandler} name="+" />
        {/* fith row */}
        <SpanTwo e={this.eHandler} name="0" />
        <button onClick={this.eHandler} name=".">
          .
        </button>
        <OperationButton e={this.eHandler} name="=" />
      </div>
    );
  }
}

export default App;
