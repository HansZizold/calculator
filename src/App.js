import React, { PureComponent } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

class App extends PureComponent {
  render() {
    return (
      <main>
        <section>
          <Calculator />
        </section>
      </main>
    );
  }
}
export default App;
