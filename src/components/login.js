import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from 'redux-form';

export function logInForm (props) {
return (
  <div>
    <h1>Log In</h1>
    <form className="pure-form pure-form-stacked">

    </form>
  </div>
);
}

export default reduxForm ({
  form: 'login'
})(logInForm);