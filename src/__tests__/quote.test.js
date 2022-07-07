import renderer from 'react-test-renderer';
import Quote from '../components/quote';

test('Quote component testing with snapshot', () => {
  const TREE = renderer.create(<Quote />).toJSON();

  expect(TREE).toMatchSnapshot();
});
