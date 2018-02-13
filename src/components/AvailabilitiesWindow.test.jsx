import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import AvailabilitiesWindow from './AvailabilitiesWindow.jsx';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const c = shallow(<AvailabilitiesWindow />);
  const tree = toJson(c)
  expect(tree).toMatchSnapshot();
});

it('renders correctly with date', () => {
  const c = shallow(<AvailabilitiesWindow />);
  c.setState({selectedDay: new Date("2018-02-02")})
  const tree = toJson(c)
  expect(tree).toMatchSnapshot();
});

it('renders correctly with date and spinner', () => {
  const c = shallow(<AvailabilitiesWindow />);
  c.setState({selectedDay: new Date("2018-02-02"), isLoading: true})
  const tree = toJson(c)
  expect(tree).toMatchSnapshot();
});