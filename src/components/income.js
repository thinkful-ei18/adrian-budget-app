import React from 'react';

export default function Income (props) {
return (
 <div>
  <h2>Add your monthly income!</h2>
  <p>Add your expected monthly income.</p>
    <form onClick={() => console.log('Form clicked!')}>
      <label htmlFor="Monthly Income">Monthly Income</label>
      <input type="number" name="Monthly Income"  id=""/>
      <input type="submit" value=""/>
    </form>
 </div>
);
}