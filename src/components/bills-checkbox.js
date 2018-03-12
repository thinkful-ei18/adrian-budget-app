import React from 'react';

export default function BillsCheckbox (props) {
  return (
    <div className="budget-bills-checkbox">
      <h3>What bills have you paid so far?</h3>
      <select name="Paid Bills" id="">
      <option value=""></option>
      <option value="Internet">Internet</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      </select>
    </div>
  );
}