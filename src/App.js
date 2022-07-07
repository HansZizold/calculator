import React, { PureComponent } from 'react';
import Calculator from './Components/Calculator';
import calculate from './logic/calculate';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      previousData: {},
      display: '0',
    };
  }

  handler = (event) => {
    const buttonValue = event.target.innerHTML;
    const { previousData } = this.state;
    const ActualData = calculate(previousData, buttonValue);
    const { total, next, operation } = ActualData;
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
    this.setState({ previousData: ActualData, display: temp });
  }

  render() {
    const { display } = this.state;
    return (
      <main>
        <section>
          <Calculator handler={this.handler} display={display} />
        </section>
      </main>
    );
  }
}
export default App;
