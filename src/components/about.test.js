import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import About from './about';

it('Renders without crashing', () => {
  shallow(<About/>);
});

