import React from 'react';
import {connect} from 'react-redux';
import {fetchBills} from '../actions/bills';
import sumOfKeys from '../utils/sumofkeys'
import Bill from './bill';
import Navbar from './navbar';
import './bills-list.css';
export class billsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBills());
    }

  render () {
    let allBills;
    if (this.props.bills) {
      allBills = this.props.bills.map((bill, index) =>
      (
        <li className="pure-menu-item pure-u-1-3" key={index}>
          <Bill name={bill.name} amount={bill.amount}/>
        </li>
      )
    );
  }

  const sumOfBills = sumOfKeys(this.props.bills, 'amount');
  const afterBills = this.props.income - sumOfBills;
  const biWeekly = this.props.income / 2;

    return (
      <div>
        <main className="pure-menu budget-bills-list">
          <Navbar/>
          <h1>Budget App</h1>
          <p className="budget-projection pure-g">
          <span className="monthly-income pure-u-1-2">Your monthly income is <b>${this.props.income}</b></span>
          <span className="biweekly-income pure-u-1-2">Every two weeks, you make <b>${biWeekly}</b></span>
          </p>
          {/* <h2>
            Here are all of your bills ({this.props.bills.length} total):
          </h2> */}
          <ul className=" budget-all-bills pure-menu-list pure-g">
            {allBills}
          </ul>
        </main>
        <section className="budget-overview pure-menu pure-g">
          <span className="budget-total pure-menu-item pure-u-1-2"><b>Total:</b> ${sumOfBills}</span>
          <span className="budget-after pure-menu-item pure-u-1-2"><b>After Bills:</b> ${afterBills} left</span>
        </section>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  bills: state.bills.list,
  income: state.users.income,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(billsList);