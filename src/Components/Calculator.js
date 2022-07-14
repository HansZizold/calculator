import React, { useState } from 'react';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    previousData: {
      total: null,
      next: null,
      operation: null,
    },
  });
  const [display, setDisplay] = useState('0');

  const handler = (event) => {
    const buttonValue = event.target.textContent;
    const actualData = calculate(data.previousData, buttonValue);
    const { total, next, operation } = actualData;
    let temp = '';
    if (total) {
      temp += total;
    }
    if (operation) {
      temp += operation;
    }
    if (next) {
      temp += next;
    }
    setData({ previousData: actualData });
    setDisplay(temp);
  };

  return (
    <div className={styles.maincalc}>
      <h2>Let&#39;s do some math!</h2>
      <div>
        <input type="text" value={display} className={styles.input} readOnly />
        <div className={styles.buttons1}>
          <button type="button" className={styles.button1} onClick={handler}>AC</button>
          <button type="button" className={styles.button1} onClick={handler}>+/-</button>
          <button type="button" className={styles.button1} onClick={handler}>%</button>
          <button type="button" className={styles.button2} onClick={handler}>÷</button>
        </div>
        <div className={styles.buttons1}>
          <button type="button" className={styles.button1} onClick={handler}>7</button>
          <button type="button" className={styles.button1} onClick={handler}>8</button>
          <button type="button" className={styles.button1} onClick={handler}>9</button>
          <button type="button" className={styles.button2} onClick={handler}>x</button>
        </div>
        <div className={styles.buttons1}>
          <button type="button" className={styles.button1} onClick={handler}>4</button>
          <button type="button" className={styles.button1} onClick={handler}>5</button>
          <button type="button" className={styles.button1} onClick={handler}>6</button>
          <button type="button" className={styles.button2} onClick={handler}>-</button>
        </div>
        <div className={styles.buttons1}>
          <button type="button" className={styles.button1} onClick={handler}>1</button>
          <button type="button" className={styles.button1} onClick={handler}>2</button>
          <button type="button" className={styles.button1} onClick={handler}>3</button>
          <button type="button" className={styles.button2} onClick={handler}>+</button>
        </div>
        <div className={styles.buttons1}>
          <button type="button" className={styles.button0} onClick={handler}>0</button>
          <button type="button" className={styles.button1} onClick={handler}>.</button>
          <button type="button" className={styles.button2} onClick={handler}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
