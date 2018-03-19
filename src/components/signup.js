import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';

export function signUpForm (props) {
  return (
    <div>
      <form className="pure-form pure-form-aligned">
        <Field
        name="fullname"
        label="Full Name"
        component={Input}
        type="text"
        />
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'signup'
})(signUpForm);