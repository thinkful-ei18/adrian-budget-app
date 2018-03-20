import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { addIncome } from '../actions/income';
import { Link } from 'react-router-dom';
import './income.css';

export class AddIncome extends React.Component {

onSubmit(value) {
  this.props.dispatch(addIncome(value.monthlyIncome));
}

render () {

return (
    <main className="budget-income">
      <h1>Let's get started!</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
        <p>I make
          <Field
            className="pure-input-1-8"
            name="monthlyIncome"
            label="Monthly Income"
            type="number"
            component="input"
            validate={[required, nonEmpty, numbersOnly]}
          />
          dollars a month.</p>
          <Link to="/onboarding-firstbill">
          <button className="pure-button pure-button-primary" type="submit">Submit</button>
          </Link>
        </form>
    </main>
    );
  }
}

export default reduxForm({
  form: 'income'
})(AddIncome);