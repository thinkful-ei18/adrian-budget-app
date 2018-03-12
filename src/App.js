import React, { Component } from 'react';
import logo from './dollar.svg';
import './App.css';
import AddIncome from './components/add-income';
import AddBills from './components/add-bill';
import BillsList from './components/bills-list';
import BillsCheckbox from './components/bills-checkbox';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
