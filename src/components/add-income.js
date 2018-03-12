import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Input from './input';
import { required, nonEmpty, maxNumbers } from  '../validators';


export function AddIncome (props) {
return (
 <div className="budget-income">
  <h2>Add your monthly income!</h2>
  <p>Add your expected monthly income.</p>
    <form onClick={() => console.log('Form clicked!')}>
      <label htmlFor="Monthly Income">Monthly Income</label>
      <input type="number" name="Monthly Income"/>
      <button type="submit">Submit</button>
    </form>
 </div>
);
}


export default reduxForm({
  form: 'income'
})(AddIncome);