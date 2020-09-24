import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App.jsx';
import { shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() })


describe('App', () => {

    it('renders the page', () => {
      const wrapper = mount(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });

describe('App', () => {

    it('has a button with className button-large', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.button-large')).toBeDefined;
    });
  });