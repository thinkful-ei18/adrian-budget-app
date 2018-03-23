import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { addIncome } from '../actions/users';
import './income.css';
import {Redirect} from 'react-router-dom';

export class AddIncome extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      Redirect: false
    }
  }

onSubmit(value) {
  console.log(value.income);
  this.props.dispatch(addIncome(value));
  this.setState({Redirect: true})
  // this.props.history.push('/onboarding-firstbill');
}

render () {

if (this.state.Redirect) {
  return <Redirect to="/onboarding-firstbill"/>;
}

return (
    <main className="budget-income">
      <h1>Let's get started!</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
          <p>I make
            <Field
              className="pure-input-1-8"
              name="income"
              label="Monthly Income"
              type="number"
              component="input"
              validate={[required, nonEmpty, numbersOnly]}
            />
            dollars a month.</p>
              <button className="pure-button pure-button-primary" type="submit">Submit</button>
        </form>
    </main>
    );
  }
}

export default reduxForm({
  form: 'income'
})(AddIncome);