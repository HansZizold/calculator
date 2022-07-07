import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import calculate from './logic/calculate';
import './App.css';

const App = () => {
  const [data, setData] = useState({ previousData: {}, display: '0' });

  const handler = (event) => {
    const buttonValue = event.target.innerHTML;
    const actualData = calculate(data.previousData, buttonValue);
    const { total, next, operation } = actualData;
    let temp = '';
    if (total) {
      temp += ' '.concat(total);
    }
    if (operation) {
      temp += ' '.concat(operation);
    }
    if (next) {
      temp += ' '.concat(next);
    }
    setData({ previousData: actualData, display: temp });
  };

  return (
    <main>
      <section>
        <Calculator handler={handler} display={data.display} />
      </section>
    </main>
  );
};
export default App;
