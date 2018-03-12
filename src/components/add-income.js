import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';


export function AddIncome (props) {
return (
  <div className="budget-income">
  <h2>Add your monthly income!</h2>
  <p>Add your expected monthly income.</p>
    <form onClick={(value) => console.log('Monthly income:', value)}>
      <Field
        name="monthlyIncome"
        label="Monthly Income"
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
})(AddIncome);