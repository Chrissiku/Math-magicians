/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer';
import FunctionButton from '../components/component_mocks/FunctionButton';

const props = { name: 'Chris', e: jest.fn() };
test('Test Function Button component', () => {
  const TREE = renderer.create(<FunctionButton {...props} />).toJSON();
  expect(TREE).toMatchSnapshot();
});
