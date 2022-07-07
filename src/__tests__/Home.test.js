import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Home component testing with snapshot', () => {
  const TREE = renderer.create(<Home />).toJSON();

  expect(TREE).toMatchSnapshot();
});
