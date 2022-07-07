/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer';
import Display from '../components/component_mocks/Display';

const props = {
  value: {
    total: 0,
    next: '',
    operation: '',
  },
};

it('Test Display function ', () => {
  const TREE = renderer.create(<Display {...props} />).toJSON;
  expect(TREE).toMatchSnapshot();
});
