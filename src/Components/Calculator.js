import React from 'react';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const { handler, display } = props;
  return (
    <div className="calculator">
      <input type="text" readOnly value={display} className="input" />
      <div className="buttons1">
        <button type="button" className="button1" onClick={handler}>AC</button>
        <button type="button" className="button1" onClick={handler}>+/-</button>
        <button type="button" className="button1" onClick={handler}>%</button>
        <button type="button" className="button2" onClick={handler}>÷</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button1" onClick={handler}>7</button>
        <button type="button" className="button1" onClick={handler}>8</button>
        <button type="button" className="button1" onClick={handler}>9</button>
        <button type="button" className="button2" onClick={handler}>x</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button1" onClick={handler}>4</button>
        <button type="button" className="button1" onClick={handler}>5</button>
        <button type="button" className="button1" onClick={handler}>6</button>
        <button type="button" className="button2" onClick={handler}>-</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button1" onClick={handler}>1</button>
        <button type="button" className="button1" onClick={handler}>2</button>
        <button type="button" className="button1" onClick={handler}>3</button>
        <button type="button" className="button2" onClick={handler}>+</button>
      </div>
      <div className="buttons1">
        <button type="button" className="button0" onClick={handler}>0</button>
        <button type="button" className="button1" onClick={handler}>.</button>
        <button type="button" className="button2" onClick={handler}>=</button>
      </div>
    </div>
  );
};
Calculator.propTypes = {
  handler: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
};
export default Calculator;
