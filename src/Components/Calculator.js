import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <input type="button" value="0" className="input" />
      <div className="buttons1">
        <button type="button" className="button1">AC</button>
        <button type="button" className="button1">&plusmn;</button>
        <button type="button" className="button1">%</button>
        <button type="button" className="button2">&divide;</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button1">7</button>
        <button type="button" className="button1">8</button>
        <button type="button" className="button1">9</button>
        <button type="button" className="button2">&times;</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button1">4</button>
        <button type="button" className="button1">5</button>
        <button type="button" className="button1">6</button>
        <button type="button" className="button2">&minus;</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button1">1</button>
        <button type="button" className="button1">2</button>
        <button type="button" className="button1">3</button>
        <button type="button" className="button2">+</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button0">0</button>
        <button type="button" className="button1">&bull;</button>
        <button type="button" className="button2">=</button>
      </div>
    </div>
  );
}
export default Calculator;
