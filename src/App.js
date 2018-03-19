import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Onboarding from './components/onboarding';
import AddIncome from './components/add-income';
import AddBills from './components/add-bill';
import BillsList from './components/bills-list';
import BillsCheckbox from './components/bills-checkbox';
import SignUpForm from './components/signup';
import LoginForm from './components/login';



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <div className="pure-g">
            <div className="pure-u-1-2">
              <Onboarding/>
            </div>
            <div className="pure-u-1-2">
              <LoginForm/>
              <SignUpForm/>
            </div>
          </div>
        </Route>

      </Switch>
    );
  }
}

export default App;
