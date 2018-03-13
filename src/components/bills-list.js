import React from 'react';
import {connect} from 'react-redux';
import {fetchBills} from '../actions/bills';

export class billsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBills());
    }

    sumOfKeys = (expenses, key) => {
      // extract this function & import it later!
      let total = 0;
      expenses.forEach(expense => {
      total = total + expense[key];
    });
    return total;
    }

  render () {
    const sumOfBills = this.sumOfKeys(this.props.bills, 'amount');
    const afterBills = this.props.income - sumOfBills;

    const allBills = this.props.bills.map((bill, index) =>
  <li key={index} className="budget-list-bill">
    {bill.name}, ${bill.amount}
  </li>
);

    return (
      <div className="budget-list">
        <h2>Bills List</h2>
        <p>Your monthly income is: ${this.props.income}</p>
        <h3>Here are all of your bills ({this.props.bills.length} total):</h3>
        <ul>
          {allBills}
        </ul>
        <p>Total ${sumOfBills}</p>
        <p>After Bills: ${afterBills} left</p>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  bills: state.bills.list,
  income: state.bills.income
});

export default connect(mapStateToProps)(billsList);