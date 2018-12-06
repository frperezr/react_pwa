import { shallow } from 'enzyme';
import React from 'react';
import Header from '../components/Header';

it('expect to render Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
  /*
    const wrapper = shallow(<Header />)
    wrapper.find('[id:"test"]').simulate('click')
    expect(wrapper.state()).toEqual({})
    expect(wrapper.props()).toEqual({})
  */
});
