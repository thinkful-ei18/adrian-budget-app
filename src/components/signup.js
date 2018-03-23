import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import { Link } from 'react-router-dom';

export class signUpForm extends React.Component {

  onSubmit(value) {
  console.log(value);
  }

  render () {
    return (
      <div>
        <h1>Sign Up</h1>
        <form className="pure-form pure-form-stacked" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
          <Field
          name="fullname"
          label="Full Name"
          component={Input}
          type="text"
          validate={[required, nonEmpty]}
          />
          <Field
          name="username"
          label="Username"
          component={Input}
          type="text"
          validate={[required, nonEmpty]}
          />
          <Field
          name="password"
          label="Password"
          component={Input}
          type="text"
          validate={[required, nonEmpty]}
          />
            <button type="submit" className="pure-button pure-button-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'signup'
})(signUpForm);