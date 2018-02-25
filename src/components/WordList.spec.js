import React from 'react';
import WordList from './WordList';
import { shallow } from 'enzyme';

describe('WordList tests', () => {
  it('WordList exists', () => {
    const wrapper = shallow(<WordList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('WordList contains a ul component', () => {
    const wrapper = shallow(<WordList />);
    expect(wrapper.children('ul').exists()).toBe(true);
  });
  /*
  it('WordList contains a prop of words', () => {
    const wrapper = shallow(<WordList words={[]}/>);
    console.log(wrapper.props().words);
    expect(wrapper.props().hasOwnProperty('words')).toBe(true);
  });
  */
});
