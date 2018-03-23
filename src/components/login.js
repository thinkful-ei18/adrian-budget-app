import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import { login } from '../actions/auth';
import {Redirect} from 'react-router-dom';


export class logInForm extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      Redirect: false
    }
  }

  onSubmit(value) {
    this.props.dispatch(login(value.username, value.password));
    this.setState({Redirect: true});
  }

render () {

  if (this.state.Redirect) {
    return <Redirect to="/bills"/>;
  }

  return (
    <div>
      <h1>Log In</h1>
      <form className="pure-form pure-form-stacked" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
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
        <button type="submit" className="pure-button pure-button-primary">Sign In</button>
      </form>
    </div>
  );

}

}

export default reduxForm ({
  form: 'login'
})(logInForm);