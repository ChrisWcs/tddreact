import React from 'react';
import MyInput from './MyInput';
import { shallow } from 'enzyme';

describe('<MyInput />', () => {
  it('Component it rendering with the correct primitive', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.children('input').name()).toBe("input");
  });

  it('Component has a state with a key of value', () => {
      const wrapper = shallow(<MyInput />);
      expect(wrapper.state().hasOwnProperty('value')).toBe(true);
  });

  it('input contains the value = ""', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.children('input').props().value).toBe("");
  });

  it('input contains the value = ""', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.children('input').props().value).toBe("");
  });

  it('input has onChange function', () => {
    const wrapper = shallow(<MyInput />);
    const event = {target: {value: "temp"}};
    wrapper.children('input').simulate('change', event);
    expect(wrapper.state().value).toBe("temp");
  });

  it('input has onChange function, function updates value on input', () => {
    const wrapper = shallow(<MyInput />);
    const event = {target: {value: "temp"}};
    wrapper.children('input').simulate('change', event);
    expect(wrapper.children('input').props().value).toBe("temp");
  });

  it('input is wrapped in a div', () => {
    const wrapper = shallow(<MyInput />);
    expect(wrapper.name()).toBe("div");
  });

});