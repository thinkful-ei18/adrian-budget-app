import React from 'react';
import {connect} from 'react-redux';
import {fetchBills} from '../actions/bills';

export class billsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBills());
    }

    sumOfBills = (obj) => {
      let sum = 0;
      for(let value in obj) {
        if (typeof obj[value] === 'number') {
          sum+= parseFloat(obj[value]);
        }
      }
      return console.log(sum);
      // return sum;
    }

  render () {

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
        <p>Total ${}</p>
        <p>After Bills: $1,535 left</p>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  bills: state.bills.list,
  income: state.bills.income
});

export default connect(mapStateToProps)(billsList);