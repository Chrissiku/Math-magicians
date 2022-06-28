/* eslint-disable quotes */
import "./App.css";

function App() {
  return (
    <div className="calculator-grid-container">
      <div className="result">
        <div className="first-number">0 +</div>
        <div className="second-number">0</div>
      </div>
      {/* first row */}
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="orange-color">/</button>
      {/* second row */}
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="orange-color">x</button>
      {/* third row */}
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="orange-color">-</button>
      {/* fourth row */}
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="orange-color">+</button>
      {/* fith row */}
      <button type="button" className="span-two">0</button>
      <button type="button">.</button>
      <button type="button" className="orange-color">=</button>
    </div>
  );
}

export default App;
