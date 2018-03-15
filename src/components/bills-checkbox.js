import React from 'react';
import { reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';

export class BillsCheckbox extends React.Component {

  render() {
    let allBills;
    if (this.props.bills) {
      allBills = this.props.bills.map((bill, index) =>
      (
        <Field
          key={index}
          name={`paid-bills-${index}`}
          label={bill.name}
          component={Input}
          type="checkbox"
          />
      )
    );
  }

    return (
      <div className="budget-bills-checkbox">
      <form className="pure-form">
          {allBills}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bills: state.bills.list,
});

 const mappedBillsCheckbox = connect(
  mapStateToProps
)(BillsCheckbox);

export default reduxForm({
  form: 'bills-checkbox'
})(mappedBillsCheckbox);
