/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/extensions
import ProgressBarEntry from '../components/ratings/ProgressBarEntry.jsx';

configure({ adapter: new Adapter() });

describe('ProgressBarEntry', () => {
  it('renders the page', () => {
    const ProgressBarComp = mount(<ProgressBarEntry />);
    expect(ProgressBarComp).toMatchSnapshot();
  });
});

describe('ProgressBarEntry', () => {
  const props = {
    value: null,
  };
  it('sets star rating with props data', () => {
    const ProgressBarComp = mount(<ProgressBarEntry {...props} />);
    expect((ProgressBarComp).prop('value')).toEqual(null);
  });
});
