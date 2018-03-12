import React from 'react';

export default function billsList (props) {
  return (
    <div className="budget-bills-list">
      <h2>Bills List</h2>
      <p>Here are all of your bills</p>
      <ul>
        <li>Internet $65</li>
        <li>Utilities $250</li>
        <li>Groceries $150</li>
      </ul>
      <p>Total $465</p>
      <p>After Bills: $1,535 left</p>
    </div>
  );
}