/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer';
import DigitButton from '../components/component_mocks/DigitButton';

const props = { name: 'Chris', e: jest.fn() };
test('Test Digit Button component', () => {
  const TREE = renderer.create(<DigitButton {...props} />).toJSON();
  expect(TREE).toMatchSnapshot();
});
