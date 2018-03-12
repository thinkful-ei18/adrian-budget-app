import React from 'react';

export default function addBill (props) {
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
    </div>
  );
}