import React from 'react';
import {connect} from 'react-redux';

export default function Bill (props) {
  return (
    <div className="bill">
      <h1>{props.name}</h1>
      <p>{props.amount}</p>
    </div>,
    <div className="categories">
    <p>Categories will be added soon!</p>
    </div>
  );
}