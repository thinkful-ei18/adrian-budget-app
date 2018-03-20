import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import About from './components/about';
import Navbar from './components/navbar';
import Income from './components/income';
// import AddIncome from './components/add-income';
// import AddBills from './components/add-bill';
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
              <About/>
            </div>
            <div className="pure-u-1-2">
              <LoginForm/>
              <SignUpForm/>
            </div>
          </div>
        </Route>

        <Route path="/onboarding-income">
        <div className="pure-g">
            <div className="pure-u-1-1">
              <Income/>
            </div>
        </div>
        </Route>

        <Route path="/onboarding-firstbill">
        <div className="pure-g">
            <div className="pure-u-1-1">
              <Income/>
            </div>
        </div>
        </Route>

        <Route path="/bills">
        <div className="pure-g">
            <div className="pure-u-1-1">
              <Navbar/>
              <BillsList/>
              <BillsCheckbox/>
            </div>
        </div>
        </Route>
      </Switch>
    );
  }
}

export default App;
