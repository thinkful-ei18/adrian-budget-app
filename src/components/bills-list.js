import React from 'react';

export default class billsList extends React.Component {



  render () {

    // const staticBills = ['Internet $65', 'Groceries $250'];
    const staticBills = [
      {name: 'Internet',
      amount: 65,
    },
    {name: 'Groceries',
    amount: 250,
    },
    ];

    const bills = staticBills.map((bill, index) =>
  <li key={index} className="budget-list-bill">
    {bill.name}, ${bill.amount}
  </li>
);

    return (
      <div className="budget-list">
        <h2>Bills List</h2>
        <p>Here are all of your bills</p>
        <ul>
          {bills}
        </ul>
        <p>Total $465</p>
        <p>After Bills: $1,535 left</p>
      </div>
    );
  };
}