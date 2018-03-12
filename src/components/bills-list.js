import React from 'react';

export default function billsList (props) {
  return (
    <div className="budget-add-bill">
      <h2>Add A Bill</h2>
      <p>Add a name and dollar amount for your monthly bills</p>
      <form className="add-bill">
        <label htmlFor="Bill Name">Bill Name</label>
        <input type="text" name="Bill Name"/>
        <label htmlFor="Bill Amount">Bill Amount</label>
        <input type="number" name="Bill Amount"/>
        <button type="submit">Submit</button>
      </form>
      <h2>Bills List</h2>
      <p>Here are all of your bills</p>
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