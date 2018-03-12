import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty } from  '../validators'

export function BillsCheckbox (props) {

  return (
    <div className="budget-bills-checkbox">
      <Field
        name="paid-bills"
        label="What bills have you paid so far?"
        component={Input}
        element="select"
        validate={[required, nonEmpty]}
        >
        <option value=""></option>
        <option value="Internet">Internet</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
      </Field>
    </div>
  );
}

export default reduxForm({
  form: 'bills-checkbox'
})(BillsCheckbox);