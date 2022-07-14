import React from 'react';
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
import './App.css';

const App = () => (
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
          element={<Calculator />}
        />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  </Router>
);
export default App;
