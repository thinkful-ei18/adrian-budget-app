import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { required, nonEmpty, numbersOnly } from  '../validators';
import { postBill } from '../actions/bills';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './firstbill.css';


export class newBill extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      Redirect: false
    }
  }

  onSubmit(values) {
    values.id = this.props.userid;
    values.amount = parseInt(values.amount, 10);
    this.props.dispatch(postBill(values))
    .then(() => {
      this.setState({Redirect: true})

    })
  }

  render () {

    if (this.state.Redirect) {
      return <Redirect to="/bills"/>;
    }

    return (
      <main className="budget-firstbill">
        <h1>Cool! Let's add your first bill!</h1>
        <form className="pure-form pure-form-aligned" onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
          <p>My first bill is called
          <Field
            className="pure-input-1-8"
            name="name"
            label="Bill Name"
            type="text"
            component="input"
            validate={[required, nonEmpty]}
          />
          and it costs $
          <Field
            className="pure-input-1-8"
            name="amount"
            label="Bill Amount"
            type="number"
            component="input"
            validate={[required, nonEmpty, numbersOnly]}
          />
          per month.
          </p>
            <button className="pure-button pure-button-primary" type="submit">Submit</button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userid: state.auth.userid
});

newBill = connect(
  mapStateToProps,
)(newBill);



export default reduxForm({
  form: 'bills'
})(newBill);

