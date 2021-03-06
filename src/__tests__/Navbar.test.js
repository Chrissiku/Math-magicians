import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navbar';

it('Testing Navbar component', () => {
  const TREE = renderer.create(
    <Router>
      <Navigation />
    </Router>,
  ).toJSON();

  expect(TREE).toMatchSnapshot();
});
