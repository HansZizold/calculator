import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';
import ErrorPage from './Components/ErrorPage';
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
    <Router>
      <main>
        <header>
          <h1>Math Magicians</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="Calculator">Calculator</Link>
            <Link to="Quote">Quote</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/calculator"
            element={<Calculator handler={handler} display={data.display} />}
          />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
