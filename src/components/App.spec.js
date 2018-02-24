import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('App exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('App contains myInput', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children("MyInput").exists()).toBe(true);
  });

  it('App contains myInput', () => {
    const wrapper = shallow(<App />);
    const event = {target: {value: "temp"}};
    wrapper.children('MyInput').children('input').simulate('change', event);
    wrapper.children('MyInput').children('button').simulate('click', {});
    expect(wrapper.state().value).toBe("temp");
  });
});

