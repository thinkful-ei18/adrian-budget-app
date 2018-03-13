import React from 'react';
import {connect} from 'react-redux';
import {fetchBills} from '../actions/bills';

export class billsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBills());
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
        <p>Here are all of your bills</p>
        <ul>
          {allBills}
        </ul>
        <p>Total $465</p>
        <p>After Bills: $1,535 left</p>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  bills: state.bills.list
});

export default connect(mapStateToProps)(billsList);