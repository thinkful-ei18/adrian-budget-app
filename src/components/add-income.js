import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';


export class AddIncome extends React.Component {

onSubmit(value) {
  console.log('Monthly income:', value)
}

render () {

return (
    <div className="budget-income">
    <h2>Add your monthly income!</h2>
    <p>Add your expected monthly income.</p>
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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
}

export default reduxForm({
  form: 'income'
})(AddIncome);