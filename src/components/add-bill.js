import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';



export function addBill (props) {
  return (
    <div className="budget-add-bill">
    <h2>Add A Bill</h2>
      <p>Add a name and dollar amount for your monthly bills</p>
      <form className="add-bill">
      <Field
        name="bill-name"
        label="Bill Name"
        type="text"
        component={Input}
        validate={[required, nonEmpty]}
      />
      <Field
        name="bill-amount"
        label="Bill Amount"
        type="number"
        component={Input}
        validate={[required, nonEmpty, numbersOnly]}
      />
      <button type="submit">Submit</button>


      </form>
    </div>
  );
}

export default reduxForm({
  form: 'income'
})(addBill);