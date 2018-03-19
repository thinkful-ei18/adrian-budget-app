import React from 'react';
import './bill.css';

export default function Bill (props) {
  return (
    <div className="bill">
      <p>{props.name}: ${props.amount}</p>
    </div>
  );
}

Bill.defaultProps = {
  name: 'Happiness',
  amount: 0
};