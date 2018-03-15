import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { addIncome } from '../actions/income';
import './css/add.income.css';


export class AddIncome extends React.Component {

onSubmit(value) {
  this.props.dispatch(addIncome(value.monthlyIncome));
}

render () {

return (
    <div className="budget-income">
    <h2 className="pure-menu-heading">Add your monthly income!</h2>
    <p>Add your expected monthly income.</p>
      <form className="pure-form pure-form-aligned" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
        <Field
          name="monthlyIncome"
          label="Monthly Income"
          type="number"
          component={Input}
          validate={[required, nonEmpty, numbersOnly]}
        />
        <button className="pure-button" type="submit">Submit</button>
      </form>
    </div>
    );
  }
}

export default reduxForm({
  form: 'income'
})(AddIncome);