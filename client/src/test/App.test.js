import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/extensions
import App from '../components/App.jsx';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders the page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('App', () => {
  it('has a button with className button-large', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.button-large')).toBeDefined;
  });
});

/* describe('App', () => {

    it('has a button with className button-large', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('.button-large')).toBeDefined;
    });
}); */
