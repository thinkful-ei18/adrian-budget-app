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
      <div className="budget-add-bill">
      <h1>Add A Bill</h1>
        <p>Add a name and dollar amount for your monthly bills</p>
        <form className="pure-form pure-form-aligned" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
        <Field
          name="name"
          label="Bill Name"
          type="text"
          component={Input}
          validate={[required, nonEmpty]}
        />
        <Field
          name="amount"
          label="Bill Amount"
          type="number"
          component={Input}
          validate={[required, nonEmpty, numbersOnly]}
        />
        <button className="pure-button pure-button-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'bills'
})(newBill);