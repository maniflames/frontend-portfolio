import React from 'react';
import { shallow } from 'enzyme';
import HomeNav from './';

it('Test example', () => {
  const wrapper = shallow(<HomeNav />);
  expect(wrapper.is('ul')).toBeTruthy();
});
