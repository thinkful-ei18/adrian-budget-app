import React from 'react';

export default function navbar (props) {
  return (
    <nav className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li class="pure-menu-item">Log Out</li>
        <li class="pure-menu-item">Update Your Income</li>
        <li class="pure-menu-item">Add A Bill</li>
      </ul>
    </nav>
  );
}