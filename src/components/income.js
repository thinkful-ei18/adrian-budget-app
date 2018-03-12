import React from 'react';

export default function Income (props) {
return (
 <div className="budget-income">
  <h2>Add your monthly income!</h2>
  <p>Add your expected monthly income.</p>
    <form onClick={() => console.log('Form clicked!')}>
      <label htmlFor="Monthly Income">Monthly Income</label>
      <input type="number" name="Monthly Income"/>
      <button type="submit">Submit</button>
    </form>
 </div>
);
}