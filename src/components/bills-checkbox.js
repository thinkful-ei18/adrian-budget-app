import React from 'react';

export default function BillsCheckbox (props) {
  return (
    <div className="budget-bills-checkbox">
      <select name="Bill" id="">What bills have you paid so far?
      <option value=""></option>
      <option value="Internet">Internet</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      </select>
    </div>
  );
}