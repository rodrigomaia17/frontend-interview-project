import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Launcher from './AvailabilitiesWindowLauncher.jsx';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly closed', () => {
  const c = shallow(<Launcher />);
  const tree = toJson(c)
  expect(tree).toMatchSnapshot();
});

it('renders correctly closed', () => {
  const c = shallow(<Launcher />);
  c.setState({isOpen: true})
  const tree = toJson(c)
  expect(tree).toMatchSnapshot();
});
