import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { postBill } from '../actions/bills';



export class newBill extends React.Component {

  onSubmit(values) {
    values.amount = parseInt(values.amount, 10);
    this.props.dispatch(postBill(values));
  }

  render () {

    return (
      <div className="budget-firstbill">
        <h1>Cool! Let's add your first bill!</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
          <p>My first bill is called
          <Field
            className="pure-input-1-8"
            name="name"
            label="Bill Name"
            type="text"
            component="input"
            validate={[required, nonEmpty]}
          />
          and it costs $
          <Field
            className="pure-input-1-8"
            name="amount"
            label="Bill Amount"
            type="number"
            component="input"
            validate={[required, nonEmpty, numbersOnly]}
          />
          per month.
          </p>
          <button className="pure-button pure-button-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'bills'
})(newBill);