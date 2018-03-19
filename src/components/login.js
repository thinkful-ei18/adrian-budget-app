import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import { Link } from 'react-router-dom';

export function logInForm (props) {
return (
  <div>
    <h1>Log In</h1>
    <form className="pure-form pure-form-stacked">
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
      <Link to="/bills">
        <button type="submit" className="pure-button pure-button-primary">Sign In</button>
      </Link>
    </form>
  </div>
);
}

export default reduxForm ({
  form: 'login'
})(logInForm);