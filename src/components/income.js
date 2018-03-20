import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { addIncome } from '../actions/income';
import './income.css';


export class AddIncome extends React.Component {

onSubmit(value) {
  this.props.dispatch(addIncome(value.monthlyIncome));
}

render () {

return (
    <main className="budget-income">
      <h1>Let's get started!</h1>
        <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
        <p>I make
          <Field
            name="monthlyIncome"
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