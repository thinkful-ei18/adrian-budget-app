import React, { Component } from 'react';
import logo from './dollar.svg';
import AddIncome from './components/add-income';
import AddBills from './components/add-bill';
import BillsList from './components/bills-list';
import BillsCheckbox from './components/bills-checkbox';
import SignUpForm from './components/signup';
import LoginForm from './components/login';
class App extends Component {
  render() {
    return (
      <div class="pure-g">
        <div class="pure-u-1-3">
          <AddIncome/>
          <AddBills />
        </div>
        <div class="pure-u-1-3">
          <BillsList />
          <BillsCheckbox />
        </div>
        <div class="pure-u-1-3">
          <SignUpForm />
          <LoginForm/>
        </div>
      </div>
    );
  }
}

export default App;
