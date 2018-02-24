import React from 'react';
import MyInput from './MyInput';
import { shallow } from 'enzyme';

describe('<MyInput />', () => {
  it('Component it rendering with the correct primitive', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.name()).toBe("input");
  });

  it('Component has a state with a key of value', () => {
      const wrapper = shallow(<MyInput />);
      expect(wrapper.state().hasOwnProperty('value')).toBe(true);
  });

  it('input contains the value = ""', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.props().value).toBe("");
  });

  it('input contains the value = ""', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.props().value).toBe("");
  });

  it('input has onChange function', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.props().hasOwnProperty("onChange")).toBe(true);
  });

});