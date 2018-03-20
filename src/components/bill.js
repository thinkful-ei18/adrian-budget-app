import React from 'react';
import './bill.css';

export default function Bill (props) {
  return (
    <div className="bill">
      <h1>
        {props.name}
        <br/>
      </h1>
      <p>
        ${props.amount}
      </p>
    </div>
  );
}

Bill.defaultProps = {
  name: 'Happiness',
  amount: 0
};