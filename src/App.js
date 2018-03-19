import React, { Component } from 'react';
import logo from './dollar.svg';
import './App.css';
import AddIncome from './components/add-income';
import AddBills from './components/add-bill';
import BillsList from './components/bills-list';
import BillsCheckbox from './components/bills-checkbox';

{/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget App</h1>
        </header>
        <p className="App-intro">
          Create an account, add your bills and log every dollar you spend!
        </p>
        <AddIncome/>
        <AddBills />
        <BillsList />
        <BillsCheckbox />
      </div> */}


class App extends Component {
  render() {
    return (

      <div class="pure-g">
        <div class="pure-u-1-2">
        <AddIncome/>
        <AddBills />
        </div>
        <div class="pure-u-1-2">
        <BillsList />
        <BillsCheckbox />
        </div>
      </div>
    );
  }
}

export default App;
