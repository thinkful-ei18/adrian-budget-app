import React from 'react';

export default function billsList (props) {
  return (
    <div className="budget-bills">
      <h2>Add A Bill</h2>
      <p>Add a name and dollar amount for your monthly bills</p>
      <form className="add-bill">
        <label htmlFor="Bill Amont">Bill Amount</label>
        <input type="number" name="Bill Amount"/>
        <button type="submit">Submit</button>
      </form>
      <ul className="budget-bills-list">
        <li>Internet $65</li>
        <li>Utilities $250</li>
        <li>Groceries $150</li>
      </ul>
      <p>Total $465</p>
      <p>After Bills: $1,535 left</p>
    </div>
  );
}