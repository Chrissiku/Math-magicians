/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer';
import OperationButton from '../components/component_mocks/OperationButton';

const props = { name: 'Chris', e: jest.fn() };
test('Test Operation button component', () => {
  const TREE = renderer.create(<OperationButton {...props} />).toJSON();
  expect(TREE).toMatchSnapshot();
});
