import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App.jsx';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() })


describe('App', () => {

    it('Renders the app', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });