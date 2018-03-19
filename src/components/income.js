import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { addIncome } from '../actions/income';


export class AddIncome extends React.Component {

onSubmit(value) {
  this.props.dispatch(addIncome(value.monthlyIncome));
}

render () {

return (
    <main className="budget-income">
    <p>A</p>
      <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
        <Field
          name="monthlyIncome"
          label="Monthly Income"
          type="number"
          component={Input}
          validate={[required, nonEmpty, numbersOnly]}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
    );
  }
}

export default reduxForm({
  form: 'income'
})(AddIncome);