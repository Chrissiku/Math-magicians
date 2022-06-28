import './App.css';
import DigitButton from './component_mocks/DigitButton';
import FunctionButton from './component_mocks/FunctionButton';
import SpanTwo from './component_mocks/spanTwoButton';
import Display from './component_mocks/Display';
import OperationButton from './component_mocks/OperationButton';

function App() {
  return (
    <div className="calculator-grid-container">
      <Display value="0" />

      <FunctionButton function="AC" />
      <FunctionButton function="+/-" />
      <FunctionButton function="%" />
      <OperationButton operation="/" />

      <DigitButton value="7" />
      <DigitButton value="8" />
      <DigitButton value="0" />
      <OperationButton operation="x" />

      <DigitButton value="4" />
      <DigitButton value="5" />
      <DigitButton value="6" />
      <OperationButton operation="-" />

      <DigitButton value="1" />
      <DigitButton value="2" />
      <DigitButton value="3" />
      <OperationButton operation="+" />

      <SpanTwo value="0" />
      <button type="button">.</button>
      <OperationButton operation="=" />
    </div>
  );
}

export default App;
