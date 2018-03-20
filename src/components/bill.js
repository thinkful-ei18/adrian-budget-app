import React from 'react';
import './bill.css';

export default function Bill (props) {
  return (
    <div className="bill">
      <h3>
      ${props.amount}
        <br/>
      </h3>
      <p>
      {props.name}
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
  amount: 0
};