import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { Redirect } from 'react-router-dom';

export class signUpForm extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      Redirect: false
    }
  }

  onSubmit(value) {
  this.props.dispatch(registerUser(value))
  .then(() => {
    this.props.dispatch(login(value.username, value.password));
  })
  .then(() => {
    this.setState({Redirect: true});
  })
  .catch(err => {
    console.log('do something with this:', err);
  });
  }

  render () {

    if (this.state.Redirect) {
      return <Redirect to="/onboarding-income"/>;
    }


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