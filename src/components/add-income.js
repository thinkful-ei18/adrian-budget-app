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
    <div className="budget-income">
    <h1>Add your monthly income!</h1>
    <p>Add your expected monthly income.</p>
      <form className="pure-form pure-form-stacked" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
        <Field
          name="monthlyIncome"
          label="Monthly Income"
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
  form: 'income'
})(AddIncome);