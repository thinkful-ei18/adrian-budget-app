import React from 'react';
import './bill.css';

export default function Bill (props) {
  return (
    <div className="bill">
      <h3>
        <span className="bill-amount">${props.amount} {props.beenpaid}</span>
      </h3>
      <p>
        <span className="bill-name">{props.name}</span>
        <br/>Due on {props.duedate}
        <br/>{props.billinterval}
      </p>
      <div className="bill-categories">
        <p>
          Categories coming soon.
        </p>
      </div>
    </div>
  );
}

Bill.defaultProps = {
  name: 'Happiness',
  amount: 0,
  duedate: 'March 20, 2018',
  billinterval: 'Once a month',
  beenpaid: '(Unpaid)'
};