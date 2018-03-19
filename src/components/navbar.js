import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar (props) {
  return (
    <nav className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><Link to="/">Logout</Link></li>
        <li className="pure-menu-item"><a href="" class="pure-menu-link">Update Your Income</a></li>
        <li className="pure-menu-item"><a href="" class="pure-menu-link">New Bill</a></li>
      </ul>
    </nav>
  );
}