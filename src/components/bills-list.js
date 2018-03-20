import React from 'react';
import {connect} from 'react-redux';
import {fetchBills} from '../actions/bills';
import sumOfKeys from '../utils/sumofkeys'
import Bill from './bill';
export class billsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBills());
    }

  render () {
    let allBills;
    if (this.props.bills) {
      allBills = this.props.bills.map((bill, index) =>
      (
        <li className="pure-menu-item" key={index}>
          <Bill name={bill.name} amount={bill.amount}/>
        </li>
      )
    );
  }

  const sumOfBills = sumOfKeys(this.props.bills, 'amount');
  const afterBills = this.props.income - sumOfBills;
  const biWeekly = this.props.income / 2;

    return (
      <div className="pure-menu budget-bills-list">
        <h1>
          Bills List
        </h1>
          <p>Your monthly income is: ${this.props.income}
            <br/>Every two weeks, you make: ${biWeekly}
          </p>
        <h2>
          Here are all of your bills ({this.props.bills.length} total):
        </h2>
          <ul className="pure-menu-list">
            {allBills}
          </ul>
          <p>Total ${sumOfBills}
            <br/>
            After Bills: ${afterBills} left
          </p>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  bills: state.bills.list,
  income: state.bills.income
});

export default connect(mapStateToProps)(billsList);